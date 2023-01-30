import React from 'react'
import { addImage, dummyImage } from '../../assets/icons'
import './financingStepFourAdmin.css'

export default function FinancingStepFourAdmin(props) {
    const imageArray = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ];

    return (
        <div className='alpha-finance_step-admin_top_view'>
            <div className='alpha_finance_steps_admin_image_top_view'>
                <h2>Add Control Stationl Images:</h2>
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
            <div className='alpha_finance_steps_admin_image_top_view'>
                <h5>Engine <span style={{ fontWeight: 300, color: '#898989' }}>{' (optional)'}</span></h5>
                <h2>Add Engine Images:</h2>
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
            <div className='alpha_finance_steps_admin_image_top_view'>
                <h5>Chassis <span style={{ fontWeight: 300, color: '#898989' }}>{' (optional)'}</span></h5>
                <h2>Add Chassis Images:</h2>
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
            <div className='alpha_finance_steps_admin_image_top_view'>
                <h5>Undercarriage <span style={{ fontWeight: 300, color: '#898989' }}>{' (optional)'}</span></h5>
                <h2>Add Undercarriage Images:</h2>
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
                    <h2>ADD</h2>
                </div>
            </div>
        </div>
    )
}

