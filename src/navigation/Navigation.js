import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Viewers from "../pages/viewers";
import * as Admin from "../pages/admin";

// import * as Admin from "../pages/admin";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Viewers.SignIn />} />
      <Route path="/signup" element={<Viewers.SignUp />} />
      {/* <Route path="/otpscreen" element={<Viewers.OtpScreen />} /> */}
      {/* <Route path="/forgotpassword" element={<Viewers.ForgotPassword />} /> */}
      {/* <Route path="/createpassword" element={<Viewers.CreatePassword />} /> */}
      <Route path="/homepage" element={<Viewers.HomePage />} />
      <Route path="/maincategorypage" element={<Viewers.MainCategoryPage />} />
      <Route path="/productlistingpage" element={<Viewers.ProductListingPage />} />
      <Route path="/productdetailpage" element={<Viewers.ProductDetailPage />} />
      <Route path="/calculator" element={<Viewers.Calculator />} />
      <Route path="/financing" element={<Viewers.Financing />} />
      <Route path="/profile" element={<Viewers.Profile />} />
      <Route path="/wallet" element={<Viewers.Wallet />} />
      <Route path="/faqs" element={<Viewers.Faqs />} />
      <Route path="/blogpage" element={<Viewers.BlogPage />} />
      <Route path="/blogdetailpage" element={<Viewers.BlogDetailPage />} />
      <Route path="/chatpagebuyer" element={<Viewers.ChatPageBuyer />} />





      <Route path="/dashboard" element={<Admin.Dashboard />} />
      <Route path="/shop" element={<Admin.Shop />} />
      <Route path="/myshop" element={<Admin.MyShop />} />
      <Route path="/paymenthistory" element={<Admin.PaymentHistory />} />
      <Route path="/orderstatus" element={<Admin.OrderStatus />} />
      <Route path="/rentrequest" element={<Admin.RentRequest />} />
      <Route path="/buyrequest" element={<Admin.BuyRequest />} />
      <Route path="/auctionrequest" element={<Admin.AuctionRequest />} />
      <Route path="/rentrequestdetail" element={<Admin.RentRequestDetail />} />
      <Route path="/buyrequestdetail" element={<Admin.BuyRequestDetail />} />
      <Route path="/auctionrequestdetail" element={<Admin.AuctionRequestDetail />} />
      <Route path="/addproduct" element={<Admin.AddProduct />} />
      <Route path="/profileadmin" element={<Admin.ProfileAdmin />} />
      <Route path="/chatadmin" element={<Admin.ChatAdmin />} />
      <Route path="/walletadmin" element={<Admin.WalletAdmin />} />

      {/* <Route path="/" element={<Viewers.HomePage />} />
      <Route path="/about" element={<Viewers.AboutUs />} />
      <Route path="/contactUs" element={<Viewers.ContactUs />} />
      <Route path="/signUp" element={<Viewers.SignUp />} />
      <Route path="/signIn" element={<Viewers.SignIn />} />
      <Route path="/fillOutForm" element={<Viewers.FillOutForm />} />
      <Route path="/createProfile" element={<Viewers.CreateProfile />} />
      <Route
        path="/registrationPending"
        element={<Viewers.RegistrationPending />}
      />
      <Route
        path="/registrationSuccessfull"
        element={<Viewers.RegistrationSuccessfull />}
      />
      <Route path="/forgotPassword" element={<Viewers.ForgotPassword />} />
      <Route path="/confirmPassword" element={<Viewers.ConfirmPassword />} />
      <Route path="/verifyEmail" element={<Viewers.VerifyEmail />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="dashboard/*" element={<Admin.Layout />} />
      </Route> */}
    </Routes>
  );
};

export default Navigation;
