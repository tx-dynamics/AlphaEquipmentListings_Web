import React from 'react'
import { crossCircleWhite } from '../../assets/icons'
import TextInputThree from '../textInputThree/TextInputThree'
import './bookingModel.css'

export default function BookingModel(props) {
    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-payment_model_top_view'>
                <div className='alpha-payment_model_header_view'>
                    <div></div>
                    <h2>Booking</h2>
                    <img onClick={props.onClickClose} src={crossCircleWhite} />
                </div>
                <div className='alpha-payment_model_payment_title_view'>
                    <h2>Add Details</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium orci vel ante posuere, et pharetra magna consectetur.</h3>
                </div>
                <div className='alpha-booking_model_inputs_top_view'>
                    <TextInputThree type={'date'} title={'Select Days'} />
                </div>
                <div className='alpha-booking_model_amount_view'>
                    <h1>Your total amount will be</h1>
                    <div className='alpha-booking_model_per_day_view'>
                        <h2>Per Day</h2>
                        <h3>$ 80</h3>
                    </div>
                    <div className='alpha-booking_model_per_day_view'>
                        <h2>Total Days</h2>
                        <h3>2 Days</h3>
                    </div>
                    <div className='alpha-booking_model_divider' />
                    <div className='alpha-booking_model_per_day_view'>
                        <h4>Total</h4>
                        <h5>$ 160</h5>
                    </div>
                </div>
                <div onClick={props.onClick} className='alpha-payment_model_button_view'>
                    <h5>Pay</h5>
                </div>
            </div>
        </div >
    )
}

