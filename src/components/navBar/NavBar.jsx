import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logo, filterIcon, drawerIcon, search } from '../../assets/icons'
import './navBar.css'

export default function NavBar() {
    const navigate = useNavigate();
    const [marginLeft, setMarginLeft] = useState(-300)

    return (
        <div className="alpha-navbar-main_container">
            <div className="alpha-navbar-logo_view">
                <img src={logo} alt={'logo'} />
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
                    <div className="alpha-navbar-login_buttons_view">
                        <h3>Register</h3>
                        <div>
                            <h4>Log In</h4>
                        </div>
                    </div>

                </div>
                <div className="alpha-navbar-nav_items_top_view">
                    <h3 onClick={() => navigate('/maincategorypage', { state: { screen: 'category' } })}>Category</h3>
                    <h3 onClick={() => navigate('/productlistingpage', { state: { screen: 'auction' } })}>Auction</h3>
                    <h3 onClick={() => navigate('/maincategorypage', { state: { screen: 'spareparts' } })}>Spare Parts</h3>
                    <h3>Financing</h3>
                    <h3 onClick={() => navigate('/maincategorypage', { state: { screen: 'rented' } })}>Rented</h3>
                    <h3>Calculator</h3>
                </div>
            </div>

            <div className='alpha-navbar-drawer_top_view '>
                <div onClick={() => setMarginLeft(0)} className="alpha-navbar-drawer_drawer_icon_view">
                    <img src={drawerIcon} alt={'drawer'} />
                </div>
                <div className="alpha-navbar-drawer_logo">
                    <img src={logo} alt={'logo'} />
                </div>
                <div className="alpha-navbar-login_buttons_view">
                    <h3>Register</h3>
                    <div>
                        <h4>Log In</h4>
                    </div>
                </div>

                <div className='alpha_navbar-menu_container' style={{ left: marginLeft, }}>
                    <div className='alpha-navbar-menu_search_view'>
                        <input placeholder='Search your query' />
                        <img src={search} />
                    </div>
                    <h3 onClick={() => navigate('/maincategorypage', { state: { screen: 'category' } })}>Category</h3>
                    <h3 onClick={() => navigate('/productlistingpage', { state: { screen: 'auction' } })}>Auction</h3>
                    <h3 onClick={() => navigate('/maincategorypage', { state: { screen: 'spareparts' } })}>Spare Parts</h3>
                    <h3>Financing</h3>
                    <h3 onClick={() => navigate('/maincategorypage', { state: { screen: 'rented' } })}>Rented</h3>
                    <h3>Calculator</h3>
                    <h3 onClick={() => setMarginLeft(-300)} style={{ color: 'red' }}>Close</h3>
                    <div className="alpha-navbar-menu_login_view">
                        <div>
                            <h4>Register</h4>
                        </div>
                        <div>
                            <h4>Login</h4>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

