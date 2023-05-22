import React, { useState } from 'react'
import { TextInputTwo } from '../'
import './financingStepFour.css'
import { financingLogo } from '../../assets/icons'
import { useSnackbar } from 'react-simple-snackbar'
import { snakbarOptions } from '../../globalData'

export default function FinancingStepFour(props) {
    const { value } = props
    const [reason, setReason] = useState(value?.reason ? value?.reason : '')
    const [otherInfo, setOtherInfo] = useState(value?.otherInfo ? value?.otherInfo : '')
    const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
    const buttonValue = reason.length > 0 && otherInfo.length > 0

    const onPressNext = () => {
        const data = {
            reason: reason,
            otherInfo: otherInfo
        }
        buttonValue ? props.onClickNext(data) : showMessage('Please fill all fields')
    }

    return (
        <div>
            <div className="alpha-financing-finance_step_one_top_view">
                <div className="alpha-financing-finance_step_one_view">
                    <h1>Tell us about your additional information</h1>
                    <div className='alpha-financing-step_one_inputs_top_view'>
                        <TextInputTwo
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            style={{ paddingBottom: 4 }}
                            title={'Reason for Financing'}
                            placeholder={'Enter reason for financing'} />
                        <TextInputTwo
                            value={otherInfo}
                            onChange={(e) => setOtherInfo(e.target.value)}
                            style={{ paddingBottom: 4 }}
                            title={'Any pther information relevant to the loan application'}
                            placeholder={'Other info'} />
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

