import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";

import { apple, authImage, facebook, google, hide, logo, show } from "../../../assets/icons";
import { Button, Loader, TextInput } from "../../../components";
import { emailFormat, snakbarOptions } from "../../../globalData";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import './signUp.css'

export default function SignUp() {
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [selectedAccountType, setSelectedAccountType] = useState({ id: 1, title: 'BUYER', type: 'buyer' })
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const nameValue = name.length > 0 && name.length < 4 ? 'Username must be 4 character' : null
  const emailValue = email.length > 0 && !emailFormat.test(email) ? 'Email format error' : null
  const passwordValue = password.length > 0 && password.length < 8 ? 'Password must be 8 character long' : null
  const confirmPasswordValue = confirmPassword.length > 0 && password !== confirmPassword ? 'Password and conform password not matched' : null
  const disableValue = (name.length > 1 && nameValue == null) && (email.length > 1 && emailValue == null) && (password.length > 1 && passwordValue == null) && (confirmPassword.length > 1 && confirmPasswordValue == null)
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
  const accountTypeArray = [
    {
      id: 1,
      title: 'BUYER',
      type: 'buyer'
    },
    {
      id: 2,
      title: 'SELLER',
      type: 'seller'
    },

  ]

  const onClickSignup = async () => {
    try {
      setIsLoading(true);
      const endPoint = api.signup;
      const data = {
        name: name,
        email: String(email).trim(),
        password: password,
        accountType: selectedAccountType.type
      };
      await callApi(Method.POST, endPoint, data,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            showMessage('Otp has been send to your email')
            navigate('/otpscreen', { state: { screen: 'signup', email: email } })
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
          <h1 style={{ paddingBottom: 40 }}>Create an Account</h1>
          <TextInput errorText={nameValue} onChange={(e) => setName(e.target.value)} placeholder={'Enter your user name'} title={'User Name'} />
          <TextInput errorText={emailValue} onChange={(e) => setEmail(e.target.value)} placeholder={'Enter your email'} title={'Email'} />
          <TextInput errorText={passwordValue} onChange={(e) => setPassword(e.target.value)} onClickEye={() => setShowPassword(!showPassword)} type={!showPassword ? 'password' : 'text'} eye eyeIcon={showPassword ? show : hide} placeholder={'Enter your password'} title={'Password'} />
          <TextInput errorText={confirmPasswordValue} onChange={(e) => setConfirmPassword(e.target.value)} onClickEye={() => setShowConfirmPassword(!showConfirmPassword)} type={!showConfirmPassword ? 'password' : 'text'} eye eyeIcon={showConfirmPassword ? show : hide} placeholder={'Enter your password'} title={'Confirm Password'} />
          <div className="alpha-signup-radio_view_top_view">
            <h5>Select Account Type</h5>
            <div style={{ flexDirection: 'row', display: 'flex', }}>
              {accountTypeArray.map((item, index) => {
                return (
                  <div onClick={() => setSelectedAccountType(item)} key={index} className="alpha-signup-radio_view_image_top_view">
                    <div style={{ backgroundColor: item.id === selectedAccountType.id ? '#F18805' : 'transparent' }} />
                    <h3>
                      {item.title}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="alpha-signin-button-view">
            <Button disable={!disableValue} onClick={() => onClickSignup()}>SIGN UP</Button>
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
          <div onClick={() => navigate('/signin')} className="alpha-signin-dont_have_account_view">
            <h3>
              Already have an account?  {" "}
              <span style={{ color: '#F18805' }}>sign in</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
