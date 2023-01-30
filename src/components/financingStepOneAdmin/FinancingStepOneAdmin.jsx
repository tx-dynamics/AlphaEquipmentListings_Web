import React, { useState } from 'react'
import { TextInputAdminFinance } from '..'
import './financingStepOneAdmin.css'

export default function FinancingStepOneAdmin(props) {
    const [selectedProductType, setSelectedProductType] = useState({ id: 0 })
    const [selectedEquipmentType, setSelectedEquipmentType] = useState({ id: 0 })
    const [selectedSelect, setSelectedSelect] = useState({ id: 0 })

    const productTypeArray = [
        {
            id: 1,
            value: 'Machine'
        },
        {
            id: 2,
            value: 'Spare Part'
        },
    ]
    const equipmentTypeArray = [
        {
            id: 1,
            value: 'New'
        },
        {
            id: 2,
            value: 'Old'
        },
    ]
    const selectTypeArray = [
        {
            id: 1,
            value: 'Fix price'
        },
        {
            id: 2,
            value: 'Auction'
        },

    ]

    const [auctionTypeDropdown, setAuctionTypeDropdown] = useState(false)
    const [auctionTypeValue, setAuctionTypeValue] = useState('')
    const auctioTypeArray = [
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
        <div className='alpha-finance_step-admin_top_view'>
            <div className="alpha-financing-radia_view_top_view">
                <h2>Select Product type</h2>
                {productTypeArray.map((item, index) => {
                    return (
                        <div onClick={() => setSelectedProductType(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                            <div style={{ backgroundColor: item.id === selectedProductType.id ? '#F18805' : 'transparent' }} />
                            <h3>
                                {item.value}
                            </h3>
                        </div>
                    )
                })}
            </div>
            <div className="alpha-financing-radia_view_top_view">
                <h2>Equipment Type</h2>
                {equipmentTypeArray.map((item, index) => {
                    return (
                        <div onClick={() => setSelectedEquipmentType(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                            <div style={{ backgroundColor: item.id === selectedEquipmentType.id ? '#F18805' : 'transparent' }} />
                            <h3>
                                {item.value}
                            </h3>
                        </div>
                    )
                })}
            </div>
            {selectedProductType.id !== 2 &&
                <div className="alpha-financing-radia_view_top_view">
                    <h2>Select</h2>
                    {selectTypeArray.map((item, index) => {
                        return (
                            <div onClick={() => setSelectedSelect(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                                <div style={{ backgroundColor: item.id === selectedSelect.id ? '#F18805' : 'transparent' }} />
                                <h3>
                                    {item.value}
                                </h3>
                            </div>
                        )
                    })}
                </div>
            }
            <div className='alpha-financing-step_one_admin_inputs_top_view'>
                {selectedProductType.id === 2 || selectedSelect.id === 2 ? (
                    <div className='alpha_margin_right'>
                        <TextInputAdminFinance
                            disabled
                            selectedValue={(item) => [setAuctionTypeValue(item.title), setAuctionTypeDropdown(false)]}
                            value={auctionTypeValue}
                            onClickDropDown={() => setAuctionTypeDropdown(!auctionTypeDropdown)}
                            dropDownArray={auctioTypeArray}
                            dropDownValue={auctionTypeDropdown}
                            type={'dropdown'}
                            title={'Auction Type'}
                            placeholder={'Select auction type'} />
                    </div>
                )
                    :
                    <div className='alpha_margin_right'>
                        <TextInputAdminFinance
                            title={'Price'}
                            placeholder={'Enter Price'} />
                    </div>
                }
                <div className='alpha_margin_right'>
                    <TextInputAdminFinance
                        title={'Usage'}
                        placeholder={'Enter usage of equipment'} />
                </div>
                {selectedProductType.id === 2 || selectedSelect.id === 2 ? (
                    <>
                        <div className='alpha_margin_right'>
                            <TextInputAdminFinance
                                type={'date'}
                                title={'Auction Starting Date'}
                                placeholder={'03/12/2022'} />
                        </div>
                        <div className='alpha_margin_right'>
                            <TextInputAdminFinance
                                type={'time'}
                                title={'Auction Starting Time'}
                                placeholder={'03/12/2022'} />
                        </div>
                    </>
                )
                    :
                    null
                }
                <div className='alpha_margin_right'>
                    <TextInputAdminFinance
                        title={'Mileage'}
                        placeholder={'Enter milage of equipment'} />
                </div>
            </div>
            <div className='alpha-financing-finance_step_one_admin_button'>
                <div onClick={() => props.onClickNext(selectedProductType.id)}>
                    <h2>NEXT</h2>
                </div>
            </div>
        </div>
    )
}

