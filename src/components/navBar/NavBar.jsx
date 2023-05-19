import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logo, filterIcon, drawerIcon, search, notification, messageIcon, dummyFour, logoutTwo } from '../../assets/icons'
import './navBar.css'
import { useDispatch, useSelector } from "react-redux";
import { activeTab } from '../../redux/Slices/activeTabSlice'
import { accessToken, refreshToken, userData } from '../../redux/Slices/userDataSlice';
import { store } from '../../redux/store';
import { useSnackbar } from 'react-simple-snackbar';
import { snakbarOptions } from '../../globalData';
import { api } from '../../network/Environment';
import { Method, callApi } from '../../network/NetworkManger';

export default function NavBar() {
    const disPatch = useDispatch();
    const data = useSelector((data) => data.activeTab.value,);
    const user = useSelector((data) => data.userData.userData);
    const dashboardData = store.getState().buyerDashboard.dashboardData
    const [showMessage, hideMessage] = useSnackbar(snakbarOptions)

    const navigate = useNavigate();
    const [marginLeft, setMarginLeft] = useState(-300)

    const onClick = (type, value, data) => {
        disPatch(activeTab(value))
        navigate(type, { state: { screen: value, data: data } })
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
        <div className="alpha-navbar-main_container">
            <div className="alpha-navbar-logo_view">
                <img onClick={() => onClick('/', '')} src={logo} alt={'logo'} />
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
                    {user ?
                        <div className="alpha-navbar-profile_top_view">
                            <div onClick={() => logout()} className='alpha-navbar-notification_view'>
                                <img src={logoutTwo} />
                            </div>
                            <div onClick={() => onClick('/chatpagebuyer', 'chatpagebuyer')} className='alpha-navbar-notification_view'>
                                <img src={messageIcon} />
                            </div>
                            <div onClick={() => onClick('/profile', 'profile')} className='alpha-navbar-profile_view'>
                                <img src={user?.image} />
                            </div>
                        </div>
                        :
                        <div className="alpha-navbar-login_buttons_view">
                            <h3 onClick={() => navigate('/signup')}>Register</h3>
                            <div onClick={() => navigate('/signin')}>
                                <h4>Log In</h4>
                            </div>
                        </div>
                    }



                </div>
                <div className="alpha-navbar-nav_items_top_view">
                    {/* <h3 style={{ color: data === 'category' ? '#F18805' : ' #303030' }} onClick={() => dashboardData?.categories?.length > 0 ? onClick('/productlistingpage', 'category', dashboardData?.categories) : showMessage('No categories found')}>Category</h3> */}
                    <h3 style={{ color: data === 'auction' ? '#F18805' : ' #303030' }} onClick={() => dashboardData?.productsForAuction?.length > 0 ? onClick('/productlistingpage', 'auction', dashboardData?.productsForAuction) : showMessage('No auctions found')}>Auction</h3>
                    <h3 style={{ color: data === 'spareparts' ? '#F18805' : ' #303030' }} onClick={() => dashboardData?.productsSpareParts?.length > 0 ? onClick('/productlistingpage', 'spareparts', dashboardData?.productsSpareParts) : showMessage('No spare parts found')}>Spare Parts</h3>
                    <h3 style={{ color: data === 'financing' ? '#F18805' : ' #303030' }} onClick={() => onClick('/financing', 'financing')}>Financing</h3>
                    <h3 style={{ color: data === 'rented' ? '#F18805' : ' #303030' }} onClick={() => dashboardData?.productsForRent?.length > 0 ? onClick('/productlistingpage', 'rented', dashboardData?.productsForRent) : showMessage('No rentable machinaries found')}>Rented</h3>
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
                {user ?
                    <div className="alpha-navbar-profile_top_view">
                        <div onClick={() => logout()} className='alpha-navbar-notification_view'>
                            <img src={logoutTwo} />
                        </div>
                        <div onClick={() => onClick('/chatpagebuyer', 'chatpagebuyer')} className='alpha-navbar-notification_view'>
                            <img src={messageIcon} />
                        </div>
                        <div onClick={() => onClick('/profile', 'profile')} className='alpha-navbar-profile_view'>
                            <img src={user?.image} />
                        </div>
                    </div>
                    :
                    <div className="alpha-navbar-login_buttons_view">
                        <h3 onClick={() => navigate('/signup')}>Register</h3>
                        <div onClick={() => navigate('/signin')}>
                            <h4>Log In</h4>
                        </div>
                    </div>
                }

                <div className='alpha_navbar-menu_container' style={{ left: marginLeft, }}>
                    {user &&
                        <div className="alpha-navbar-profile_drawer_view">
                            <div onClick={() => logout()} className='alpha-navbar-notification_view'>
                                <img src={logoutTwo} />
                            </div>
                            <div className='alpha-navbar-notification_view'>
                                <img src={messageIcon} />
                            </div>
                            <div onClick={() => onClick('/profile', 'profile')} className='alpha-navbar-profile_view'>
                                <img src={user?.image} />
                            </div>
                        </div>
                    }

                    <div className='alpha-navbar-menu_search_view'>
                        <input placeholder='Search your query' />
                        <img src={search} />
                    </div>
                    {/* <h3 style={{ color: data === 'category' ? '#F18805' : ' #303030' }} onClick={() => dashboardData?.categories?.length > 0 ? onClick('/productlistingpage', 'category', dashboardData?.categories) : showMessage('No categories found')}>Category</h3> */}
                    <h3 style={{ color: data === 'auction' ? '#F18805' : ' #303030' }} onClick={() => dashboardData?.productsForAuction?.length > 0 ? onClick('/productlistingpage', 'auction', dashboardData?.productsForAuction) : showMessage('No auctions found')}>Auction</h3>
                    <h3 style={{ color: data === 'spareparts' ? '#F18805' : ' #303030' }} onClick={() => dashboardData?.productsSpareParts?.length > 0 ? onClick('/productlistingpage', 'spareparts', dashboardData?.productsSpareParts) : showMessage('No spare parts found')}>Spare Parts</h3>
                    <h3 style={{ color: data === 'financing' ? '#F18805' : ' #303030' }} onClick={() => onClick('/financing', 'financing')}>Financing</h3>
                    <h3 style={{ color: data === 'rented' ? '#F18805' : ' #303030' }} onClick={() => dashboardData?.productsForRent?.length > 0 ? onClick('/productlistingpage', 'rented', dashboardData?.productsForRent) : showMessage('No rentable machinaries found')}>Rented</h3>
                    <h3 style={{ color: data === 'calculator' ? '#F18805' : ' #303030' }} onClick={() => onClick('/calculator', 'calculator')}>Calculator</h3>
                    <h3 onClick={() => setMarginLeft(-300)} style={{ color: 'red' }}>Close</h3>
                    {!user &&
                        <div className="alpha-navbar-menu_login_view">
                            <div onClick={() => navigate('/signup')}>
                                <h4>Register</h4>
                            </div>
                            <div onClick={() => navigate('/signin')}>
                                <h4>Login</h4>
                            </div>
                        </div>
                    }

                </div>

            </div>

        </div>
    )
}

