import './App.css';
import NavbarComp from './components/NavbarComp/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import HomeCompos from './components/HomeCompos/HomeCompos'
import initializeAuthentication from './Firebase/Firebase.init';
import AuthProvider from './context/AuthProvider'
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';
import AddPackage from './components/AddPackage/AddPackage';
initializeAuthentication()
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>

          <NavbarComp></NavbarComp>

          <Switch>

            <Route exact path='/'>
              <HomeCompos></HomeCompos>
              <Footer></Footer>
            </Route>
            <Route  path='/home'>
              <HomeCompos></HomeCompos>
              <Footer></Footer>
            </Route>


            <Route path='/login'>
              <Login></Login>
            </Route>
            
            <PrivateRoute path='/placeOrder/:packageId'>
                <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path='/myorders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/manage'>
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path='/addService'>
              <AddPackage></AddPackage>
            </PrivateRoute>
          </Switch>
          
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
