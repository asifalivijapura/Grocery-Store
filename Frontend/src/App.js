import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Component/Header';
import Footer from "./Component/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/About/AboutUs";
import Blog from "./pages/About/Blog";
import BlogCategory from "./pages/About/BlogCategory";
import Contact from "./pages/About/Contact";
import Shop from "./pages/Shop/Shop";
import ShopGridCol3 from "./pages/Shop/ShopGridCol3";
import ShopListCol from "./pages/Shop/ShopListCol";
import ShopCart from "./pages/Shop/ShopCart";
import ShopCheckOut from "./pages/Shop/ShopCheckOut";
import ShopWishList from "./pages/Shop/ShopWishList";
import StoreList from "./pages/store/StoreList";
import SingleShop from "./pages/store/SingleShop";
import MyAccountOrder from "./pages/Accounts/MyAccountOrder";
import MyAccountSetting from "./pages/Accounts/MyAcconutSetting";
import MyAcconutNotification from "./pages/Accounts/MyAcconutNotification";
import MyAcconutPaymentMethod from "./pages/Accounts/MyAcconutPaymentMethod";
import MyAccountAddress from "./pages/Accounts/MyAccountAddress";
import MyAccountForgetPassword from "./pages/Accounts/MyAccountForgetPassword";
import MyAccountSignIn from "./pages/Accounts/MyAccountSignIn";
import MyAccountSignUp from "./pages/Accounts/MyAccountSignUp";
import Admin from "./Component/AdminSite/Admin";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
const App = () => {
  const data = {
    adminEmail: "asifali54321@gmail.com",
    adminPassword: "AsifAli098"
  }
  const [showHeader, setShowHeader] = useState(true)
  return (
    <div>
      <Router>
        {showHeader && showHeader ?
          <Header />
          : null
        }
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home setShowHeader={setShowHeader} />} />
          {/* Shop pages */}
          <Route path="/Product" element={<Shop />} />
          <Route path="/ShopGridCol3" element={<ShopGridCol3 />} />
          <Route path="/ProductDetail/:_id" element={<ShopListCol />} />
          <Route path="/ShopWishList" element={<ShopWishList />} />
          <Route path="/ShopCheckOut" element={<ShopCheckOut />} />
          <Route path="/ShopCart" element={<ShopCart />} />
          {/* Store pages */}
          <Route path="/StoreList" element={<StoreList />} />
          <Route path="/SingleShop" element={<SingleShop />} />
          {/* Accounts pages */}
          <Route path="/MyAccountOrder" element={<MyAccountOrder />} />
          <Route path="/MyAccountSetting" element={<MyAccountSetting />} />
          <Route path="/MyAcconutNotification" element={<MyAcconutNotification />} />
          <Route path="/MyAcconutPaymentMethod" element={<MyAcconutPaymentMethod />} />
          <Route path="/MyAccountAddress" element={<MyAccountAddress />} />
          <Route path="/MyAccountForgetPassword" element={<MyAccountForgetPassword />} />
          <Route path="/MyAccountSignIn" element={<MyAccountSignIn setShowHeader={setShowHeader} />} />
          <Route path="/MyAccountSignUp" element={<MyAccountSignUp />} />
          {/* About pages */}
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogCategory" element={<BlogCategory />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutUs" element={<AboutUs />} />

          {/* Admin site */}
          <Route path="/admin" element={<Admin data={data} setShowHeader={setShowHeader} />} />

        </Routes>
        {showHeader && showHeader ?
          <Footer />
          : null
        }
      </Router>
    </div>
  );
};

export default App;

