import React from "react";
import { useNavigate } from "react-router-dom";
import { authImage, logo } from "../../../assets/icons";
import { Button, TextInput } from "../../../components";
import './createPassword.css'

export default function CreatePassword() {
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
          <h1>Create New Password</h1>
          <TextInput placeholder={'Enter your password'} title={'Password'} />
          <TextInput placeholder={'Enter your password'} title={'Confirm Password'} />
          <div className="alpha-create_password-button_view">
            <Button onClick={() => navigate(-3)}>CONFIRM</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
