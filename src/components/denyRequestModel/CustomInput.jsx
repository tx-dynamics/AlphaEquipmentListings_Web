import React from 'react'
import './customInput.css'

const CustomeInput = (props) => {
    return (
        <div className='alpha-input_custom_container_two'>
            <p>{props.title}</p>
            <div className='alpha-input_custom_container_input_two'>
                <textarea placeholder={props.placeholder} />

            </div>


        </div>
    )
}

export default CustomeInput
