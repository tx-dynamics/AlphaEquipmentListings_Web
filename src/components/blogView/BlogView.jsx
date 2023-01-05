import React from 'react'
import { mail, phone } from '../../assets/icons'
import './blogView.css'

export default function BlogView() {
    return (
        <div className="alpha-blog_view">
            <div className="alpha_phone_email_view">
                <div>
                    <img src={phone} alt='phone' />
                    <p>+1 940 257 2957</p>
                </div>
                <div>
                    <img src={mail} alt='mail' />
                    <p>alphaequipmentlistings@listings.com</p>
                </div>
            </div>
            <div className="alpha_contact_us_view">
                <p>Subscription</p>
                <p>Blog</p>
                <p>Contact us</p>
            </div>
        </div>
    )
}

