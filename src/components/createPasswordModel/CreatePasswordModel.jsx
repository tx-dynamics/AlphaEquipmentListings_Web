import React from 'react'
import { crossCircleWhite } from '../../assets/icons'
import TextInputThree from '../textInputThree/TextInputThree'
import TextInputTwo from '../textInputTwo/TextInputTwo'
import './createPasswordModel.css'

export default function CreatePasswordModel(props) {

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
                    <TextInputTwo title={'Password'} placeholder={'Enter your password'}></TextInputTwo>
                    <TextInputTwo title={'Confirm Password'} placeholder={'Enter your password'}></TextInputTwo>
                </div>
                <div className='alpha-card_modal_inputs_view_two'>
                    <TextInputThree title={'Password'} placeholder={'Enter your password'}></TextInputThree>
                    <TextInputThree title={'Confirm Password'} placeholder={'Enter your password'}></TextInputThree>
                </div>
                <div onClick={props.onClick} className='alpha-payment_model_button_view'>
                    <h5>Confirm</h5>
                </div>
            </div>
        </div >
    )
}

