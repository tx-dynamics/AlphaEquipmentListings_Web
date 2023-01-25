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
            value: 'dashboard',
            route: '/dashboard',
            iconOne: dashboard,
            iconTwo: dashboardTheme,
            dropdown: false
        },
        {
            id: 2,
            title: 'Shop',
            value: 'shop',
            route: '/shop',
            iconOne: shop,
            iconTwo: shopTheme,
            dropdown: false
        },
        {
            id: 3,
            title: 'Wallet',
            value: 'wallet',
            route: '/wallet',
            iconOne: walletDark,
            iconTwo: walletTheme,
            dropdown: false
        },
        {
            id: 4,
            title: 'Request',
            value: 'request',
            route: '/request',
            iconOne: request,
            iconTwo: requestTheme,
            dropdown: true
        },
        {
            id: 5,
            title: 'Payment History',
            value: 'paymenthistory',
            route: '/paymenthistory',
            iconOne: paymentHistory,
            iconTwo: paymentHistoryTheme,
            dropdown: false
        },
        {
            id: 6,
            title: 'Orders Status',
            value: 'orderstatus',
            route: '/orderstatus',
            iconOne: orderStatus,
            iconTwo: orderStatusTheme,
            dropdown: false
        },
        {
            id: 7,
            title: 'Chat',
            route: '/chat',
            value: 'chat',
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
                                <div onClick={() => onClick(item.route, item.value)} className="alpha-side_bar-items_container" key={item.id} >
                                    <img src={item.value === data ? item.iconTwo :
                                        item.value === data ? item.iconTwo :
                                            item.value === data ? item.iconTwo :
                                                item.value === data ? item.iconTwo :
                                                    item.value === data ? item.iconTwo :
                                                        item.value === data ? item.iconTwo :
                                                            item.value === data ? item.iconTwo :
                                                                item.iconOne} />
                                    <div className="alpha-side_bar-items_title_view">
                                        <h2 style={{
                                            color: item.value === data ? '#F18805' :
                                                item.value === data ? '#F18805' :
                                                    item.value === data ? '#F18805' :
                                                        item.value === data ? '#F18805' :
                                                            item.value === data ? '#F18805' :
                                                                item.value === data ? '#F18805' :
                                                                    item.value === data ? '#F18805' :
                                                                        '#767582'
                                        }}>{item.title}</h2>
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

