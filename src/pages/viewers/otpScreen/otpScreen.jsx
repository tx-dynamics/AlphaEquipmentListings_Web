import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";
import { useDispatch } from "react-redux";
import OtpInput from "react18-otp-input";

import { authImage, logo } from "../../../assets/icons";
import { Button, Loader } from "../../../components";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import { snakbarOptions } from "../../../globalData";
import { accessToken, refreshToken, userData } from "../../../redux/Slices/userDataSlice";
import './otpScreen.css'
import { activeTab } from "../../../redux/Slices/activeTabSlice";

export default function OtpScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)

  const onClickVerify = async () => {
    try {
      setIsLoading(true);
      const endPoint = state.screen === 'forgotpassword' ? api.verifyForgotEmail : api.verifyEmail;
      const data = {
        otp: otp,
        device: {
          id: localStorage.getItem('deviceId'),
          deviceToken: 'xyz'
        },
        email: state.email,
      };
      await callApi(Method.POST, endPoint, data,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            if (state.screen === 'forgotpassword') {
              if (res?.data?.correct) {
                showMessage('Otp verify successfully')
                navigate('/createpassword', { state: { otp: otp, email: state.email } })
              }
              else {
                showMessage(res?.message)
              }
            }
            else {
              dispatch(userData(res.data?.user));
              dispatch(accessToken(res?.data?.token));
              dispatch(refreshToken(res?.data?.refreshToken));
              showMessage(res?.message)
              res?.data?.user?.accountType === 'seller' && dispatch(activeTab('dashboard'))

              res?.data?.user?.accountType === 'seller' ?
                navigate('/dashboard', { replace: true })
                :
                navigate('/', { replace: true })
            }
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

  const sendAgain = async () => {
    try {
      setIsLoading(true);
      const endPoint = state.screen === 'forgotpassword' ? api.forgotPassword : api.sendAgainSignupOtp;
      const data = {
        email: state?.email,
      };
      await callApi(Method.POST, endPoint, data,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            showMessage('OTP sent successfully')
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
      <div className="alpha-otp_screen-detail_view">
        <h1>Enter Verification Code</h1>
        <div className="alpha-otp_screen-otp_view">
          <OtpInput
            inputStyle="alpha-otp_screen-input_style"
            numInputs={4}
            onChange={(value) => setOtp(value)}
            separator={<span> </span>}
            isInputNum={true}
            shouldAutoFocus
            value={otp}
            containerStyle="alpha-otp_screen-otp_container"
          />
        </div>
        <div className='alpha-otp_screen-button_view'>
          <Button onClick={() => onClickVerify()}>VERIFY</Button>
        </div>
        <div className="alpha-otp_screen-send_again_view">
          <h3 onClick={() => sendAgain()}>
            Didn’t recieve a code?  {" "}
            <span style={{ color: '#F18805' }}> Send Again</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
