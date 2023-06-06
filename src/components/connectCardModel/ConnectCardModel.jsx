

import React, { useState } from 'react'
import { crossCircleWhite } from '../../assets/icons'
import TextInputTwo from '../textInputTwo/TextInputTwo'
import './connectCardModel.css'
import { useSnackbar } from 'react-simple-snackbar'
import { snakbarOptions } from '../../globalData'

export default function ConnectCardModel(props) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvc, setCvc] = useState('')
    const [showMessage, hideMessage] = useSnackbar(snakbarOptions)

    const nameValue = name.length > 0 && name.length < 4 ? 'Card name must be 4 character' : null
    const numberValue = number.length > 0 && number.length < 16 ? 'Card number must be 16 characters long' : null
    const cvvValue = cvc.length > 0 && cvc.length < 3 ? 'Please enter cvc ' : null
    const disableValue = (name.length > 1 && nameValue == null) && (number.length > 1 && numberValue == null) && (cvc.length > 1 && cvvValue == null) && (expiryDate.length > 1)

    const onPressClick = () => {
        const date = new Date(expiryDate)
        let month = date.getMonth() + 1
        let finalMonth = month < 10 ? `0${month}` : month
        const data = {
            cardName: name,
            cardNumber: number.replace(/\s+/g, ''),
            expiryDate: `${finalMonth}/${date.getFullYear()}`,
            cvv: cvc
        }
        props?.onClick(data)

    }

    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-payment_model_top_view'>
                <div className='alpha-payment_model_header_view'>
                    <div></div>
                    <h2>Connect Card</h2>
                    <img onClick={props.onClickClose} src={crossCircleWhite} />
                </div>
                <div className='alpha-payment_model_payment_title_view'>
                    <h2>Enter Card Details</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium orci vel ante posuere, et pharetra magna consectetur.</h3>
                </div>
                <div className='alpha-card_modal_inputs_view_Card'>
                    <TextInputTwo errorText={nameValue} onChange={(e) => setName(e.target.value)} title={'Card Name'} placeholder={'Enter your card name'}></TextInputTwo>
                    <TextInputTwo errorText={numberValue} maxLength={16} onChange={(e) => setNumber(e.target.value)} title={'Card Number'} placeholder={'Enter your card number'}></TextInputTwo>
                    <div className='alpha-card_modal_date_input_top_view'>
                        <TextInputTwo value={expiryDate} type={'date'} onChange={(e) => setExpiryDate(e.target.value)} inputStyle={{ width: 200, flex: 1 }} title={'Expiry Date'} placeholder={'03/12/18'}></TextInputTwo>
                        <TextInputTwo errorText={cvvValue} maxLength={3} onChange={(e) => setCvc(e.target.value)} inputStyle={{ width: 200 }} title={'CVC'} placeholder={'723'}></TextInputTwo>
                    </div>
                </div>
                <div onClick={() => disableValue ? onPressClick() : showMessage('Please fill all the fields')} className={disableValue ? 'alpha-payment_model_button_view' : 'alpha-payment_model_button_view_disable'} >
                    <h5>Connect</h5>
                </div>
            </div>
        </div >
    )
}


