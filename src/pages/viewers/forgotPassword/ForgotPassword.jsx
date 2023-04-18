import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";

import { authImage, logo } from "../../../assets/icons";
import { Button, Loader, TextInput } from "../../../components";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import { emailFormat, snakbarOptions } from "../../../globalData";
import './forgotPassword.css'

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const emailValue = email.length > 0 && !emailFormat.test(email) ? 'Email format error' : null
  const disableValue = email.length > 1 && emailValue == null

  const onClickSendOtp = async () => {
    try {
      setIsLoading(true);
      const endPoint = api.forgotPassword;
      const data = {
        email: email,
      };
      await callApi(Method.POST, endPoint, data,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            showMessage(res?.message)
            navigate('/otpscreen', { state: { screen: 'forgotpassword', email: email } })
          }
          else {
            setIsLoading(false)
            showMessage(res?.message)
          }
        },
        err => {
          showMessage(err.message)
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="alpa-auth-container">
      <Loader loading={isLoading} />
      <div className="alpha-signin-image_view">
        <div className="alpha-signin-image-logo_view">
          <img src={logo} alt='logo' className='alpha-signin-image_logo_style' />
        </div>
        <img src={authImage} alt='authImage' className='alpha-signin-image_stlye' />
      </div>
      <div className="alpha-signin-detail_view">
        <div>
          <h1>Forget Password</h1>
          <TextInput errorText={emailValue} onChange={(e) => setEmail(e.target.value)} placeholder={'Enter your email'} title={'Email'} />
          <div className="alpha-forgot_password-button_view">
            <Button disable={!disableValue} onClick={() => onClickSendOtp()}>SEND OTP</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
