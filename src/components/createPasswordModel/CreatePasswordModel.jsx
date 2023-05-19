import React, { useState } from 'react'
import { crossCircleWhite } from '../../assets/icons'
import TextInputThree from '../textInputThree/TextInputThree'
import TextInputTwo from '../textInputTwo/TextInputTwo'
import './createPasswordModel.css'

export default function CreatePasswordModel(props) {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const passwordValue = newPassword.length > 0 && newPassword.length < 8 ? 'Password must be 8 character long' : null
    const confirmPasswordValue = confirmPassword.length > 0 && newPassword !== confirmPassword ? 'Password and conform password not matched' : null
    const disableValue = (newPassword.length > 1 && passwordValue == null) && (confirmPassword.length > 1 && confirmPasswordValue == null)

    const onClickConfirm = () => {
        disableValue && props.onClick(newPassword)
    }

    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-payment_model_top_view'>
                <div className='alpha-payment_model_header_view'>
                    <div></div>
                    <h2>Change Password</h2>
                    <img onClick={props.onClickClose} src={crossCircleWhite} />
                </div>
                <div className='alpha-payment_model_payment_title_view'>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium orci vel ante posuere, et pharetra magna consectetur.</h3>
                </div>
                <div className='alpha-card_modal_inputs_view'>
                    <TextInputTwo onChange={(e) => setNewPassword(e.target.value)} title={'Password'} placeholder={'Enter your password'}></TextInputTwo>
                    <TextInputTwo onChange={(e) => setConfirmPassword(e.target.value)} title={'Confirm Password'} placeholder={'Enter your password'}></TextInputTwo>
                </div>
                <div className='alpha-card_modal_inputs_view_two'>
                    <TextInputThree onChange={(e) => setNewPassword(e.target.value)} title={'Password'} placeholder={'Enter your password'}></TextInputThree>
                    <TextInputThree onChange={(e) => setConfirmPassword(e.target.value)} title={'Confirm Password'} placeholder={'Enter your password'}></TextInputThree>
                </div>
                <div onClick={() => onClickConfirm()} className='alpha-payment_model_button_view'>
                    <h5>Confirm</h5>
                </div>
            </div>
        </div >
    )
}

