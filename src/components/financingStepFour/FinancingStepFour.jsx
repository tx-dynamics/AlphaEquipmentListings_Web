import React, { useState } from 'react'
import { TextInputTwo } from '../'
import './financingStepFour.css'
import { financingLogo } from '../../assets/icons'

export default function FinancingStepFour(props) {
    const [sameAsBilling, setSameAsBilling] = useState(false)
    const [countryDropdown, setCountryDropdown] = useState(false)
    const [countryValue, setCountryValue] = useState('')
    const countryArray = [
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
                            dropDownStyle={{ width: 340, left: 0 }}
                            disabled
                            selectedValue={(item) => [setCountryValue(item.title), setCountryDropdown(false)]}
                            value={countryValue}
                            onClickDropDown={() => setCountryDropdown(!countryDropdown)}
                            dropDownArray={countryArray}
                            dropDownValue={countryDropdown}
                            type={'dropdown'}
                            title={'Country'}
                            placeholder={'Select your country'} />
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Business Name'}
                            placeholder={'Enter business  name of guarantor'} />
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
                            title={'Phone number'}
                            placeholder={'123 4545643'} />
                    </div>
                    <div className='alpha-financing-finance_step_four_des_view'>
                        <h3>Sed et condimentum nibh, et tempor lacus. Pellentesque consectetur luctus ornare. Vestibulum sed maximus urna. Etiam faucibus purus et ipsum venenatis, vel consectetur lacus placerat. Praesent consectetur erat ligula, ac fringilla ante elementum nec.</h3>
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

