import React, { useState } from 'react'
import { crossCircleWhite } from '../../assets/icons'
import TextInputTwo from '../textInputTwo/TextInputTwo'
import './topUpModel.css'

export default function TopUpModel(props) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [amount, setAmount] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvc, setCvc] = useState('')
    const checkInputs = name !== '' && number !== '' && expiryDate !== '' && cvc !== '' && amount !== ''
    const onPressClick = () => {
        const date = new Date(expiryDate)
        let month = date.getMonth() + 1
        let finalMonth = month < 10 ? `0${month}` : month
        const data = {
            cardName: name,
            cardNumber: number.replace(/\s+/g, ''),
            expiryDate: `${finalMonth}/${date.getFullYear()}`,
            cvv: cvc,
            amount: amount
        }
        checkInputs && props?.onClick(data)
    }

    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-payment_model_top_view'>
                <div className='alpha-payment_model_header_view'>
                    <div></div>
                    <h2>Top up</h2>
                    <img onClick={props.onClickClose} src={crossCircleWhite} />
                </div>
                <div className='alpha-payment_model_payment_title_view'>
                    <h2>Enter Card Details</h2>
                </div>
                <div className='alpha-card_modal_inputs_view'>
                    <TextInputTwo onChange={(e) => setName(e.target.value)} title={'Card Name'} placeholder={'Enter your card name'}></TextInputTwo>
                    <TextInputTwo maxLength={16} onChange={(e) => setNumber(e.target.value)} title={'Card Number'} placeholder={'Enter your card number'}></TextInputTwo>
                    <TextInputTwo onChange={(e) => setAmount(e.target.value)} title={'Amount'} placeholder={'Enter amount'}></TextInputTwo>

                    <div className='alpha-card_modal_date_input_top_view'>
                        <TextInputTwo value={expiryDate} type={'date'} onChange={(e) => setExpiryDate(e.target.value)} inputStyle={{ width: 200, flex: 1 }} title={'Expiry Date'} placeholder={'03/12/18'}></TextInputTwo>
                        <TextInputTwo maxLength={3} onChange={(e) => setCvc(e.target.value)} inputStyle={{ width: 200 }} title={'CVC'} placeholder={'723'}></TextInputTwo>
                    </div>
                </div>
                <div onClick={() => onPressClick()} className='alpha-payment_model_button_view'>
                    <h5>Confirm</h5>
                </div>
            </div>
        </div >
    )
}
