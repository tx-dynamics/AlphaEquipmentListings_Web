import React, { useState } from 'react'
import { crossCircleWhite } from '../../assets/icons'
import TextInputThree from '../textInputThree/TextInputThree'
import TextInputTwo from '../textInputTwo/TextInputTwo'
import './cashWithdrawModel.css'

export default function CashWithdrawModel(props) {
    const [name, setName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [branchNumber, setBranchNumber] = useState('')
    const [amount, setAmount] = useState('')

    const disableValue = name !== '' && accountNumber !== '' && amount !== '' && branchNumber !== ''


    const onClickWithdrawel = () => {
        const accountData = {
            accountName: name,
            accountNumber: accountNumber,
            branchNumber: branchNumber,
            amount: amount
        }
        disableValue &&
            props.onClick(accountData)
    }
    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-payment_model_top_view'>
                <div className='alpha-payment_model_header_view'>
                    <div></div>
                    <h2>Cash Withdrawal</h2>
                    <img onClick={props.onClickClose} src={crossCircleWhite} />
                </div>
                <div className='alpha-card_modal_inputs_view' >
                    <TextInputTwo onChange={(e) => setName(e.target.value)} title={'Account Holder Name'} placeholder={'Enter account holder name'}></TextInputTwo>
                    <TextInputTwo onChange={(e) => setAccountNumber(e.target.value)} title={'Account Number'} placeholder={'Enter your account number'}></TextInputTwo>
                    <TextInputTwo onChange={(e) => setBranchNumber(e.target.value)} title={'Branch Number'} placeholder={'Enter your branch number'}></TextInputTwo>
                    <TextInputTwo onChange={(e) => setAmount(e.target.value)} title={'Amount'} placeholder={'Enter amount'}></TextInputTwo>
                </div>
                <div className='alpha-card_modal_inputs_view_two' style={{ marginTop: 20 }}>
                    <TextInputTwo onChange={(e) => setName(e.target.value)} title={'Account Holder Name'} placeholder={'Enter account holder name'}></TextInputTwo>
                    <TextInputTwo onChange={(e) => setAccountNumber(e.target.value)} title={'Account Number'} placeholder={'Enter your account number'}></TextInputTwo>
                    <TextInputTwo onChange={(e) => setBranchNumber(e.target.value)} title={'Branch Number'} placeholder={'Enter your branch number'}></TextInputTwo>
                    <TextInputTwo onChange={(e) => setAmount(e.target.value)} title={'Amount'} placeholder={'Enter amount'}></TextInputTwo>
                </div>

                <div onClick={() => onClickWithdrawel()} className='alpha-payment_model_button_view'>
                    <h5>Withdrawal</h5>
                </div>
            </div>
        </div >
    )
}

