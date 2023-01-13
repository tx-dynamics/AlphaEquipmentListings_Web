import React, { useState } from 'react'
import { TextInputTwo } from '../'
import './financingStepFive.css'
import { check, financingLogo, unCheck } from '../../assets/icons'

export default function FinancingStepFive(props) {
    const [checkBoxOne, setCheckBoxOne] = useState(false)
    const [checkBoxTwo, setCheckBoxTwo] = useState(false)
    const [phoneTypeDropdpwn, setPhoneTypeDropdpwn] = useState(false)
    const [phoneTypeValue, setPhoneTypeValue] = useState('')
    const phoneTypeArray = [
        {
            id: 1,
            title: 'Transport Truck',
        },
        {
            id: 2,
            title: 'Earth Moving',
        },
        {
            id: 3,
            title: 'Lifting Material',
        },
        {
            id: 4,
            title: 'Other'
        }
    ]

    return (
        <div>
            <div className="alpha-financing-finance_step_one_top_view">
                <div className="alpha-financing-finance_step_one_view">
                    <h1>Tell us about your equipment needs</h1>
                    <div className='alpha-financing-step_one_inputs_top_view'>
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'First Name'}
                            placeholder={'Enter your name'} />
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Middle Name'}
                            placeholder={'Enter your middle name'} />
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Last Name'}
                            placeholder={'Enter your last name'} />
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Social Security Number'}
                            placeholder={'Enter social security number'} />
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Driver lisence Number'}
                            placeholder={'Enter your driver lisence number'} />
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Address line 1'}
                            placeholder={'Enter your address'} />
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Address line 2'}
                            placeholder={'Enter your address'} />
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'City'}
                            placeholder={'Enter your city'} />
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Zip Code'}
                            placeholder={'Enter zip code'} />
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Phone number'}
                            placeholder={'123 4545643'} />
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Alternate Phone number'}
                            placeholder={'123 4545643'} />
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            dropDownStyle={{ width: 340, left: 0 }}
                            disabled
                            selectedValue={(item) => [setPhoneTypeValue(item.title), setPhoneTypeDropdpwn(false)]}
                            value={phoneTypeValue}
                            onClickDropDown={() => setPhoneTypeDropdpwn(!phoneTypeDropdpwn)}
                            dropDownArray={phoneTypeArray}
                            dropDownValue={phoneTypeDropdpwn}
                            type={'dropdown'}
                            title={'Phone Type'}
                            placeholder={'Select your phone type'} />
                    </div>
                    <div className='alpha-financing-finance_step_four_des_view'>
                        <h3>Sed et condimentum nibh, et tempor lacus. Pellentesque consectetur luctus ornare. Vestibulum sed maximus urna. Etiam faucibus purus et ipsum venenatis, vel consectetur lacus placerat. Praesent consectetur erat ligula, ac fringilla ante elementum nec.</h3>
                    </div>
                    <div className='alpha-financing-step_one_inputs_top_view'>
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Email'}
                            placeholder={'Enter your email'} />
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Ownership'}
                            placeholder={'Enter your ownershipe persentage'} />
                    </div>
                    <div onClick={() => setCheckBoxOne(!checkBoxOne)} style={{ paddingBottom: 20 }} className='alpha-financing-finance_step_three_same_as_view'>
                        <img src={checkBoxOne ? check : unCheck} />
                        <h2>Sed et condimentum nibh, et tempor lacus. Pellentesque consectetur luctus ornare. Vestibulum sed maximus urna.</h2>
                    </div>
                    <div onClick={() => setCheckBoxTwo(!checkBoxTwo)} style={{ paddingBottom: 20 }} className='alpha-financing-finance_step_three_same_as_view'>
                        <img src={checkBoxTwo ? check : unCheck} />
                        <h2>Sed et condimentum nibh, et tempor lacus. Pellentesque consectetur luctus ornare. Vestibulum sed maximus urna.</h2>
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
                <div className='alpha-financing-finance_step_two_next_button' onClick={() => props.onClickNext()}>
                    <h2>NEXT</h2>
                </div>
            </div>
        </div>
    )
}

