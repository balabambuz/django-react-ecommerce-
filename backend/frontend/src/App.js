import React from 'react';
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import { HashRouter as Router, Route} from 'react-router-dom'
import PreLoader from './components/PreLoader';



import StartScreen from './screens/StartScreen'
import ShopScreen from './screens/ShopScreen'
import DisplayScreen from './screens/DisplayScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen' 
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen' 
import ShippingScreen from './screens/ShippingScreen'  
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import TransitionScreen from './screens/TransitionScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import WorkScreen from './screens/WorkScreen';
import AboutMeScreen from './screens/AboutMeScreen';


function App() {
 

  return (
  <>
  <PreLoader/>
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          
              <Route path='/' component={StartScreen} exact/> {/* se non metto exact la pagina si fonderà con le altre */}
              <Route path='/home' component={DisplayScreen}/>
              <Route path='/works' component={DisplayScreen}/>
              <Route path='/about_me' component={AboutMeScreen}/>
              <Route path='/work/:name'component={WorkScreen}/>
              <Route path='/shop' component={ShopScreen}/>
              <Route path='/login' component={LoginScreen} />
              <Route path='/register' component={RegisterScreen} />
              <Route path='/profile' component={ProfileScreen} />
              <Route path='/shipping' component={ShippingScreen}/>
              <Route path='/payment' component={PaymentScreen}/>
              <Route path='/placeorder' component={PlaceOrderScreen}/>
              <Route path='/order/:id' component={OrderScreen}/>
              <Route path='/transition' component={TransitionScreen}/>
              <Route path='/product/:id' component={ProductScreen} />
              <Route path='/cart/:id?' component={CartScreen}/>

              <Route path='/admin/userlist' component={UserListScreen}/>
              <Route path='/admin/user/:id/edit' component={UserEditScreen}/>

              <Route path='/admin/productlist' component={ProductListScreen}/>
              <Route path='/admin/product/:id/edit' component={ProductEditScreen}/>

              <Route path='/admin/orderlist' component={OrderListScreen}/>
              
            
        </Container>
      </main>
      <Footer />
    </Router>
  </>
  );
}

export default App;
