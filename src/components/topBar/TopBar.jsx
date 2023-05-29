import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { drawerIcon, dummyFour, notificationTheme, arrowDownGrey, crossCircle, dashboard, dashboardTheme, logo, logout, messageIcon, messagerTheme, orderStatus, orderStatusTheme, paymentHistory, paymentHistoryTheme, profile, request, requestTheme, shop, shopTheme, walletDark, walletTheme, profileTheme } from "../../assets/icons";
import { activeTab } from '../../redux/Slices/activeTabSlice'
import './topBar.css'
import { store } from '../../redux/store';
import { api } from '../../network/Environment';
import { Method, callApi } from '../../network/NetworkManger';
import { accessToken, refreshToken, userData } from '../../redux/Slices/userDataSlice';
import { useSnackbar } from 'react-simple-snackbar';
import { snakbarOptions } from '../../globalData';

export default function TopBar() {
    const navigate = useNavigate();
    const disPatch = useDispatch();
    const date = new Date()
    const monthNames = ["January", "Febuary", "March", "April", "May", "June",
        "July", "Auguest", "September", "Octobar", "November", "December"
    ];
    const user = store.getState().userData.userData
    const [barValue, setBarValue] = useState(-500)
    const [showDropdowm, setShowDropdown] = useState(false)
    const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
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
    const data = useSelector((data) => data.activeTab.value,);
    const onClick = (type, value) => {
        disPatch(activeTab(value))
        navigate(type, { state: { screen: value } })
    }

    const logout = async () => {
        try {
            const endPoint = api.logout
            const data = {
                device: {
                    id: localStorage.getItem('deviceId'),
                    deviceToken: 'xyz'
                },
            }
            await callApi(Method.POST, endPoint, data,
                res => {
                    if (res?.status === 200) {
                        navigate('/', { replace: true })
                        disPatch(userData(null));
                        disPatch(accessToken(''));
                        disPatch(refreshToken(''));
                    }
                    else {
                        showMessage(res?.message)

                    }
                },
                err => {
                    showMessage(err.message)
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div >
            <div className='alpha-dashboard-top_bar_side_bar_view' style={{ left: barValue, }}>
                <div className="alpha-side_bar_container" >
                    <div className="alpha-side_bar_top_container_two" style={{ position: 'relative', zIndex: 999 }}>
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
                                            <img onClick={() => onClick(item.route, item.value)} src={item.value === data ? item.iconTwo :
                                                item.value === data ? item.iconTwo : item.value2 === data ? item.iconTwo : item.value3 === data ? item.iconTwo : item.iconOne} />                                            <div className="alpha-side_bar-items_title_view ">
                                                <h2 onClick={() => onClick(item.route, item.value)} style={{
                                                    color: item.value === data ? '#F18805' : item.value2 === data ? '#F18805' : item.value3 === data ? '#F18805' : '#767582'
                                                }}>{item.title}</h2>
                                                {item.dropdown &&
                                                    <img className={showDropdowm ? "alpha_side_bar_rotate" : null} onClick={() => setShowDropdown(!showDropdowm)} src={arrowDownGrey} />
                                                }
                                            </div>
                                        </div>
                                        {item.dropdown && showDropdowm &&
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
                            <div onClick={() => logout()} className="alpha-side_bar-items_container"  >
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
                        <h2>Welcome, {user?.name}</h2>
                        <h3>{`${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`}</h3>
                    </div>
                </div>

                <div className="alpha-dashboard-top_bar_profile_top_view">
                    <div className="alpha-dashboard-top_bar_notification_view">
                        <img src={notificationTheme} />
                    </div>
                    <h4>{user?.name}</h4>
                    <div className="alpha-dashboard-top_bar_profile_view">
                        <img src={user?.image} />
                    </div>
                </div>
            </div>
        </div>
    )
}

