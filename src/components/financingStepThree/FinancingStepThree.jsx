import React, { useState } from 'react'
import { TextInputTwo } from '../'
import './financingStepThree.css'
import { check, financingLogo, unCheck } from '../../assets/icons'

export default function FinancingStepThree(props) {
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
    const [physicalCountryDropdown, setPhysicalCountryDropdown] = useState(false)
    const [physicalCountryValue, setPhysicalCountryValue] = useState('')
    const physicalCountryArray = [
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
                    </div>
                    <div onClick={() => setSameAsBilling(!sameAsBilling)} className='alpha-financing-finance_step_three_same_as_view'>
                        <img src={sameAsBilling ? check : unCheck} />
                        <h2>Same as Billing Address</h2>
                    </div>
                    <div className='alpha-financing-finance_step_three_physical_text'>
                        <h2>Physical Address</h2>
                    </div>
                    <div className='alpha-financing-step_one_inputs_top_view'>
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            dropDownStyle={{ width: 340, left: 0 }}
                            disabled
                            selectedValue={(item) => [setPhysicalCountryValue(item.title), setPhysicalCountryDropdown(false)]}
                            value={physicalCountryValue}
                            onClickDropDown={() => setPhysicalCountryDropdown(!physicalCountryDropdown)}
                            dropDownArray={physicalCountryArray}
                            dropDownValue={physicalCountryDropdown}
                            type={'dropdown'}
                            title={'Country'}
                            placeholder={'Select your country'} />
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

