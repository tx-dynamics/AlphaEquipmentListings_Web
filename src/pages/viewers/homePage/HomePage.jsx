import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { dummyFour, landingPageBanner } from '../../../assets/icons'
import { activeTab } from "../../../redux/Slices/activeTabSlice";
import { store } from "../../../redux/store";
import { userData, userLocation } from "../../../redux/Slices/userDataSlice";
import { useSnackbar } from "react-simple-snackbar";
import { snakbarOptions } from "../../../globalData";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import { dashboardData } from "../../../redux/Slices/buyerDashboardSlice";
import { BlogView, ConnectCardModel, DashboardAuctionView, DashboardCategoriesView, DashboardSparePartView, Footer, Loader, MembershipModel, NavBar, OtpModel, PaymentModel } from "../../../components";
import './homePage.css'

export default function HomePage() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [membershipModel, setMembershipModel] = useState(false)
  const [chargesView, setChargesView] = useState(false)
  const [paymentModel, setPaymentModel] = useState(false)
  const [connectCard, setConnectCard] = useState(false)
  const [otpModel, setOtpModel] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [auctionArray, setAuctionArray] = useState([])
  const [categoriesArray, setCategoriesArray] = useState([])
  const [sparePartArray, setSparePartArray] = useState([])
  const [rendableMachinaryArray, setRendableMachinaryArray] = useState([])
  const [isSearch, setIsSearch] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [searchedProduct, setSearchedProduct] = useState([])
  const onClick = (type, value, data) => {
    dispatch(activeTab(value))
    navigate(type, { state: { screen: value, data: data } })
  }

  useEffect(() => {
    dispatch(activeTab(''))
    getDashboardData();
    getCurrentLocation()
    const user = store.getState().userData.userData
    user?.accountType === 'seller' && dispatch(userData(null))
  }, [])

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let location = { lat: position?.coords?.latitude, long: position?.coords?.longitude }
        dispatch(userLocation(location))
      });

    } else {
      console.log("Not Available");
    }
  }

  const getDashboardData = async () => {
    setIsLoading(true)
    try {
      const endPoint = api.buyerDashboard + `?search=`;
      await callApi(Method.GET, endPoint, null,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            dispatch(dashboardData(res?.data))
            setAuctionArray(res?.data?.productsForAuction)
            setCategoriesArray(res?.data?.categories)
            setSparePartArray(res?.data?.productsSpareParts)
            setRendableMachinaryArray(res?.data?.productsForRent)
          }
          else {
            setIsLoading(false)
            showMessage(res?.message)
          }
        },
        err => {
          showMessage(err.message)
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  // const checkUserLogin = () => {
  //   if (userDataa) {
  //     return true
  //   }
  //   else {
  //     dispatch(userData(null))
  //     navigation.replace(routes.auth)
  //   }
  // }

  const searchProduct = async () => {
    setIsLoading(true)
    try {
      const endPoint = api.buyerDashboard + `?search=${searchText}`;
      await callApi(Method.GET, endPoint, null,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            setIsSearch(true)
            setSearchedProduct(res?.data?.products)
          }
          else {
            setIsLoading(false)
            showMessage(res?.message)
          }
        },
        err => {
          showMessage(err.message)
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="alpha-home_page-main_container">
      <BlogView />
      <NavBar onKeyDown={() => setIsSearch(false)} onClickSearch={() => searchProduct()} onChange={(e) => setSearchText(e)} />
      <Loader loading={isLoading} />
      {otpModel && <OtpModel onClick={() => setOtpModel(false)} onClickClose={() => [setOtpModel(false)]} />}
      {connectCard && <ConnectCardModel onClick={() => [setOtpModel(true), setConnectCard(false)]} onClickClose={() => [setConnectCard(false)]} />}
      {paymentModel && <PaymentModel onClickClose={() => setPaymentModel(false)} onClick={(value) => value.id === 1 ? [setPaymentModel(false), setOtpModel(true)] : value.id === 2 ? [setConnectCard(true), setPaymentModel(false)] : value.id === 3 ? [setPaymentModel(false), [navigate('/financing', 'financing'), dispatch(activeTab('financing'))]] : setPaymentModel(false)} />}
      {membershipModel && <MembershipModel chargesView={chargesView} onClickClose={() => setMembershipModel(false)} onClick={() => !chargesView ? setChargesView(true) : [setPaymentModel(true), setMembershipModel(false)]} />}
      {!isSearch ?
        <div className="alpha-home_page-container">
          <img src={landingPageBanner} alt={'Banner'} />
          <div className="alpha-home_page-auction_top_view_two">
            <div className="alpha-home_page-auction_heading_view">
              <h2>Auction</h2>
              <div onClick={() => auctionArray.length > 0 ? onClick('/productlistingpage', 'auction', auctionArray) : showMessage('No auctions found')}>
                <h3>View All</h3>
              </div>
            </div>
            <div className="alpha_home-page-grid_view">
              {auctionArray.length > 0 ?
                (auctionArray.map((item, index) => {
                  return (
                    <DashboardAuctionView item={item} onClick={() => onClick('/productdetailpage', 'auction', item)} type={1} index={index} />
                  )
                }))
                :
                <div className="alpha_home_page_no_data">
                  <h2>No auctions found</h2>
                </div>
              }
            </div>
          </div>

          <div className="alpha-home_page-auction_top_view">
            <div className="alpha-home_page-auction_heading_view">
              <h2>Categories</h2>
              {/* <div onClick={() => categoriesArray.length > 0 ? onClick('/maincategorypage', 'category', categoriesArray) : showMessage('No categories found')}>
           <h3>View All</h3>
         </div> */}
            </div>
            <div className="alpha_home-page-grid_view_categories">
              {categoriesArray.length > 0 ?
                (categoriesArray.map((item, index) => {
                  return (
                    <DashboardCategoriesView type={1} onClick={() => onClick('/maincategorypage', 'category', item)} item={item} index={index} />
                  )
                }))
                :
                <div className="alpha_home_page_no_data">
                  <h3>No categories found</h3>
                </div>
              }

            </div>
          </div>

          <div className="alpha-home_page-auction_top_view">
            <div className="alpha-home_page-auction_heading_view">
              <h2>Spare Parts</h2>
              <div onClick={() => sparePartArray.length > 0 ? onClick('/productlistingpage', 'spareparts', sparePartArray) : showMessage('No spare parts found')}>
                <h3>View All</h3>
              </div>
            </div>
            <div className="alpha_home-page-grid_view_categories">
              {sparePartArray.length > 0 ?
                (sparePartArray.map((item, index) => {
                  return (
                    <DashboardSparePartView item={item} onClick={() => onClick('/productdetailpage', 'spareparts', item)} index={index} />
                  )
                }))
                :
                <div className="alpha_home_page_no_data">
                  <h3>No spare parts found</h3>
                </div>
              }

            </div>
          </div>

          <div className="alpha-home_page-auction_top_view">
            <div className="alpha-home_page-auction_heading_view">
              <h2>Rented Machinery</h2>
              <div onClick={() => rendableMachinaryArray.length > 0 ? onClick('/productlistingpage', 'rented', rendableMachinaryArray) : showMessage('No rentable machinary found')}>
                <h3>View All</h3>
              </div>
            </div>
            <div className="alpha_home-page-grid_view">
              {rendableMachinaryArray.length > 0 ?
                (rendableMachinaryArray.map((item, index) => {
                  return (
                    <DashboardAuctionView item={item} onClick={() => onClick('/productdetailpage', 'rented', item)} type={2} index={index} />
                  )
                }))
                :
                <div className="alpha_home_page_no_data">
                  <h2>No rentable machinary found</h2>
                </div>
              }
            </div>
          </div>
          <Footer />
        </div>
        :
        (searchedProduct?.length > 0 ?
          (searchedProduct?.map((item) => {
            return (
              <div onClick={() => navigate('/productdetailpage', { state: { data: item } })} className="alpha_dashboard_search_view" >
                <img src={item?.images[0]} />
                <h1>{item?.productName}</h1>
                <div>
                  <h3>Product Type</h3>
                  <h4>{item?.select ? item?.select === 'Auction' ? 'Auction' : item?.rentOrSell : item?.productType}</h4>
                </div>
                <div>
                  <h3>Price</h3>
                  <h4>${item?.price}</h4>
                </div>
                <div>
                  <h3>Owner</h3>
                  <h4>{item?.user?.name}</h4>
                </div>
              </div>
            )
          }))
          :
          <div style={{ flex: 1 }} className="alpha_home_page_no_data">
            <h3>No items found</h3>
          </div>
        )
      }
    </div>
  );
}
