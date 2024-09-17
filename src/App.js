import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Features from "./component/Features";

import ProfileCards from "./component/ProfileCards";
import Subscription from "./component/Subscription";
import Card from "./component/Card";
import Carousel from "./component/Carousel";
import LoginPage from "./component/LoginPage";
import SignUp from "./component/SignUp";
import Pricing from "./component/Pricing";
import Forgot from "./component/Forgot";
import Payment from "./component/Payment";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./container/HomePage";
import Layout from "./container/Layout";
import HelpCenter from "./component/HelpCenter";
import AnotherPage from "./component/AnotherPage";
import Otp from "./component/Otp";


function App() {
  return (
    <>
    {/* <HelpCenter/> */}
  {/* <NavBar/>
  <Features/>
  <Carousel/>
  <ProfileCards/>
  <Subscription/>
  <Footer/> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}>
            <Route path="" element={<HomePage />} />
            <Route path='help' element={<HelpCenter/>}/>
            <Route path="price" element={<Pricing />} />
            <Route path="payment" element={<Payment />} />
          </Route> */}
          <Route path="/" element={<SignUp />} />
            <Route path="login" element={<LoginPage />}/>
            <Route path="forget" element={<Forgot />}  />
            <Route path="/another" element={<AnotherPage/>} />
            <Route path="/otp" element={<Otp/>}/>
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
