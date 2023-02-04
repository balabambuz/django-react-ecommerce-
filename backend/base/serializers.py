from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Product


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)#get_name
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id','_id', 'username', 'email', 'name', 'isAdmin'] #campi ritornati dall'API presenti nell'istanza di User
                                                                      #funzioni per ottenere altri campi
    def get__id(self, obj): 
        return obj.id #prendiamo gli stessi elementi del model ma con nome diverso

    def get_isAdmin(self, obj):
        return obj.is_staff
    
    def get_name(self,obj): #self sarà il serializer e obj sarà l'User model
        name = obj.first_name
        if name == '': #se il firstname è vuoto allora il nome identificativo sarà la mail 
            name = obj.email
       
        return name



class UserSerializerWithToken(UserSerializer):      #REFRESHA  il token di autorizzazione per l'utente
    token = serializers.SerializerMethodField(read_only=True)
    class Meta: 
        model = User
        fields = ['id','_id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)#obj è l'utente, quindi è il token personale dell'user
        return str(token.access_token)    


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'