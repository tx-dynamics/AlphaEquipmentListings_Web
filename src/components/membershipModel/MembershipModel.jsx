import React, { useState } from 'react'
import { allWeek, best, crossCircle, trusted } from '../../assets/icons'
import './membershipModel.css'
import { Button } from '../../components'

export default function MembershipModel(props) {
    const [selectedCharges, setSelectedCharges] = useState({ id: 0 })
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
            type: 'MONTHLY',
            price: '$12/month',
            des: 'Cras eleifend purus quis orci aliquet, sit amet intum diam ultrices. Ut consequat et sap porta.'
        },
        {
            id: 2,
            type: 'Free',
            price: '$0/month',
            des: 'Cras eleifend purus quis orci aliquet, sit amet intum diam ultrices. Ut consequat et sap porta.'
        },

    ]
    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-membership_model_top_view'>
                <div className="alpha-membership_cross_view">
                    <img onClick={props.onClickClose} src={crossCircle} />
                </div>
                <div className="alpha-membership_title_view">
                    <h2>Unlock Your Membership</h2>
                    <h3>Cras eleifend purus quis orci aliquet, sit amet intum diam ultrices.</h3>
                </div>
                {props.chargesView ?
                    (chargesArray.map((item) => {
                        return (
                            <div style={{ backgroundColor: item.id === selectedCharges.id ? '#F18805' : '#FEF3E6' }} onClick={() => setSelectedCharges(item)} key={item.id} className='alpha-membership_charges_view'>
                                <h2 style={{ color: item.id === selectedCharges.id ? 'white' : '#F18805' }}>{item.type}</h2>
                                <div>
                                    <h3>{item.price}</h3>
                                    <h4>{item.des}.</h4>
                                </div>
                            </div>
                        )
                    }))
                    :
                    (serviceArray.map((item) => {
                        return (
                            <div key={item.id} className='alpha-membership_services_view'>
                                <img src={item.icon} />
                                <div>
                                    <h2>{item.title}</h2>
                                    <h4>{item.des}</h4>
                                </div>
                            </div>
                        )
                    }))
                }
                <div onClick={props.onClick} className='alpha-membership_button_view'>
                    <h5 >CONTINUE</h5>
                </div>
            </div>
        </div>
    )
}

