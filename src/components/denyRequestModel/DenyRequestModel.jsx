import React from 'react'
import { crossCircle } from '../../assets/icons'
import './denyRequestModel.css'
import CustomeInput from './CustomInput'

export default function DenyRequestModel(props) {
    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-membership_model_top_view'>
                <div className="alpha-membership_cross_view">
                    <img onClick={props.onClickClose} src={crossCircle} alt={''} />
                </div>
                <div className="alpha-membership_title_view">
                    <h2>Deny Request for Rent</h2>
                </div>
                <div className='alpha-deny_req_model_des'>
                    <h3>To Deny Request you have to give reason for that</h3>
                </div>
                <div className='alpha-deny_req_model_input_view'>
                    <CustomeInput placeholder={'Give your reason'} title={'Reason'} />
                </div>

                <div onClick={props.onClick} className='alpha-membership_button_view'>
                    <h5 >deny Request</h5>
                </div>
            </div>
        </div>
    )
}

