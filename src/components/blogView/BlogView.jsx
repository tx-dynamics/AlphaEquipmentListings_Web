import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { mail, phone } from '../../assets/icons'
import './blogView.css'
import { activeTab } from '../../redux/Slices/activeTabSlice';
import { useSnackbar } from 'react-simple-snackbar';
import { snakbarOptions } from '../../globalData';
import { store } from '../../redux/store';

export default function BlogView(props) {

    const disPatch = useDispatch();
    const navigate = useNavigate();
    const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
    const user = store.getState().userData.userData

    const onClick = (type, value) => {
        disPatch(activeTab(value))
        navigate(type)
    }

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
                <p onClick={() => user ? navigate('/subscriptionpage') : showMessage('You are not login')}>Subscription</p>
                <p onClick={() => onClick('/blogpage', 'blogpage')}>Blog</p>
                <p>Contact us</p>
            </div>
        </div>
    )
}

