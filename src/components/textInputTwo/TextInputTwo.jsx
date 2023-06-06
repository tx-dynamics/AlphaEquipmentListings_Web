import React from 'react'
import { arrowDownBlack } from '../../assets/icons'
import './textInputTwo.css'
import Loader from '../loader/Loader'

const TextInputTwo = (props) => {
    return (
        <div className='alpha-input_two_container' style={props.style} >
            <p>{props.title}</p>
            <div className='alpha-input_two_container_input' style={props.inputStyle}>
                <input onKeyDown={props?.onKeyDown} maxLength={props?.maxLength} disabled={props.disabled} style={props.inputStyle} onKeyPress={props.onKeyPress} onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder} />
                {props.type === 'dropdown' &&
                    <img alt='' onClick={props.onClickDropDown} src={arrowDownBlack} />
                }
                {props?.dropDownValue &&
                    <div className='alpha-dropdown_two_container' style={props.dropDownStyle}>
                        {props?.dropDownArray?.map((item) => {
                            return (
                                <h3 onClick={() => props.selectedValue(item)} key={item.id}>{props?.api ? item?.productName : item.title}</h3>
                            )
                        })}
                    </div>
                }
                {props?.loader &&
                    <h3>Searching...</h3>
                }

            </div>
            {props?.errorText ?
                <h5>{props?.errorText}</h5>
                :
                null
            }
        </div>
    )
}

export default TextInputTwo
