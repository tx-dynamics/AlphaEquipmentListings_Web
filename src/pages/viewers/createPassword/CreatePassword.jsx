import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";

import { authImage, logo } from "../../../assets/icons";
import { Button, Loader, TextInput } from "../../../components";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import { snakbarOptions } from "../../../globalData";
import './createPassword.css'

export default function CreatePassword() {
  const navigate = useNavigate();
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const passwordValue = password.length > 0 && password.length < 8 ? 'Password must be 8 character long' : null
  const confirmPasswordValue = confirmPassword.length > 0 && password !== confirmPassword ? 'Password and conform password not matched' : null
  const disableValue = (password.length > 1 && passwordValue == null) && (confirmPassword.length > 1 && confirmPasswordValue == null)

  const onClickConfrim = async () => {
    try {
      setIsLoading(true);
      const endPoint = api.resetPassword;
      const data = {
        email: state.email,
        otp: state.otp,
        password: password
      };
      await callApi(Method.PATCH, endPoint, data,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            showMessage('Password successfully changed')
            navigate(-3)
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
        <div onClick={() => navigate('/')} className="alpha-signin-image-logo_view">
          <img src={logo} alt='logo' className='alpha-signin-image_logo_style' />
        </div>
        <img src={authImage} alt='authImage' className='alpha-signin-image_stlye' />
      </div>
      <div className="alpha-signin-detail_view">
        <div>
          <h1>Create New Password</h1>
          <TextInput errorText={passwordValue} onChange={(e) => setPassword(e.target.value)} placeholder={'Enter your password'} title={'Password'} />
          <TextInput errorText={confirmPasswordValue} onChange={(e) => setConfirmPassword(e.target.value)} placeholder={'Enter your password'} title={'Confirm Password'} />
          <div className="alpha-create_password-button_view">
            <Button disable={!disableValue} onClick={() => onClickConfrim()}>CONFIRM</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
