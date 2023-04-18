import React from 'react'
import './button.css'

export default function Button(props) {
    return (
        <div onClick={props?.disable ? null : props.onClick} className={!props?.disable ? 'button_container' : 'button_container_disable'}>
            <p>{props.children}</p>
        </div>
    )
}

