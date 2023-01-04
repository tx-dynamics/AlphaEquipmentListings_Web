import React from 'react'
import './textInput.css'

const TextInput = (props) => {
    return (
        <div className='alpha-input_container' style={props.style} >
            <p>{props.title}</p>
            <div className='alpha-input_container_input'>
                <input style={props.inputStyle} onKeyPress={props.onKeyPress} onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default TextInput
