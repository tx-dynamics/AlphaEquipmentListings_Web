import React from 'react'
import { arrowDown, arrowDownBlack } from '../../assets/icons'
import './textInputThree.css'

const TextInputThree = (props) => {
    return (
        <div className='alpha-input_container_three' style={props.style} >
            <p>{props.title}</p>
            <div className='alpha-input_container_three_input' style={props.inputStyle}>
                <input disabled={props.disabled} style={props.inputStyle} onKeyPress={props.onKeyPress} onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder} />
            </div>


        </div>
    )
}

export default TextInputThree
