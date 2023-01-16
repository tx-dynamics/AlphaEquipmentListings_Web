import React, { useState } from 'react'
import { crossCircleWhite } from '../../assets/icons'
import TextInputTwo from '../textInputTwo/TextInputTwo'
import './connectCardModel.css'

export default function ConnectCardModel(props) {

    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-payment_model_top_view'>
                <div className='alpha-payment_model_header_view'>
                    <div></div>
                    <h2>Connect Card</h2>
                    <img src={crossCircleWhite} />
                </div>
                <div className='alpha-payment_model_payment_title_view'>
                    <h2>Enter Card Details</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium orci vel ante posuere, et pharetra magna consectetur.</h3>
                </div>
                <div className='alpha-card_modal_inputs_view'>
                    <TextInputTwo title={'Card Name'} placeholder={'Enter your card name'}></TextInputTwo>
                    <TextInputTwo title={'Card Number'} placeholder={'Enter your card number'}></TextInputTwo>
                    <div className='alpha-card_modal_date_input_top_view'>
                        <TextInputTwo inputStyle={{ width: 200 }} title={'Expiry Date'} placeholder={'03/12/18'}></TextInputTwo>
                        <TextInputTwo inputStyle={{ width: 200 }} title={'CVC'} placeholder={'7236'}></TextInputTwo>
                    </div>
                </div>
                <div className='alpha-payment_model_button_view'>
                    <h5>Connect</h5>
                </div>
            </div>
        </div >
    )
}

