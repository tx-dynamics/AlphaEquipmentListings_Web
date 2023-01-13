import React from 'react'
import { dotedTick, mail, phone } from '../../assets/icons'
import './submitModel.css'

export default function SubmitModel(props) {
    return (
        <div onClick={() => props.onClick()} className="alpha-financing-model_top_view">
            <div>
                <img src={dotedTick} />
                <h1>Application SUBMITTED</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis fringilla eros, sit amet auctor justo accumsan et.</h2>
            </div>
        </div>
    )
}

