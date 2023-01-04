import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authImage, logo } from "../../../assets/icons";
import { Button } from "../../../components";
import OtpInput from "react18-otp-input";
import './otpScreen.css'

export default function OtpScreen() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  return (
    <div className="alpa-auth-container">
      <div className="alpha-signin-image_view">
        <div className="alpha-signin-image-logo_view">
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
          <Button>VERIFY</Button>
        </div>
        <div className="alpha-otp_screen-send_again_view">
          <h3>
            Didn’t recieve a code?  {" "}
            <span style={{ color: '#F18805' }}> Send Again</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
