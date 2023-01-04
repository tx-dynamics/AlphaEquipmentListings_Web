import React from 'react'
import './button.css'

export default function Button(props) {
    return (
        <div onClick={props.onClick} className='button_container'>
            <p>{props.children}</p>
        </div>
    )
}

