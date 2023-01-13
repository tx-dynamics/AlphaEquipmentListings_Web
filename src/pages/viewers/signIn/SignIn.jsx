import React from "react";
import { useNavigate } from "react-router-dom";
import { apple, authImage, facebook, google, logo } from "../../../assets/icons";
import { Button, TextInput } from "../../../components";
import "./signIn.css";

export default function SignIn() {
  const navigate = useNavigate();
  const socialArray = [
    {
      id: 1,
      icon: google
    },
    {
      id: 2,
      icon: facebook
    },
    {
      id: 3,
      icon: apple
    }
  ]

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
          <h1>Sign IN</h1>
          <TextInput placeholder={'Enter your user name'} title={'User Name'} />
          <TextInput placeholder={'Enter your password'} title={'Password'} />
          <div
            // onClick={() => navigate('/forgotpassword')}
            className="alpha-signin-forgot_password_view">
            <h3>
              Forget Password? {" "}
              <span style={{ color: '#F18805' }}>Reset Password</span>
            </h3>
          </div>
          <div className="alpha-signin-button-view">
            <Button onClick={() => navigate('/homepage', { replace: true })}>SIGN IN</Button >
          </div>
          <div className="alpha-signin-or_view">
            <h3>OR</h3>
          </div>
          <div className="alpha-signin-continue_wtih_view">
            <h3>Continue with</h3>
          </div>
          <div className="alpha-signin-social_view">
            {socialArray.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.icon} alt='icon' />
                </div>
              )
            })}
          </div>
          <div onClick={() => navigate('/signup')} className="alpha-signin-dont_have_account_view">
            <h3>
              Don’t have an account?  {" "}
              <span style={{ color: '#F18805' }}>sign up</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
