import React, { useState } from 'react'
import { crossCircle } from '../../assets/icons'
import './deleteProductModel.css'

export default function DeleteProductModel(props) {
    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-payment_model_top_view'>
                <div className='alpha-delete_product_cross_view'>
                    <img onClick={props.onClickCancel} src={crossCircle} />
                </div>
                <div className='alpha-delete_product_title_view'>
                    <h1>Delete product</h1>
                    <h2>Do you confirm want to delete this Product?</h2>
                </div>
                <div className='alpha-delete_product_buttons_view'>
                    <div style={{ backgroundColor: '#CF2929' }}>
                        <h3 onClick={props.onClickCancel}>Cancel</h3>
                    </div>
                    <div style={{ backgroundColor: '#1CBF02' }}>
                        <h3 onClick={props.onClick}>Confirm</h3>
                    </div>
                </div>
            </div>
        </div >
    )
}

