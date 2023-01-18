import React from 'react'
import './customInput.css'

const CustomeInput = (props) => {
    return (
        <div className='alpha-input_custom_container'>
            <p>{props.title}<span style={{ color: '#FF0000' }}> *</span></p>
            <div className='alpha-input_custom_container_input' style={props.inputStyle}>
                {props.textArea ?
                    <textarea />
                    :
                    <input onKeyPress={props.onKeyPress} onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder} />
                }
            </div>


        </div>
    )
}

export default CustomeInput
