import React from 'react'
import { dotedTick, mail, phone } from '../../assets/icons'
import './submitModel.css'

export default function SubmitModel(props) {
    return (
        <div onClick={props.onClick} className="alpha-financing-model_top_view">
            <div className="alpha-financing-model_view">
                <img src={props.icon} />
                <h1>{props.title}</h1>
                <h2>{props.des}</h2>
                {props.button &&
                    <div onClick={props.onClick} className='alpha-financing-model_button_view'>
                        <h3 >Back to Home</h3>
                    </div>
                }
                {props.try &&
                    <h4 onClick={props.onClickTry}>Try Again</h4>
                }
            </div>
        </div>
    )
}

