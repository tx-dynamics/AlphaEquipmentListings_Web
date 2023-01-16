import React, { useState } from 'react'
import { crossCircleWhite, wallet, creditCard, finance, googlePay, applePay, samsungPay } from '../../assets/icons'
import './paymentModel.css'

export default function PaymentModel(props) {
    const [selectedpPaymentType, setSelectedPaymentType] = useState({ id: 0 })
    const paymentTypesArray = [
        {
            id: 1,
            title: 'Online Wallet',
            icon: wallet
        },
        {
            id: 2,
            title: 'Credit Card',
            icon: creditCard
        },
        {
            id: 3,
            title: 'Financing',
            icon: finance
        },
        {
            id: 4,
            title: 'Google pay',
            icon: googlePay
        },
        {
            id: 5,
            title: 'Apple pay',
            icon: applePay
        },
        {
            id: 6,
            title: 'Samsung',
            icon: samsungPay
        }
    ]

    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-payment_model_top_view'>
                <div className='alpha-payment_model_header_view'>
                    <div></div>
                    <h2>Payment Method</h2>
                    <img src={crossCircleWhite} />
                </div>
                <div className='alpha-payment_model_payment_title_view'>
                    <h2>Select Payment Method</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium orci vel ante posuere, et pharetra magna consectetur.</h3>
                </div>
                {paymentTypesArray.map((item) => {
                    return (
                        <div onClick={() => setSelectedPaymentType(item)} key={item.id} className='alpha-payment_model_payment_options_view'>
                            <div className='alpha-payment_model_payment_options_title_view'>
                                <img src={item.icon} />
                                <h3>{item.title}</h3>
                            </div>
                            <div style={{ backgroundColor: item.id === selectedpPaymentType.id ? '#F18805' : 'transparent' }} className='alpha-payment_model_payment_options_select_view' />
                        </div>
                    )
                })}
                <div onClick={() => props.onClick(selectedpPaymentType)} className='alpha-payment_model_button_view'>
                    <h5 >Confirm</h5>
                </div>
            </div>
        </div >
    )
}

