import React from 'react'
import { TextInputAdminFinance } from '..'
import { addImage, dummyImage } from '../../assets/icons'
import './financingStepThreeAdmin.css'

export default function FinancingStepThreeAdmin(props) {
    const imageArray = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ];


    return (
        console.log(props.type),
        <div className='alpha-finance_step-admin_top_view'>
            {props.type !== 2 &&
                <>
                    <div className='alpha-financing-step_one_admin_inputs_top_view'>
                        <div className='alpha_margin_right'>
                            <TextInputAdminFinance
                                title={'Serial Number'}
                                placeholder={'Enter serial number'} />
                        </div>
                    </div>
                    <div className='alpha_finance_steps_admin_image_top_view'>
                        <h2>Add images of Serial Number</h2>
                        <div className='alpha_finance_steps_admin_image_view'>
                            <img
                                src={addImage} className={'alpha_finance_steps_admin_add_image'} alt={''} />
                        </div>
                    </div>
                    <div className='alpha-financing-step_one_admin_inputs_top_view'>
                        <div className='alpha_margin_right'>
                            <TextInputAdminFinance
                                title={'Odometer'}
                                placeholder={'Add odometer reading'} />
                        </div>
                    </div>
                </>
            }
            <div className='alpha_finance_steps_admin_image_top_view'>
                <h2>Add Additional Images of Equipment</h2>
                <div className='alpha_finance_steps_admin_image_view'>
                    <img
                        src={addImage} className={'alpha_finance_steps_admin_add_image_two'} alt={''} />
                    {imageArray.map((image) => {
                        return (
                            <img src={dummyImage} className={'alpha_finance_steps_admin_image_two'} alt={''} />
                        )
                    })}
                </div>
            </div>
            <div className='alpha-financing-finance_step_two_admin_buttons_top_view'>
                <div className='alpha-financing-finance_step_two_admin_back_button' onClick={() => props.onClickBack()}>
                    <h2>BACK</h2>
                </div>
                <div className='alpha-financing-finance_step_two_admin_next_button' onClick={() => props.onClickNext()}>
                    <h2>NEXT</h2>
                </div>
            </div>
        </div>
    )
}

