import React, { useState } from 'react'
import { allWeek, best, crossCircle, trusted } from '../../assets/icons'
import './membershipModel.css'

export default function MembershipModel(props) {
    const [selectedCharges, setSelectedCharges] = useState({ id: 1 })
    const [adminSelectedCharges, setAdminSelectedCharges] = useState({ id: 0 })
    const [adminSelectedChargesTwo, setAdminSelectedChargesTwo] = useState({ id: 0 })

    const serviceArray = [
        {
            id: 1,
            title: 'Best Selling Platform',
            des: 'Cras eleifend purus quis orci aliquet, sit amet intum diam ultrices. Ut consequat et sap porta.',
            icon: best
        },
        {
            id: 2,
            title: 'Trusted Platform',
            des: 'Cras eleifend purus quis orci aliquet, sit amet intum diam ultrices. Ut consequat et sap porta.',
            icon: trusted
        },
        {
            id: 3,
            title: '24/7 Service',
            des: 'Cras eleifend purus quis orci aliquet, sit amet intum diam ultrices. Ut consequat et sap porta.',
            icon: allWeek
        }
    ]
    const chargesArray = [
        {
            id: 1,
            type: 'Monthly',
            price: `$${props?.price1}`,
            des: 'Cras eleifend purus quis orci aliquet, sit amet intum diam ultrices. Ut consequat et sap porta.'
        },
        {
            id: 2,
            type: 'Annual',
            price: `$${props?.price2}`,
            des: 'Cras eleifend purus quis orci aliquet, sit amet intum diam ultrices. Ut consequat et sap porta.'
        },

    ]
    const adminChargesArray = [
        {
            id: 1,
            type: 'Individual Person',
            price: '5 Post/month',
            des: 'Cras eleifend purus quis orci aliquet, sit amet intum diam ultrices. Ut consequat et sap porta.'
        },
        {
            id: 2,
            type: 'Dealership',
            price: '20+ Post/month',
            des: 'Cras eleifend purus quis orci aliquet, sit amet intum diam ultrices. Ut consequat et sap porta.'
        },

    ]
    const adminChargesArrayTwo = [
        {
            id: 1,
            type: 'Monthly',
            price: '$12/month',
            priceTwo: '$40/month',
            des: 'Cras eleifend purus quis orci aliquet, sit amet intum diam ultrices. Ut consequat et sap porta.'
        },
        {
            id: 2,
            type: 'Annual',
            price: '$80/year',
            priceTwo: '$400/year',
            des: 'Cras eleifend purus quis orci aliquet, sit amet intum diam ultrices. Ut consequat et sap porta.'
        },

    ]
    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-membership_model_top_view'>
                <div className="alpha-membership_cross_view">
                    <img onClick={props.onClickClose} src={crossCircle} alt={''} />
                </div>
                <div className="alpha-membership_title_view">
                    <h2>Unlock Your Membership</h2>
                    <h3>Get access to biggest digital platform for heavy equipment or machinery.</h3>
                </div>
                {/* {props.secondPlan ?
                    (adminChargesArrayTwo.map((item) => {
                        return (
                            <div style={{ backgroundColor: item.id === adminSelectedChargesTwo.id ? '#F18805' : '#FEF3E6' }} onClick={() => setAdminSelectedChargesTwo(item)} key={item.id} className='alpha-membership_charges_view'>
                                <h2 style={{ color: item.id === adminSelectedChargesTwo.id ? 'white' : '#F18805' }}>{item.type}</h2>
                                <div>
                                    <h3>{adminSelectedCharges.id === 1 ? item.price : item.priceTwo}</h3>
                                    <h4>{item.des}.</h4>
                                </div>
                            </div>
                        )
                    }))
                    : */}
                {/* (props.chargesView ?
                        (props?.admin ?
                            (adminChargesArray.map((item) => {
                                return (
                                    <div style={{ backgroundColor: item.id === adminSelectedCharges.id ? '#F18805' : '#FEF3E6' }} onClick={() => setAdminSelectedCharges(item)} key={item.id} className='alpha-membership_charges_view'>
                                        <h2 style={{ color: item.id === adminSelectedCharges.id ? 'white' : '#F18805' }}>{item.type}</h2>
                                        <div>
                                            <h3>{item.price}</h3>
                                            <h4>{item.des}.</h4>
                                        </div>
                                    </div>
                                )
                            }))
                            : */}
                {chargesArray.map((item) => {
                    return (
                        <div style={{ backgroundColor: item.id === selectedCharges.id ? '#F18805' : '#FEF3E6' }} onClick={() => setSelectedCharges(item)} key={item.id} className='alpha-membership_charges_view'>
                            <h2 style={{ color: item.id === selectedCharges.id ? 'white' : '#F18805' }}>{item.type}</h2>
                            <div>
                                <h3>{item.price}</h3>
                                <h4>{item.des}.</h4>
                            </div>
                        </div>
                    )
                })}
                {/* ) */}
                {/* : */}
                {/* (serviceArray.map((item) => {
                            return (
                                <div key={item.id} className='alpha-membership_services_view'>
                                    <img src={item.icon} alt={''} />
                                    <div>
                                        <h2>{item.title}</h2>
                                        <h4>{item.des}</h4>
                                    </div>
                                </div>
                            )
                        })) */}
                {/* ) */}
                {/* } */}

                <div onClick={() => props.onClick(selectedCharges.id)} className='alpha-membership_button_view'>
                    <h5 >CONTINUE</h5>
                </div>
            </div>
        </div>
    )
}

