import React, { useState } from 'react'
import { crossCircleWhite } from '../../assets/icons'
import TextInputThree from '../textInputThree/TextInputThree'
import './bookingModel.css'
import { diffBtwTwoDatesOnlyDays } from '../../helpingMethods';
import { useSnackbar } from 'react-simple-snackbar';
import { snakbarOptions } from '../../globalData';

export default function BookingModel(props) {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
    const conditionTrue = startDate && endDate ? true : false
    const errorMessage = endDate < startDate ? true : false

    const onPressPay = () => {
        const date1 = new Date(startDate).getTime()
        const date2 = new Date(endDate).getTime()
        const price = diffBtwTwoDatesOnlyDays(new Date(startDate), new Date(endDate)) * props?.data?.price
        const data = {
            date1: date1,
            date2: date2,
            price: price
        }
        errorMessage ? showMessage('Invalid day selection') :
            !conditionTrue ? showMessage('Invalid day selection') :
                props.onClick(data)
    }
    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-payment_model_top_view'>
                <div className='alpha-payment_model_header_view'>
                    <div></div>
                    <h2>Booking</h2>
                    <img onClick={props.onClickClose} src={crossCircleWhite} />
                </div>
                <div className='alpha-payment_model_payment_title_view'>
                    <h2>{props?.data?.productName}</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium orci vel ante posuere, et pharetra magna consectetur.</h3>
                </div>
                <div className='alpha-booking_model_inputs_top_view'>
                    <TextInputThree onChange={(data) => setStartDate(new Date(data.target.value).getTime())} type={'date'} title={'Start Day'} />
                    <TextInputThree onChange={(data) => setEndDate(new Date(data.target.value).getTime())} type={'date'} title={'End Day'} />
                </div>

                <div className='alpha-booking_model_amount_view'>
                    <h1>Your total amount will be</h1>
                    <div className='alpha-booking_model_per_day_view'>
                        <h2>Per Day</h2>
                        <h3>$ {props?.data?.price}</h3>
                    </div>
                    <div className='alpha-booking_model_per_day_view'>
                        <h2>Total Days</h2>
                        <h3>{conditionTrue ? diffBtwTwoDatesOnlyDays(new Date(startDate), new Date(endDate)) : '0'} Days</h3>
                    </div>
                    <div className='alpha-booking_model_divider' />
                    <div className='alpha-booking_model_per_day_view'>
                        <h4>Total</h4>
                        <h5>$ {conditionTrue ? diffBtwTwoDatesOnlyDays(new Date(startDate), new Date(endDate)) * props?.data?.price : props?.data?.price}</h5>
                    </div>
                </div>
                <div onClick={() => onPressPay()} className='alpha-payment_model_button_view'>
                    <h5>Pay</h5>
                </div>
            </div>
        </div >
    )
}

