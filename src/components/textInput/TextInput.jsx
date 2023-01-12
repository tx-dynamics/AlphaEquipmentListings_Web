import React from 'react'
import { arrowDown, arrowDownBlack } from '../../assets/icons'
import './textInput.css'

const TextInput = (props) => {
    return (
        <div className='alpha-input_container' style={props.style} >
            <p>{props.title}</p>
            <div className='alpha-input_container_input' style={props.inputStyle}>
                <input disabled={props.disabled} style={props.inputStyle} onKeyPress={props.onKeyPress} onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder} />
                {props.type === 'dropdown' &&
                    <img alt='' onClick={props.onClickDropDown} src={arrowDownBlack} />
                }

            </div>
            {props.dropDownValue &&
                <div className='alpha-dropdown_container'>
                    {props.dropDownArray?.map((item) => {
                        return (
                            <h3 onClick={() => props.selectedValue(item)} key={item.id}>{item.title}</h3>
                        )
                    })}
                </div>
            }

        </div>
    )
}

export default TextInput
