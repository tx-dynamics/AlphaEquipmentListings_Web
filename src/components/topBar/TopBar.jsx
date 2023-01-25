import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { drawerIcon, dummyFour, notificationTheme, arrowDownGrey, crossCircle, dashboard, dashboardTheme, logo, logout, messageIcon, messagerTheme, orderStatus, orderStatusTheme, paymentHistory, paymentHistoryTheme, profile, request, requestTheme, shop, shopTheme, walletDark, walletTheme } from "../../assets/icons";
import './topBar.css'

export default function TopBar() {
    const navigate = useNavigate();
    const [barValue, setBarValue] = useState(-500)
    const [showDropdowm, setShowDropdown] = useState(false)
    const sideBarItemsArray = [
        {
            id: 1,
            title: 'Dashboard',
            iconOne: dashboard,
            iconTwo: dashboardTheme,
            dropdown: false
        },
        {
            id: 2,
            title: 'Shop',
            iconOne: shop,
            iconTwo: shopTheme,
            dropdown: false
        },
        {
            id: 3,
            title: 'Wallet',
            iconOne: walletDark,
            iconTwo: walletTheme,
            dropdown: false
        },
        {
            id: 4,
            title: 'Request',
            iconOne: request,
            iconTwo: requestTheme,
            dropdown: true
        },
        {
            id: 5,
            title: 'Payment History',
            iconOne: paymentHistory,
            iconTwo: paymentHistoryTheme,
            dropdown: false
        },
        {
            id: 6,
            title: 'Orders Status',
            iconOne: orderStatus,
            iconTwo: orderStatusTheme,
            dropdown: false
        },
        {
            id: 7,
            title: 'Chat',
            iconOne: messageIcon,
            iconTwo: messagerTheme,
            dropdown: false
        }
    ]

    return (
        <div>
            <div className='alpha-dashboard-top_bar_side_bar_view' style={{ left: barValue }}>
                <div className="alpha-side_bar_container" >
                    <div className="alpha-side_bar_top_container_two">
                        <div className='alpha-side_bar_cross_view'>
                            <img onClick={() => setBarValue(-500)} src={crossCircle} />
                        </div>
                        <div className="alpha-side_bar-logo_container">
                            <img src={logo} />
                        </div>
                        <div className="alpha-side_bar-items_top_container">
                            {sideBarItemsArray.map((item) => {
                                return (
                                    <div>
                                        <div className="alpha-side_bar-items_container" key={item.id} >
                                            <img src={item.iconOne} />
                                            <div className="alpha-side_bar-items_title_view ">
                                                <h2>{item.title}</h2>
                                                {item.dropdown &&
                                                    <img className={showDropdowm ? "alpha_side_bar_rotate" : null} onClick={() => setShowDropdown(!showDropdowm)} src={arrowDownGrey} />
                                                }
                                            </div>
                                        </div>
                                        {item.dropdown && showDropdowm &&
                                            <div className="alpha-side_bar-dropdown_items_div">
                                                <h5>Rent</h5>
                                                <h5>Buy</h5>
                                                <h5>Auction</h5>
                                            </div>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                        <div className="alpha-side_bar_bottom_items_view">
                            <div className="alpha-side_bar-items_container"  >
                                <img src={profile} />
                                <h2>Profile</h2>
                            </div>
                        </div>
                        <div className="alpha-side_bar-divider"></div>
                        <div className="alpha-side_bar_bottom_items_view">
                            <div className="alpha-side_bar-items_container"  >
                                <img src={logout} />
                                <h2>Logout</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="alpha-dashboard-top_bar_container">
                <div className="alpha-dashboard-top_bar_drawer_view">
                    <img onClick={() => setBarValue(0)} src={drawerIcon} />
                    <div className="alpha-dashboard-top_bar_title_view">
                        <h2>Welcome, Robert</h2>
                        <h3>1 October  2022 | 11:59 AM GMT</h3>
                    </div>
                </div>

                <div className="alpha-dashboard-top_bar_profile_top_view">
                    <div className="alpha-dashboard-top_bar_notification_view">
                        <img src={notificationTheme} />
                    </div>
                    <h4>Robert</h4>
                    <div className="alpha-dashboard-top_bar_profile_view">
                        <img src={dummyFour} />
                    </div>
                </div>
            </div>
        </div>
    )
}

