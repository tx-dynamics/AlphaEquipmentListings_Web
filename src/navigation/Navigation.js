import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import * as Viewers from "../pages/viewers";
import * as Admin from "../pages/admin";
import { store } from "../redux/store";
import PrivateRoute from "./protected-route";

// import * as Admin from "../pages/admin";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Viewers.HomePage />} />
      <Route path="/signin" element={<Viewers.SignIn />} />
      <Route path="/signup" element={<Viewers.SignUp />} />
      <Route path="/otpscreen" element={<Viewers.OtpScreen />} />
      <Route path="/forgotpassword" element={<Viewers.ForgotPassword />} />
      <Route path="/createpassword" element={<Viewers.CreatePassword />} />
      <Route path="/maincategorypage" element={<Viewers.MainCategoryPage />} />
      <Route path="/productlistingpage" element={<Viewers.ProductListingPage />} />
      <Route path="/productdetailpage" element={<Viewers.ProductDetailPage />} />
      <Route path="/calculator" element={<Viewers.Calculator />} />
      <Route path="/financing" element={<Viewers.Financing />} />

      <Route path="/wallet" element={<Viewers.Wallet />} />
      <Route path="/profile" element={<Viewers.Profile />} />
      <Route path="/faqs" element={<Viewers.Faqs />} />
      <Route path="/blogpage" element={<Viewers.BlogPage />} />
      <Route path="/blogdetailpage" element={<Viewers.BlogDetailPage />} />
      <Route path="/chatpagebuyer" element={<Viewers.ChatPageBuyer />} />
      <Route path="/subscriptionpage" element={<Viewers.SubscriptionPage />} />

      <Route path="/shop" element={<PrivateRoute><Admin.Shop /></PrivateRoute>} />
      <Route path="/myshop" element={<PrivateRoute><Admin.MyShop /></PrivateRoute>} />
      <Route path="/paymenthistory" element={<PrivateRoute><Admin.PaymentHistory /></PrivateRoute>} />
      <Route path="/orderstatus" element={<PrivateRoute><Admin.OrderStatus /></PrivateRoute>} />
      <Route path="/rentrequest" element={<PrivateRoute><Admin.RentRequest /></PrivateRoute>} />
      <Route path="/buyrequest" element={<PrivateRoute><Admin.BuyRequest /></PrivateRoute>} />
      <Route path="/auctionrequest" element={<PrivateRoute><Admin.AuctionRequest /></PrivateRoute>} />
      <Route path="/rentrequestdetail" element={<PrivateRoute><Admin.RentRequestDetail /></PrivateRoute>} />
      <Route path="/buyrequestdetail" element={<PrivateRoute><Admin.BuyRequestDetail /></PrivateRoute>} />
      <Route path="/auctionrequestdetail" element={<PrivateRoute><Admin.AuctionRequestDetail /></PrivateRoute>} />
      <Route path="/addproduct" element={<PrivateRoute><Admin.AddProduct /></PrivateRoute>} />
      <Route path="/profileadmin" element={<PrivateRoute><Admin.ProfileAdmin /></PrivateRoute>} />
      <Route path="/chatadmin" element={<PrivateRoute><Admin.ChatAdmin /></PrivateRoute>} />
      <Route path="/walletadmin" element={<PrivateRoute><Admin.WalletAdmin /></PrivateRoute>} />
      <Route path="/dashboard" element={<PrivateRoute><Admin.Dashboard /></PrivateRoute>} />
      <Route path="*" element={<Viewers.PageNotFound />} />
    </Routes>
  );
};

export default Navigation;
