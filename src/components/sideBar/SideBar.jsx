import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { arrowDownGrey, dashboard, dashboardTheme, logo, logout, messageIcon, messagerTheme, orderStatus, orderStatusTheme, paymentHistory, paymentHistoryTheme, profile, request, requestTheme, shop, shopTheme, walletDark, walletTheme } from "../../assets/icons";
import './sideBar.css'
import { useDispatch, useSelector } from "react-redux";
import { activeTab } from '../../redux/activeTabSlice';

export default function SideBar(props) {
    const disPatch = useDispatch();
    const [showDropdowm, setShowDropdown] = useState(false)
    const data = useSelector((data) => data.activeTab.value,);
    const navigate = useNavigate();
    const onClick = (type, value) => {
        disPatch(activeTab(value))
        navigate(type, { state: { screen: value } })
    }

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
        <div className="alpha-side_bar_container" >
            <div className="alpha-side_bar_top_container">
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
    )
}

