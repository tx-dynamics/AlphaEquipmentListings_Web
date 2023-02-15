import React, { useState } from 'react'
import { crossCircleWhite } from '../../assets/icons'
import './otpModel.css'
import OtpInput from "react18-otp-input";

export default function OtpModel(props) {
    const [otp, setOtp] = useState("");
    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-payment_model_top_view'>
                <div className='alpha-payment_model_header_view'>
                    <div></div>
                    <h2>Verification</h2>
                    <img onClick={props.onClickClose} src={crossCircleWhite} />
                </div>
                <div className='alpha-payment_model_payment_title_view'>
                    <h2>Enter OTP Code</h2>
                    <h3>We have sent a verification code to your email.</h3>
                </div>
                <div className="alpha-otp_modal-otp_view">
                    <OtpInput
                        isInputSecure
                        inputStyle="alpha-otp_screen-modal_style"
                        numInputs={4}
                        onChange={(value) => setOtp(value)}
                        separator={<span> </span>}
                        isInputNum={true}
                        shouldAutoFocus
                        value={otp}
                        containerStyle="alpha-otp_modal-otp_container"
                    />
                </div>
                <div onClick={props.onClick} className='alpha-payment_model_button_view'>
                    <h5>Confirm</h5>
                </div>
            </div>
        </div >
    )
}

