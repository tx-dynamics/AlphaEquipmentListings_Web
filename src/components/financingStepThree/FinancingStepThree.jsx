import React, { useState } from 'react'
import { TextInputTwo } from '../'
import './financingStepThree.css'
import { check, financingLogo, unCheck } from '../../assets/icons'
import { useSnackbar } from 'react-simple-snackbar'
import { snakbarOptions } from '../../globalData'

export default function FinancingStepThree(props) {
    const { value } = props
    const [income, setIncome] = useState(value?.income ? value?.income : '')
    const [status, setStatus] = useState(value?.status ? value?.status : '')
    const [name, setName] = useState(value?.name ? value?.name : '')
    const [number, setNumber] = useState(value?.number ? value?.number : '')
    const [cardScore, setCardScore] = useState(value?.cardScore ? value?.cardScore : '')
    const [bankNumber, setBankNumber] = useState(value?.bankNumber ? value?.bankNumber : '')
    const buttonValue = income.length > 0 && status.length > 0 && name.length > 0 && number.length > 0 && bankNumber.length > 0
    const [showMessage, hideMessage] = useSnackbar(snakbarOptions)

    const onPressNext = () => {
        const data = {
            income: income,
            status: status,
            name: name,
            number: number,
            cardScore: cardScore,
            bankNumber: bankNumber
        }
        buttonValue ? props.onClickNext(data) : showMessage('Please fill all the fields')
    }


    return (
        <div>
            <div className="alpha-financing-finance_step_one_top_view">
                <div className="alpha-financing-finance_step_one_view">
                    <h1>Tell us about your financial information</h1>
                    <div className='alpha-financing-step_one_inputs_top_view'>
                        <TextInputTwo
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                            style={{ paddingBottom: 4 }}
                            title={'Monthly Income'}
                            placeholder={'Enter your monthly income'} />
                        <TextInputTwo
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            style={{ paddingBottom: 4 }}
                            title={'Employment Status'}
                            placeholder={'Enter employment status'} />
                        <TextInputTwo
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ paddingBottom: 4 }}
                            title={'Emploer Name'}
                            placeholder={'Enter name'} />
                        <TextInputTwo
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            style={{ paddingBottom: 4 }}
                            title={'Contact Information'}
                            placeholder={'Enter contact information'} />
                        <TextInputTwo
                            value={cardScore}
                            onChange={(e) => setCardScore(e.target.value)}
                            style={{ paddingBottom: 4 }}
                            title={'Credit Score (if known)'}
                            placeholder={'Enter credit score'} />
                        <TextInputTwo
                            value={bankNumber}
                            onChange={(e) => setBankNumber(e.target.value)}
                            style={{ paddingBottom: 4 }}
                            title={'Bank Account Information (for automatic payments)'}
                            placeholder={'Enter your bank account number'} />
                    </div>
                </div>
                <div className="alpha-financing-finance_step_one_image_view">
                    <img src={financingLogo} />
                </div>
            </div>
            <div className='alpha-financing-finance_step_two_buttons_top_view'>
                <div className='alpha-financing-finance_step_two_back_button' onClick={() => props.onClickBack()}>
                    <h2>BACK</h2>
                </div>
                <div className='alpha-financing-finance_step_two_next_button' onClick={() => onPressNext()}>
                    <h2>NEXT</h2>
                </div>
            </div>
        </div>
    )
}

