import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import Navigation from "./Components/Navigation";
import Cart from "./Components/Cart";
import LoginComponent from "./Components/LoginComponent";
import RegisterComponent from "./Components/RegisterComponent";
import ProfileComponent from './Components/Profille.Component'
import LogoutComponent from "./Components/Logout.Component";
import AddAddress from "./Components/addAddressComponent";
import PaymentComponent from "./Components/PaymentComponent";
import OrderSuccess from "./Components/OrderSuccessComponent";
import MyOrderComponent from "./Components/MyOrderComponent";
import ProductDetailsComponent from "./Components/ProductDetailsComponent";
import NavigationTest from "./Components/NavigationTest";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation></Navigation>
      {/* <NavigationTest/> */}
        <Routes>
          <Route path="/" element={<HomeComponent />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/register" element={<RegisterComponent />}></Route>
          <Route path='/profile' element={<ProfileComponent/>}></Route>
          <Route path='/logout' element={<LogoutComponent/>}></Route>

          <Route path='/address' element={<AddAddress/>}></Route>
          <Route path='/payment' element={<PaymentComponent/>}></Route>
          <Route path='/success' element={<OrderSuccess/>}></Route>
          <Route path='/myorders' element={<MyOrderComponent/>}></Route>
          <Route path='/productDetails' element={<ProductDetailsComponent/>}></Route>
        </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
