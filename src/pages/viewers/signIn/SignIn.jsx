import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'react-simple-snackbar'

import { apple, authImage, facebook, google, hide, logo, show } from "../../../assets/icons";
import { Button, Loader, TextInput } from "../../../components";
import { api } from '../../../network/Environment'
import { accessToken, refreshToken, userData } from "../../../redux/Slices/userDataSlice";
import { Method, callApi } from "../../../network/NetworkManger";
import { snakbarOptions } from '../../../globalData'
import "./signIn.css";
import { activeTab } from "../../../redux/Slices/activeTabSlice";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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

  const onClickSignin = async () => {
    try {
      setIsLoading(true);
      const endPoint = api.login;
      const data = {
        email: email,
        password: password,
        device: {
          id: localStorage.getItem('deviceId'),
          deviceToken: 'xyz'
        },
      };
      await callApi(Method.POST, endPoint, data,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            showMessage(res.message)
            dispatch(userData(res.data?.user));
            dispatch(accessToken(res?.data?.token));
            dispatch(refreshToken(res?.data?.refreshToken));
            res?.data?.user?.accountType === 'seller' && dispatch(activeTab('dashboard'))
            res?.data?.user?.accountType === 'seller' ?
              navigate('/dashboard', { replace: true })
              :
              navigate('/', { replace: true })
          }
          else {
            setIsLoading(false)
            showMessage(res.message)
          }
        },
        err => {
          showMessage(err.message)
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
    }
  }

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
          <h1>Sign IN</h1>
          <TextInput onChange={(e) => setEmail(e.target.value)} placeholder={'Enter your email'} title={'Email'} />
          <TextInput onChange={(e) => setPassword(e.target.value)} onClickEye={() => setShowPassword(!showPassword)} type={!showPassword ? 'password' : 'text'} eye eyeIcon={showPassword ? show : hide} placeholder={'Enter your password'} title={'Password'} />
          <div
            onClick={() => navigate('/forgotpassword')}
            className="alpha-signin-forgot_password_view">
            <h3>
              Forget Password? {" "}
              <span style={{ color: '#F18805' }}>Reset Password</span>
            </h3>
          </div>
          <div className="alpha-signin-button-view">
            <Button
              onClick={() => onClickSignin()}
            >SIGN IN</Button >
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
    </div >
  );
}
