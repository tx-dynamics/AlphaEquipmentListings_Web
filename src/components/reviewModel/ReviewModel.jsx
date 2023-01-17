import React from 'react'
import { crossCircleWhite, dummyFour } from '../../assets/icons'
import TextInputThree from '../textInputThree/TextInputThree'
import './reviewModel.css'

export default function ReviewModel(props) {
    return (
        <div className="alpha-financing-model_top_view">
            <div className='alpha-payment_model_top_view'>
                <div className='alpha-payment_model_header_view'>
                    <div></div>
                    <h2>Review</h2>
                    <img onClick={props.onClickClose} src={crossCircleWhite} />
                </div>
                <div className='alpha-review_model-summary_top_view'>
                    <h2>Summary</h2>
                    <div className='alpha-review_model_product_info_view'>
                        <img src={dummyFour} />
                        <div>
                            <h5>2018 Prinoth Panther T67 Crawler Carrier</h5>
                            <h6>Lorem ipsum dolor sit amet conse ctetur adipiscing elit</h6>
                        </div>
                    </div>
                </div>
                <div className='alpha-review_model_payment_title_view'>
                    <h2>Payment Through Credit Card</h2>
                    <h3 >Lorem ipsum dolor sit amet conse ctetur adipiscing elit</h3>
                </div>

                <div className='alpha-booking_model_amount_view'>
                    <div className='alpha-booking_model_per_day_view'>
                        <h2>Amount</h2>
                        <h3>$ 20</h3>
                    </div>
                    <div className='alpha-booking_model_per_day_view'>
                        <h2>Other Charges</h2>
                        <h3>$ 0</h3>
                    </div>
                    <div className='alpha-booking_model_divider' />
                    <div className='alpha-booking_model_per_day_view'>
                        <h4>Total</h4>
                        <h5>$ 24</h5>
                    </div>
                </div>
                <div onClick={props.onClick} className='alpha-payment_model_button_view'>
                    <h5>Pay Now</h5>
                </div>
            </div>
        </div >
    )
}

