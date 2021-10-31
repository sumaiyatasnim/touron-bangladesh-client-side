
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import AddServices from './Pages/AddService/AddServices';
import Services from './Pages/Home/Services/Services';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import OrderPlace from './Pages/OrderPlace/OrderPlace';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute exact path="/orderPlace/:serviceId">
            <OrderPlace></OrderPlace>
          </PrivateRoute>
          <PrivateRoute exact path="/myOrders">
            <MyOrder></MyOrder>
          </PrivateRoute>
          {/* <PrivateRoute exact path="/manageOrders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute> */}
          <Route exact path="/addServices">
            <AddServices></AddServices>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
