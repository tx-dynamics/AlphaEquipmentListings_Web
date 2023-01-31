import React, { useState } from 'react'
import { crossCircleWhite } from '../../assets/icons'
import TextInputThree from '../textInputThree/TextInputThree'
import TextInputTwo from '../textInputTwo/TextInputTwo'
import './cashWithdrawModel.css'

export default function CashWithdrawModel(props) {

    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-payment_model_top_view'>
                <div className='alpha-payment_model_header_view'>
                    <div></div>
                    <h2>Cash Withdrawal</h2>
                    <img onClick={props.onClickClose} src={crossCircleWhite} />
                </div>
                <div className='alpha-payment_model_payment_title_view'>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium orci vel ante posuere, et pharetra magna consectetur.</h3>
                </div>
                <div className='alpha-card_modal_inputs_view'>
                    <TextInputTwo title={'Bank'} placeholder={'Enter your bank name'}></TextInputTwo>
                    <TextInputTwo title={'Account Number'} placeholder={'Enter your account number'}></TextInputTwo>
                </div>
                <div className='alpha-card_modal_inputs_view_two'>
                    <TextInputThree title={'Bank'} placeholder={'Enter your bank name'}></TextInputThree>
                    <TextInputThree title={'Account Number'} placeholder={'Enter your account number'}></TextInputThree>
                </div>

                <div onClick={props.onClick} className='alpha-payment_model_button_view'>
                    <h5>Withdrawal</h5>
                </div>
            </div>
        </div >
    )
}

