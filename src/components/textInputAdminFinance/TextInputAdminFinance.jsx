import React from 'react'
import { arrowDownBlack } from '../../assets/icons'
import './textInputAdminFinance.css'

const TextInputAdminFinance = (props) => {
    return (
        <div className='alpha-input_admin_container' >
            <p>{props.title}</p>
            <div className='alpha-input_admin_container_input' style={props.inputStyle}>
                {props.textArea ?
                    <textarea placeholder={props.placeholder} />
                    :
                    <>
                        <input disabled={props.disabled} style={props.inputStyle} onKeyPress={props.onKeyPress} onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder} />
                        {props.type === 'dropdown' &&
                            <img alt='' onClick={props.onClickDropDown} src={arrowDownBlack} />
                        }
                    </>
                }
            </div>
            {props.dropDownValue &&
                <div className='alpha-dropdown_admin_container' style={props.dropDownStyle}>
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

export default TextInputAdminFinance
