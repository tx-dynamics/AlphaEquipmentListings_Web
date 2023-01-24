import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logo, filterIcon, drawerIcon, search, notification, messageIcon, dummyFour } from '../../assets/icons'
import './navBar.css'
import { useDispatch, useSelector } from "react-redux";
import { activeTab } from '../../redux/activeTabSlice';

export default function NavBar() {
    const disPatch = useDispatch();
    const data = useSelector((data) => data.activeTab.value,);
    const navigate = useNavigate();
    const [marginLeft, setMarginLeft] = useState(-300)
    const onClick = (type, value) => {
        disPatch(activeTab(value))
        navigate(type, { state: { screen: value } })
    }

    return (
        <div className="alpha-navbar-main_container">
            <div className="alpha-navbar-logo_view">
                <img onClick={() => onClick('/homepage', '')} src={logo} alt={'logo'} />
            </div>
            <div className="alpha-navbar-detail_view">
                <div className="alpha-navbar-search_top_view">
                    <div className="alpha-navbar-search_filter_view">
                        <div className="alpha-navbar_search_view">
                            <input placeholder='Search over 85,523 items in inventory' />
                            <div>
                                <h3>Search</h3>
                            </div>
                        </div>
                        <div className="aplha-navbar-filter_view">
                            <img src={filterIcon} alt={'filterIcon'} />
                        </div>
                    </div>
                    {/* <div className="alpha-navbar-login_buttons_view">
                        <h3>Register</h3>
                        <div>
                            <h4>Log In</h4>
                        </div>
                    </div> */}
                    <div className="alpha-navbar-profile_top_view">
                        <div className='alpha-navbar-notification_view'>
                            <img src={notification} />
                        </div>
                        <div onClick={() => onClick('/chatpagebuyer', 'chatpagebuyer')} className='alpha-navbar-notification_view'>
                            <img src={messageIcon} />
                        </div>
                        <div onClick={() => onClick('/profile', 'profile')} className='alpha-navbar-profile_view'>
                            <img src={dummyFour} />
                        </div>
                    </div>

                </div>
                <div className="alpha-navbar-nav_items_top_view">
                    <h3 style={{ color: data === 'category' ? '#F18805' : ' #303030' }} onClick={() => onClick('/productlistingpage', 'category')}>Category</h3>
                    <h3 style={{ color: data === 'auction' ? '#F18805' : ' #303030' }} onClick={() => onClick('/productlistingpage', 'auction')}>Auction</h3>
                    <h3 style={{ color: data === 'spareparts' ? '#F18805' : ' #303030' }} onClick={() => onClick('/maincategorypage', 'spareparts')}>Spare Parts</h3>
                    <h3 style={{ color: data === 'financing' ? '#F18805' : ' #303030' }} onClick={() => onClick('/financing', 'financing')}>Financing</h3>
                    <h3 style={{ color: data === 'rented' ? '#F18805' : ' #303030' }} onClick={() => onClick('/maincategorypage', 'rented')}>Rented</h3>
                    <h3 style={{ color: data === 'calculator' ? '#F18805' : ' #303030' }} onClick={() => onClick('/calculator', 'calculator')}>Calculator</h3>
                </div>
            </div>

            <div className='alpha-navbar-drawer_top_view '>
                <div onClick={() => setMarginLeft(0)} className="alpha-navbar-drawer_drawer_icon_view">
                    <img src={drawerIcon} alt={'drawer'} />
                </div>
                <div className="alpha-navbar-drawer_logo">
                    <img src={logo} alt={'logo'} />
                </div>
                {/* <div className="alpha-navbar-login_buttons_view">
                    <h3>Register</h3>
                    <div>
                        <h4>Log In</h4>
                    </div>
                </div> */}
                <div className="alpha-navbar-profile_top_view">
                    <div className='alpha-navbar-notification_view'>
                        <img src={notification} />
                    </div>
                    <div onClick={() => onClick('/chatpagebuyer', 'chatpagebuyer')} className='alpha-navbar-notification_view'>
                        <img src={messageIcon} />
                    </div>
                    <div onClick={() => onClick('/profile', 'profile')} className='alpha-navbar-profile_view'>
                        <img src={dummyFour} />
                    </div>
                </div>

                <div className='alpha_navbar-menu_container' style={{ left: marginLeft, }}>
                    <div className="alpha-navbar-profile_drawer_view">
                        <div className='alpha-navbar-notification_view'>
                            <img src={notification} />
                        </div>
                        <div className='alpha-navbar-notification_view'>
                            <img src={messageIcon} />
                        </div>
                        <div onClick={() => onClick('/profile', 'profile')} className='alpha-navbar-profile_view'>
                            <img src={dummyFour} />
                        </div>
                    </div>
                    <div className='alpha-navbar-menu_search_view'>
                        <input placeholder='Search your query' />
                        <img src={search} />
                    </div>
                    <h3 style={{ color: data === 'category' ? '#F18805' : ' #303030' }} onClick={() => onClick('/productlistingpage', 'category')}>Category</h3>
                    <h3 style={{ color: data === 'auction' ? '#F18805' : ' #303030' }} onClick={() => onClick('/productlistingpage', 'auction')}>Auction</h3>
                    <h3 style={{ color: data === 'spareparts' ? '#F18805' : ' #303030' }} onClick={() => onClick('/maincategorypage', 'spareparts')}>Spare Parts</h3>
                    <h3 style={{ color: data === 'financing' ? '#F18805' : ' #303030' }} onClick={() => onClick('/financing', 'financing')}>Financing</h3>
                    <h3 style={{ color: data === 'rented' ? '#F18805' : ' #303030' }} onClick={() => onClick('/maincategorypage', 'rented')}>Rented</h3>
                    <h3 style={{ color: data === 'calculator' ? '#F18805' : ' #303030' }} onClick={() => onClick('/calculator', 'calculator')}>Calculator</h3>
                    <h3 onClick={() => setMarginLeft(-300)} style={{ color: 'red' }}>Close</h3>
                    {/* <div className="alpha-navbar-menu_login_view">
                        <div>
                            <h4>Register</h4>
                        </div>
                        <div>
                            <h4>Login</h4>
                        </div>
                    </div> */}

                </div>

            </div>

        </div>
    )
}

