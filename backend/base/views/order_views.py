from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response


from base.models import Product, Order, OrderItem, ShippingAddress
from base.serializers import ProductSerializer, OrderSerializer

 
from rest_framework import status

@api_view(['POST']) #l'API view si aspetta una  quindi []
#@permission_classes(['IsAuthenticated'])
def addOrderItems(request):
    user = request.user
    data = request.data #dalla request triggerata nel frontend prendo i dati

    orderItems = data['orderItems']#dal pacchetto prendo quello che mi serve

    if orderItems and len(orderItems) == 0:
        return Response({'detail':'No Order Items'}, status=status.HTTP_400_BAD_REQUEST)
    else: 

         #(1) crea l'ordine

         order = Order.objects.create(
            user=user,
            paymentMethod=data['paymentMethod'],
            taxPrice=data['taxPrice'],
            shippingPrice=data['shippingPrice'],
            totalPrice=data['totalPrice'], #data è considerato un array
         )
         #(2) crea l'indirizzo di spedizione

         shipping = ShippingAddress.objects.create(
            order=order,
            address=data['shippingAddress']['address'],
            city=data['shippingAddress']['city'],
            postalCode=data['shippingAddress']['postalCode'],
            country=data['shippingAddress']['country'],
            
            
         )
         #(3) crea OrderItems e setta l'Order in relazione con OrderItems

         for i in orderItems:
            product = Product.objects.get(_id=i['product'])   #riporta dal database un oggetto product che corrisponde al valore _id contenuto nel dictionary orderItems

            item = OrderItem.objects.create( #crea un oggetto orderItem per uno specifico Order, 
                product=product,             
                order=order,
                name=product.name,
                qty=i['qty'],
                price=i['price'],
                image=product.image.url,
            )

         #(4) aggiorna la quantità disponibile del prodotto

         product.countInStock -= item.qty #modifico dinamcamente la quantita dell'oggetto che ho preso dal db
         product.save()
   
         serializer = OrderSerializer(order, many=False)
         return Response(serializer.data)