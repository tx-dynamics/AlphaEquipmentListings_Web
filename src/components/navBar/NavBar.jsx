import React from 'react'
import { logo, filterIcon } from '../../assets/icons'
import './navBar.css'

export default function NavBar() {
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
                    <h3>Category</h3>
                    <h3>Auction</h3>
                    <h3>Spare Parts</h3>
                    <h3>Financing</h3>
                    <h3>Rented</h3>
                    <h3>Calculator</h3>
                </div>
            </div>
        </div>
    )
}

