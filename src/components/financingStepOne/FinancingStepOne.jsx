import React, { useState } from 'react'
import { financingLogo } from '../../assets/icons'
import { TextInputTwo } from '../'
import './financingStepOne.css'

export default function FinancingStepOne(props) {
    const [selectedPlanToPurchaseValue, setSelectedPlanToPurchaseValue] = useState({ id: 0 })
    const [selectedPlanToPurchaseTwoValue, setSelectedPlanToPurchaseTwoValue] = useState({ id: 0 })
    const [selectedWithInDayReturnValue, setSelectedWithInDayReturnValue] = useState({ id: 0 })
    const [selectedAgeOfEquipmentValue, setSelectedAgeOfEquipmentValue] = useState({ id: 0 })
    const planToPurchaseArray = [
        {
            id: 1,
            value: 'Lorem ipsum dolor sit amet'
        },
        {
            id: 2,
            value: 'Donec pretium orci'
        },
        {
            id: 3,
            value: 'Ut convallis sit amet nisl'
        },
        {
            id: 4,
            value: 'Sed et condimentum'
        }
    ]
    const planToPurchaseTwoArray = [
        {
            id: 1,
            value: 'Lorem ipsum dolor sit amet'
        },
        {
            id: 2,
            value: 'Donec pretium orci'
        },
        {
            id: 3,
            value: 'Ut convallis sit amet nisl'
        },
        {
            id: 4,
            value: 'Sed et condimentum'
        }
    ]
    const withInDayReturnArray = [
        {
            id: 1,
            value: 'Yes'
        },
        {
            id: 2,
            value: 'No'
        },

    ]
    const ageOfEquipmentArray = [
        {
            id: 1,
            value: 'New'
        },
        {
            id: 2,
            value: '1-3 years'
        },
        {
            id: 3,
            value: '4-6 years'
        },
        {
            id: 4,
            value: '7-10 years'
        },
        {
            id: 5,
            value: '11-14 years'
        },
        {
            id: 6,
            value: '16+ years'
        }
    ]
    const [equipmentCategoryDropdown, setEquipmentCategoryDropdown] = useState(false)
    const [equipmentCategoryValue, setEquipmentCategoryValue] = useState('')
    const equipmentCategoryArray = [
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
    const [typeOfEquipmentDropdown, setTypeOfEquipmentDropdown] = useState(false)
    const [typeOfEquipmentValue, setTypeOfEquipmentValue] = useState('')
    const typeOfEquipmentArray = [
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
    const [auctionDropdown, setAuctionDropdown] = useState(false)
    const [auctionValue, setAuctionValue] = useState('')
    const auctionArray = [
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
                    <div className="alpha-financing-radia_view_top_view">
                        <h2>How do you plan to purchase?</h2>
                        {planToPurchaseArray.map((item, index) => {
                            return (
                                <div onClick={() => setSelectedPlanToPurchaseValue(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                                    <div style={{ backgroundColor: item.id === selectedPlanToPurchaseValue.id ? '#F18805' : 'transparent' }} />
                                    <h3>
                                        {item.value}
                                    </h3>
                                </div>
                            )
                        })}
                    </div>
                    <div className="alpha-financing-radia_view_top_view">
                        <h2>How do you plan to purchase?</h2>
                        {planToPurchaseTwoArray.map((item, index) => {
                            return (
                                <div onClick={() => setSelectedPlanToPurchaseTwoValue(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                                    <div style={{ backgroundColor: item.id === selectedPlanToPurchaseTwoValue.id ? '#F18805' : 'transparent' }} />
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
                            dropDownStyle={{ width: 340, left: 0 }}
                            disabled
                            selectedValue={(item) => [setEquipmentCategoryValue(item.title), setEquipmentCategoryDropdown(false)]}
                            value={equipmentCategoryValue}
                            onClickDropDown={() => setEquipmentCategoryDropdown(!equipmentCategoryDropdown)}
                            dropDownArray={equipmentCategoryArray}
                            dropDownValue={equipmentCategoryDropdown}
                            type={'dropdown'}
                            title={'Equipment Categorie'}
                            placeholder={'Select categorie'} />
                        <TextInputTwo
                            dropDownStyle={{ width: 340, left: 0 }}
                            disabled
                            selectedValue={(item) => [setTypeOfEquipmentValue(item.title), setTypeOfEquipmentDropdown(false)]}
                            value={typeOfEquipmentValue}
                            onClickDropDown={() => setTypeOfEquipmentDropdown(!typeOfEquipmentDropdown)}
                            dropDownArray={typeOfEquipmentArray}
                            dropDownValue={typeOfEquipmentDropdown}
                            type={'dropdown'}
                            title={'Type of equipment'}
                            placeholder={'Select equipment type'} />
                        <TextInputTwo
                            dropDownStyle={{ width: 340, left: 0 }}
                            disabled
                            selectedValue={(item) => [setAuctionValue(item.title), setAuctionDropdown(false)]}
                            value={auctionValue}
                            onClickDropDown={() => setAuctionDropdown(!auctionDropdown)}
                            dropDownArray={auctionArray}
                            dropDownValue={auctionDropdown}
                            type={'dropdown'}
                            title={'What auction do you plan to purchase at?'}
                            placeholder={'Select auction'} />
                    </div>
                    <div className="alpha-financing-radia_view_top_view">
                        <h2>Do you need equipment within 15 days?</h2>
                        {withInDayReturnArray.map((item, index) => {
                            return (
                                <div onClick={() => setSelectedWithInDayReturnValue(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                                    <div style={{ backgroundColor: item.id === selectedWithInDayReturnValue.id ? '#F18805' : 'transparent' }} />
                                    <h3>
                                        {item.value}
                                    </h3>
                                </div>
                            )
                        })}
                    </div>
                    <div className="alpha-financing-radia_view_top_view">
                        <h2>Approximate Age of Equipment</h2>
                        {ageOfEquipmentArray.map((item, index) => {
                            return (
                                <div onClick={() => setSelectedAgeOfEquipmentValue(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                                    <div style={{ backgroundColor: item.id === selectedAgeOfEquipmentValue.id ? '#F18805' : 'transparent' }} />
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
            <div className='alpha-financing-finance_step_one_button'>
                <div onClick={() => props.onClickNext()}>
                    <h2>NEXT</h2>
                </div>
            </div>
        </div>
    )
}

