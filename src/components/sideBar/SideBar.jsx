import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { arrowDownGrey, dashboard, dashboardTheme, logo, logout, messageIcon, messagerTheme, orderStatus, orderStatusTheme, paymentHistory, paymentHistoryTheme, profile, profileTheme, request, requestTheme, shop, shopTheme, walletDark, walletTheme } from "../../assets/icons";
import './sideBar.css'
import { useDispatch, useSelector } from "react-redux";
import { activeTab } from '../../redux/Slices/activeTabSlice'
import { userData } from '../../redux/Slices/userDataSlice';

export default function SideBar(props) {
    const disPatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(true)
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
            value2: '',
            value3: '',
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
            value2: '',
            value3: '',
            iconOne: shop,
            iconTwo: shopTheme,
            dropdown: false
        },
        {
            id: 3,
            title: 'Wallet',
            value: 'walletadmin',
            route: '/walletadmin',
            value2: '',
            value3: '',
            iconOne: walletDark,
            iconTwo: walletTheme,
            dropdown: false
        },
        {
            id: 4,
            title: 'Request',
            value: 'requestrent',
            value2: 'requestbuy',
            value3: 'requestauction',
            route: '/rentrequest',
            iconOne: request,
            iconTwo: requestTheme,
            dropdown: true
        },
        {
            id: 5,
            title: 'Payment History',
            value: 'paymenthistory',
            route: '/paymenthistory',
            value2: '',
            value3: '',
            iconOne: paymentHistory,
            iconTwo: paymentHistoryTheme,
            dropdown: false
        },
        {
            id: 6,
            title: 'Orders Status',
            value: 'orderstatus',
            route: '/orderstatus',
            value2: '',
            value3: '',
            iconOne: orderStatus,
            iconTwo: orderStatusTheme,
            dropdown: false
        },
        {
            id: 7,
            title: 'Chat',
            route: '/chatadmin',
            value: 'chatadmin',
            value2: '',
            value3: '',
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
                                    <img onClick={() => onClick(item.route, item.value)} src={item.value === data ? item.iconTwo :
                                        item.value === data ? item.iconTwo : item.value2 === data ? item.iconTwo : item.value3 === data ? item.iconTwo : item.iconOne} />
                                    <div className="alpha-side_bar-items_title_view">
                                        <h2 onClick={() => onClick(item.route, item.value)} style={{
                                            color: item.value === data ? '#F18805' : item.value2 === data ? '#F18805' : item.value3 === data ? '#F18805' : '#767582'
                                        }}>{item.title}</h2>
                                        {item.dropdown &&
                                            <img className={showDropdown ? "alpha_side_bar_rotate" : null} onClick={() => setShowDropdown(!showDropdown)} src={arrowDownGrey} />
                                        }
                                    </div>
                                </div>
                                {item.dropdown && showDropdown &&
                                    <div className="alpha-side_bar-dropdown_items_div">
                                        <h5 onClick={() => onClick('/rentrequest', 'requestrent')} style={{ color: data === 'requestrent' ? '#F18805' : '#767582' }}>Rent</h5>
                                        <h5 onClick={() => onClick('/buyrequest', 'requestbuy')} style={{ color: data === 'requestbuy' ? '#F18805' : '#767582' }}>Buy</h5>
                                        <h5 onClick={() => onClick('/auctionrequest', 'requestauction')} style={{ color: data === 'requestauction' ? '#F18805' : '#767582' }}>Auction</h5>
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>
                <div className="alpha-side_bar_bottom_items_view">
                    <div onClick={() => onClick('/profileadmin', 'profileadmin')} className="alpha-side_bar-items_container"  >
                        <img src={data === 'profileadmin' ? profileTheme : profile} />
                        <h2 style={{ color: data === 'profileadmin' ? '#F18805' : '#767582' }}>Profile</h2>
                    </div>
                </div>
                <div className="alpha-side_bar-divider"></div>
                <div className="alpha-side_bar_bottom_items_view">
                    <div onClick={() => disPatch(userData(null))} className="alpha-side_bar-items_container"  >
                        <img src={logout} />
                        <h2>Logout</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

