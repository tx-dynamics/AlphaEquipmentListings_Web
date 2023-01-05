import React from "react";
import { useNavigate } from "react-router-dom";
import { authImage, logo } from "../../../assets/icons";
import { Button, TextInput } from "../../../components";
import './forgotPassword.css'

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="alpa-auth-container">
      <div className="alpha-signin-image_view">
        <div className="alpha-signin-image-logo_view">
          <img src={logo} alt='logo' className='alpha-signin-image_logo_style' />
        </div>
        <img src={authImage} alt='authImage' className='alpha-signin-image_stlye' />
      </div>
      <div className="alpha-signin-detail_view">
        <div>
          <h1>Forget Password</h1>
          <TextInput placeholder={'Enter your email'} title={'Email'} />
          <div className="alpha-forgot_password-button_view">
            <Button onClick={() => navigate('/otpscreen', { state: { screen: 'forgotpassword' } })}>SEND OTP</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
