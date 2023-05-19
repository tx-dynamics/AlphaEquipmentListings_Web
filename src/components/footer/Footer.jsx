import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { copyRightText, globe, footerFacebook, footerInsta, footerTwitter, arrowDown } from '../../assets/icons'
import './footer.css'
import { activeTab } from '../../redux/Slices/activeTabSlice'
import { store } from '../../redux/store'
import { useSnackbar } from 'react-simple-snackbar'
import { snakbarOptions } from '../../globalData'

export default function Footer() {
    const navigate = useNavigate()
    const disPatch = useDispatch();
    const user = store.getState().userData.userData
    const [showMessage, hideMessage] = useSnackbar(snakbarOptions)

    const onClick = (type, value) => {
        disPatch(activeTab(value))
        navigate(type, { state: { screen: value } })
    }
    return (
        <div className="alpha_footer_main_container">
            <div className="alpha-footer_container">
                <div className="alpha_footer_row_view">
                    <h2>COMPANY</h2>
                    <h3>About Alpha Equipment Listings</h3>
                    <h3 onClick={() => onClick('/blogpage', 'blogpage')}>Blog</h3>
                    <h3 onClick={() => onClick('/profile', 'profile')}>Profile</h3>
                    <h3 onClick={() => user ? onClick('/wallet', 'wallet') : showMessage('Please login first to perform this action')}>Wallet</h3>

                </div>
                <div className="alpha_footer_row_view">
                    <h2>Support</h2>
                    <h3>Contact Us</h3>
                    <h3>Buying</h3>
                    <h3>Selling</h3>
                    <h3 onClick={() => onClick('/faqs', 'faqs')}>Faq's</h3>

                </div>
                <div className="alpha_footer_row_view">
                    <h2>Popular Items </h2>
                    <h3>Construction Machinery</h3>
                    <h3>Truck Auction</h3>
                    <h3>Cranes For Sale</h3>
                    <h3>Tractors For Rent</h3>

                </div>
                <div className="alpha_footer_row_view">
                    <h2>Social MEDIA</h2>
                    <div className="alpha-footer_social_top_view">
                        <img src={footerFacebook} alt={'facebook'} />
                        <img src={footerTwitter} alt={'twitter'} />
                        <img src={footerInsta} alt={'instagram'} />
                    </div>
                    <div className="alpha-footer_dropdown_view">
                        <div className="alpha-footer_dropdown_text_view">
                            <img src={globe} alt={'Globe'} />
                            <p>English - En</p>
                        </div>
                        <img src={arrowDown} alt={'Globe'} className={'alpha_footer_arrow_down'} />

                    </div>

                </div>
            </div>
            <img src={copyRightText} alt={'copyRightText'} className={'alpha-footer_copy_right'} />
        </div>
    )
}

