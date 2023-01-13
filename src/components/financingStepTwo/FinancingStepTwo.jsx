import React, { useState } from 'react'
import { TextInputTwo } from '../'
import './financingStepTwo.css'
import { financingLogo } from '../../assets/icons'

export default function FinancingStepTwo(props) {
    const [selectedBusinessStructureValue, setSelectedBusinessStructureValue] = useState({ id: 0 })
    const [selectedForestryTypeValue, setSelectedForestryTypeValue] = useState({ id: 0 })
    const [selectedNumberofOwnersValue, setSelectedNumberofOwnersValue] = useState({ id: 0 })
    const [selectedReleatedCompanyValue, setSelectedReleatedCompanyValue] = useState({ id: 0 })
    const [selectedAnnualGrossRevenueValue, setSelectedAnnualGrossRevenueValue] = useState({ id: 0 })
    const businessStructureArray = [
        {
            id: 1,
            value: 'Cooperative'
        },
        {
            id: 2,
            value: 'Corporation'
        },
        {
            id: 3,
            value: 'Partnership'
        },
        {
            id: 4,
            value: 'S-Corp'
        },
        {
            id: 5,
            value: 'Solo Proprietorship'
        }
    ]
    const forestryTypeArray = [
        {
            id: 1,
            value: 'Logging'
        },
        {
            id: 2,
            value: 'Transportation'
        },
        {
            id: 3,
            value: 'Road building'
        },
        {
            id: 4,
            value: 'Stump to Dump Contracting'
        },
        {
            id: 5,
            value: 'Other'
        },
    ]
    const numberofOwnersArray = [
        {
            id: 1,
            value: '1'
        },
        {
            id: 2,
            value: '2'
        },
        {
            id: 3,
            value: '3'
        },
        {
            id: 4,
            value: 'More'
        },

    ]
    const releatedCompanyArray = [
        {
            id: 1,
            value: 'Yes'
        },
        {
            id: 2,
            value: 'No'
        },
    ]
    const annualGrossRevenueArray = [
        {
            id: 1,
            value: 'Under 250,000'
        },
        {
            id: 2,
            value: '250,000 - 500,000'
        },
        {
            id: 3,
            value: '500,000 - 1,000,000'
        },
        {
            id: 4,
            value: '5,000,000 - 10,000,000'
        },
        {
            id: 5,
            value: 'Over 10,000,000'
        },
    ]

    return (
        <div>
            <div className="alpha-financing-finance_step_one_top_view">
                <div className="alpha-financing-finance_step_one_view">
                    <h1>Tell us about your equipment needs</h1>
                    <div className="alpha-financing-radia_view_top_view">
                        <h2>Business Structure</h2>
                        {businessStructureArray.map((item, index) => {
                            return (
                                <div onClick={() => setSelectedBusinessStructureValue(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                                    <div style={{ backgroundColor: item.id === selectedBusinessStructureValue.id ? '#F18805' : 'transparent' }} />
                                    <h3>
                                        {item.value}
                                    </h3>
                                </div>
                            )
                        })}
                    </div>
                    <div className="alpha-financing-radia_view_top_view">
                        <h2>Forestry Type</h2>
                        {forestryTypeArray.map((item, index) => {
                            return (
                                <div onClick={() => setSelectedForestryTypeValue(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                                    <div style={{ backgroundColor: item.id === selectedForestryTypeValue.id ? '#F18805' : 'transparent' }} />
                                    <h3>
                                        {item.value}
                                    </h3>
                                </div>
                            )
                        })}
                    </div>
                    <div className='alpha-financing-step_one_inputs_top_view'>
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Number of Employees'}
                            placeholder={'Enter number of employees'} />
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Year of Established'}
                            placeholder={'Enter year of established '} />
                    </div>
                    <div className="alpha-financing-radia_view_top_view">
                        <h2>Number of Owners</h2>
                        {numberofOwnersArray.map((item, index) => {
                            return (
                                <div onClick={() => setSelectedNumberofOwnersValue(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                                    <div style={{ backgroundColor: item.id === selectedNumberofOwnersValue.id ? '#F18805' : 'transparent' }} />
                                    <h3>
                                        {item.value}
                                    </h3>
                                </div>
                            )
                        })}
                    </div>
                    <div className="alpha-financing-radia_view_top_view">
                        <h2>Any Related company that can provide a corporate guaranty?</h2>
                        {releatedCompanyArray.map((item, index) => {
                            return (
                                <div onClick={() => setSelectedReleatedCompanyValue(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                                    <div style={{ backgroundColor: item.id === selectedReleatedCompanyValue.id ? '#F18805' : 'transparent' }} />
                                    <h3>
                                        {item.value}
                                    </h3>
                                </div>
                            )
                        })}
                    </div>
                    <div className='alpha-financing-step_one_inputs_top_view'>
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Financial Year end'}
                            placeholder={'Enter year of established '} />
                    </div>
                    <div className="alpha-financing-radia_view_top_view">
                        <h2>Annual Gross revenue</h2>
                        {annualGrossRevenueArray.map((item, index) => {
                            return (
                                <div onClick={() => setSelectedAnnualGrossRevenueValue(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                                    <div style={{ backgroundColor: item.id === selectedAnnualGrossRevenueValue.id ? '#F18805' : 'transparent' }} />
                                    <h3>
                                        {item.value}
                                    </h3>
                                </div>
                            )
                        })}
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

