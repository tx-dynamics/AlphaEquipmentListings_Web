import React from 'react'
import { crossCircleWhite, danger } from '../../assets/icons'
import TextInputThree from '../textInputThree/TextInputThree'
import TextInputTwo from '../textInputTwo/TextInputTwo'
import './deleteAccountModel.css'

export default function DeleteAccountModel(props) {

    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-payment_model_top_view'>
                <div className='alpha-payment_model_header_view'>
                    <div></div>
                    <h2>Delete Account</h2>
                    <img onClick={props.onClickClose} src={crossCircleWhite} />
                </div>
                <div className='alpha-delete_model-title_view'>
                    <img src={danger} />
                    <h2>Delete your account will:</h2>
                </div>
                <div className='alpha-delete_model-list_item_top_view'>
                    <ul>
                        <li>Lorem ipsum dolor amet, conse ctetur adipi scing elit. Vivamus at bibendum ante.</li>
                        <li>Lorem ipsum dolor amet, conse ctetur adipi scing elit. Vivamus at bibendum ante.</li>
                        <li>Lorem ipsum dolor amet, conse ctetur adipi scing elit. Vivamus at bibendum ante.</li>
                        <li>Lorem ipsum dolor amet, conse ctetur adipi scing elit. Vivamus at bibendum ante.</li>

                    </ul>
                </div>
                <div className='alpha-delete_model-divider' />
                <div className='alpha-delete_model-input_title'>
                    <h2>
                        To Delete your Account Confirm you Password
                    </h2>
                </div>

                <div className='alpha-card_modal_inputs_view'>
                    <TextInputTwo title={'Password'} placeholder={'Enter your password'}></TextInputTwo>
                </div>
                <div className='alpha-card_modal_inputs_view_two'>
                    <TextInputThree title={'Password'} placeholder={'Enter your password'}></TextInputThree>
                </div>
                <div onClick={props.onClick} style={{ backgroundColor: '#DD0004' }} className='alpha-payment_model_button_view'>
                    <h5>Delete my Account</h5>
                </div>
            </div>
        </div >
    )
}

