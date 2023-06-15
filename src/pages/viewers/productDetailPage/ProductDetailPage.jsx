import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";
import { useDispatch } from "react-redux";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import socketIO from "socket.io-client";

import { distance, images, hour, pinLocation, sNumber, share, plus, minus, clock, dotedTick, chat } from "../../../assets/icons";
import { BlogView, ConnectCardModel, Footer, NavBar, PaymentModel, OtpModel, BookingModel, ReviewModel, SubmitModel, Loader } from "../../../components";
import { activeTab } from "../../../redux/Slices/activeTabSlice";
import { diffBtwTwoDates, getDistanceFromLatLonInKm } from "../../../helpingMethods";
import { store } from "../../../redux/store";
import { snakbarOptions } from "../../../globalData";
import './productDetailPage.css'
import { bidData, cartData } from "../../../redux/Slices/cartSlice";
import { BASE_URL, api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import { subscriptionModel } from "../../../redux/Slices/userDataSlice";
const socket = socketIO(BASE_URL);
export default function ProductDetailPage() {
  const navigate = useNavigate()
  const disPatch = useDispatch();
  const { state } = useLocation()
  const productData = state?.data
  const endDate = new Date(productData?.auctionEndDate)
  const [bookingModel, setBookingModel] = useState(false)
  const [reviewModel, setReviewModel] = useState(false)
  const [paymentModel, setPaymentModel] = useState(false)
  const [connectCard, setConnectCard] = useState(false)
  const [successfullModel, setSuccessfullModel] = useState(false)
  const [otpModel, setOtpModel] = useState(false)
  const [bidValue, setBidValue] = useState(0)
  const [selectedPrice, setSelectedPrice] = useState(0)
  const [selectedDate1, setSelectedDate1] = useState()
  const [selectedDate2, setSelectedDate2] = useState()
  const [bidData, setBidData] = useState()
  const [activeType, setActiveType] = useState('')
  const [paymentType, setPaymentType] = useState()
  const [message, setMessage] = useState("Hidden Message");

  const [cardDetail, setCardDetail] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const user = store.getState().userData.userData
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [bidView, setBidView] = useState(false)
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const timeDiff = diffBtwTwoDates(new Date(), new Date(productData?.auctionEndDate)).includes('-')

  const featuresArray = [
    {
      id: 1,
      title: 'General Appearanceine',
      images: productData?.additionalImages,
      totalLength: productData?.additionalImages?.length,
      extraData: productData?.productType === 'Spare Part' ? false : true,
      show: true
    },
    {
      id: 2,
      title: 'Engine',
      images: productData?.engineImages,
      totalLength: productData?.engineImages?.length,
      extraData: false,
      show: productData?.productType === 'Spare Part' ? false : true

    },
    {
      id: 4,
      title: 'Control Station',
      images: productData?.controlImages,
      totalLength: productData?.controlImages?.length,
      extraData: false,
      show: productData?.productType === 'Spare Part' ? false : true

    },
    {
      id: 6,
      title: 'Undercarriage',
      images: productData?.undercarrigeImages,
      totalLength: productData?.undercarrigeImages?.length,
      extraData: false,
      show: productData?.productType === 'Spare Part' ? false : true

    }
  ]

  const increamentOrDecrement = (type) => {
    let bid = bidValue
    type === 1 ?
      bid <= 0 ? showMessage('You cannot place bid below 0$') : setBidValue(bid - 10)
      :
      setBidValue(bid + 10)
  }

  const onPressPlaceBid = async () => {
    if (store.getState().userData.userData?.subscriptionType === 'BASIC') {
      showMessage(`You subscription is ${store.getState().userData.userData?.subscriptionType}. Please upgrade.`)
    }
    else {
      if (!timeDiff) {
        if (user) {
          if (productData?.highestBid?.status !== 'accepted') {
            if (bidValue > 0) {
              disPatch(cartData(productData))
              setBidView(!bidView)
              const data = {
                product: productData?._id,
                amount: bidValue,
                status: "pending"
              };
              setActiveType('auction')
              setBidData(data)
              setPaymentModel(true)
            }
            else {
              showMessage('You cannot place bid below 0$')
            }
          }
          else {
            showMessage('You cannot bid this auction because this auction is sold out')

          }
        }
        else {
          showMessage('You are not login to perform this action')
        }
      }
      else {
        showMessage('Bid expired')
      }
    }

  }

  useEffect(() => {
    if (productData === undefined) {
      console.log('empty data')
    }
  }, [])

  const onClickPay = (type) => {
    if (user === null) {
      showMessage('Please login/signup first to perform this action')
      return
    }
    else {
      type === 1 ? setActiveType('rent') : setActiveType('buy')
      disPatch(cartData(productData));
      productData?.rentOrSell === "Rent" ? setBookingModel(true) : setPaymentModel(true)
    }
  }


  const onPressPayNow = async () => {
    setReviewModel(false)
    if (paymentType === 1) {
      if (user?.balance >= (activeType === 'auction' ? bidData?.amount : selectedPrice)) {
        sendOtp()
      }
      else {
        showMessage("You don't have sufficient balance in your wallet")
      }
    }
    else {
      sendOtp()
    }
  };

  const sendOtp = async () => {
    try {
      setIsLoading(true);
      const endPoint = api.sendAgainSignupOtp
      const data = {
        email: store.getState().userData?.userData?.email,
      };
      await callApi(Method.POST, endPoint, data,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            setOtpModel(true)
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

  const onPressConfirmOtp = async (otp) => {
    setOtpModel(false)
    try {
      setIsLoading(true);
      const endPoint = activeType === 'auction' ? api.bid : activeType === 'rent' ? api.rentedProduct : api.verifyEmail;

      const biddata = {
        otp: otp,
        product: bidData?.product,
        amount: bidData?.amount,
        status: bidData?.status,
        card: cardDetail
      };
      const biddataWallet = {
        otp: otp,
        product: bidData?.product,
        amount: bidData?.amount,
        status: bidData?.status,
        wallet: true
      };

      const rentData = {
        otp: otp,
        device: {
          id: localStorage.getItem('deviceId'),
          deviceToken: 'xyz'
        },
        product: productData?._id,
        duration: selectedDate2 - selectedDate1,
        start: selectedDate1,
        end: selectedDate2,
        status: 'pending',
        card: cardDetail
      };
      const rentDataWallet = {
        otp: otp,
        device: {
          id: localStorage.getItem('deviceId'),
          deviceToken: 'xyz'
        },
        product: productData?._id,
        duration: selectedDate2 - selectedDate1,
        start: selectedDate1,
        end: selectedDate2,
        status: 'pending',
        wallet: true
      };

      const buyData = {
        otp: otp,
        device: {
          id: localStorage.getItem('deviceId'),
          deviceToken: 'xyz'
        },
        email: store.getState().userData?.userData?.email,
        buyRequest: true,
        product: productData?._id,
        status: 'Pending',
        card: cardDetail
      };
      const buyDataWallet = {
        otp: otp,
        device: {
          id: localStorage.getItem('deviceId'),
          deviceToken: 'xyz'
        },
        email: store.getState().userData?.userData?.email,
        buyRequest: true,
        product: productData?._id,
        status: 'Pending',
        wallet: true
      };
      const finalBidData = paymentType === 1 ? biddataWallet : biddata
      const finalRentData = paymentType === 1 ? rentDataWallet : rentData
      const finalBuyData = paymentType === 1 ? buyDataWallet : buyData

      await callApi(Method.POST, endPoint, activeType === 'auction' ? finalBidData : activeType === 'rent' ? finalRentData : finalBuyData,
        res => {
          console.log(res);
          if (res?.status === 200) {
            setIsLoading(false)
            setSuccessfullModel(true)
          }
          else {
            setIsLoading(false)
            showMessage(res?.message)
            setOtpModel(true)

          }
        },
        err => {
          showMessage(err.message)
          setIsLoading(false);
          setOtpModel(true)
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setOtpModel(true)

    }
  };

  const sendHiddenMessage = () => {
    setIsLoading(true)
    // return
    console.log('asdfasf');
    socket.emit("send-message", {
      userId: user._id,
      to: productData?.user?.id,
      message,
      messageType: "hidden",
      messageTime: new Date(),
    });
    setTimeout(() => {
      setIsLoading(false)
      navigate('/chatpagebuyer', { state: { data: productData?.user } })
    }, 1000);
  }

  return (
    <div className="alpha-pro_list_page-main_container">
      <BlogView />
      <NavBar loaderValue={(data) => setIsLoading(data)} />
      <Loader loading={isLoading} />
      {bookingModel && <BookingModel data={productData} onClickClose={() => setBookingModel(false)} onClick={(data) => [setSelectedPrice(data?.price), setSelectedDate1(data?.date1), setSelectedDate2(data?.date2), setPaymentModel(true), setBookingModel(false)]} />}
      {paymentModel && <PaymentModel onClickClose={() => setPaymentModel(false)} onClick={(value) => [setPaymentType(value.id), value.id === 1 ? [setReviewModel(true), setPaymentModel(false)] : value.id === 2 ? [setConnectCard(true), setPaymentModel(false)] : value.id === 3 ? [setPaymentModel(false), [navigate('/financing', 'financing'), disPatch(cartData(productData)), disPatch(activeTab('financing'))]] : [setReviewModel(true), setPaymentModel(false)]]} />}
      {reviewModel && <ReviewModel data={productData} price={activeType === 'auction' ? bidData?.amount : activeType === 'rent' ? selectedPrice : productData?.price} onClickClose={() => [setReviewModel(false)]} onClick={() => onPressPayNow()} />}
      {connectCard && <ConnectCardModel onClick={(data) => [setCardDetail(data), setReviewModel(true), setConnectCard(false)]} onClickClose={() => [setConnectCard(false)]} />}
      {otpModel && <OtpModel onClick={(data) => onPressConfirmOtp(data)} onClickClose={() => [setOtpModel(false)]} />}
      {successfullModel && <SubmitModel onClick={() => [setSuccessfullModel(false), navigate('/')]} icon={dotedTick} button title={'Congratulations!'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis fringilla eros, sit amet auctor justo accumsan et.'} />}
      {/* {successfullModel && <SubmitModel try onClick={() => setSuccessfullModel(false)} onClickTry={() => [setPaymentModel(true), setSuccessfullModel(false)]} icon={dotedCross} button title={'Opps !'} des={'Something went Wrong'} />} */}
      <div className="alpha_detail_page_container">
        <div className="alpha_image_slider_top_view">
          <Slide autoplay={false} transitionDuration={300} infinite={false}>
            {productData?.images?.map((item) => {
              return (
                <div key={item} className="each-slide-effect">
                  <img src={item} />
                </div>
              )
            })}
          </Slide>
        </div>
        <div className="alpha_detail_page_data_top_container">
          <div className="alpha_detail_page_data_container">
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <h1>{productData?.productName}</h1>
              <img onClick={() => sendHiddenMessage()} src={chat} className="alpha_chat_icon_detail" />
            </div>

            <div className="alpha-detail_page-location_data_view">
              <div className="alpha-detail_page-location_view">
                <div className="alpha-detail_page-location_icon_view">
                  <img src={pinLocation} />
                </div>
                <div className="alpha-detail_page-located_text_view">
                  <p>Located</p>
                  <img src={distance} />
                  <h6>{getDistanceFromLatLonInKm(productData?.location?.coordinates[1], productData?.location?.coordinates[0], store.getState().userData.userLocation.lat, store.getState().userData.userLocation.long)} km</h6>
                </div>
                <div className="alpha-detail_page-location_text_view">
                  <h5>{productData?.location?.address}</h5>
                </div>
              </div>
              {productData?.productType !== 'Spare Part' ?
                <>
                  <>
                    <div className="alpha-detail_page-hours_view_divider" />
                    <div className="alpha-detail_page-hours_top_view" >
                      <img src={hour} />
                      <h2>Mileage</h2>
                      <h3>{productData?.Mileage}</h3>
                    </div>
                  </>
                  <>
                    <div className="alpha-detail_page-hours_view_divider" />
                    <div className="alpha-detail_page-hours_top_view" >
                      <img src={sNumber} />
                      <h2>Serial number</h2>
                      <h3>{productData?.serialNumber}</h3>
                    </div>
                  </>
                </> :
                null
              }

            </div>
            <div className="alpha-detail_page-detailed_info_top_view">
              <h1>Detailed Information</h1>
              <div className="alpha-detail_page-detailed_info_feature_text_top_view">
                <h2>Features:</h2>
                <h3>{productData?.features}</h3>
              </div>
              <div className="alpha-detail_page-detailed_info_feature_text_top_view">
                <h2>Usage:</h2>
                <h3>{productData?.usage}</h3>
              </div>
              <div className="alpha-detail_page-detailed_info_feature_text_top_view">
                <h2>Catalogue Notes:</h2>
                <h3>{productData?.catelougeNote}</h3>
              </div>
            </div>
            {featuresArray.filter((item) => item.show)?.map((item, index) => {
              return (
                <div key={index}>
                  <div className="alpha-detail_page-detailed_info_divider" />
                  <div className="alpha-detail_page-features_top_view">
                    <div className="alpha-detail_page-features_title_view">
                      <h2>{item.title}</h2>
                      <img src={images} />
                      <h3>{item?.totalLength} Photos</h3>
                    </div>
                    <div className="alpha-detail_page-features_images_top_view">
                      <div className="alpha-detail_page-features_images_view" >
                        {item?.images?.map((data, index) => {
                          return (
                            <img style={{
                              // marginRight: index === item.images.length - 1 ? -10 : 20
                            }} key={index} src={data} />
                          )
                        })}
                      </div>
                      {/* <div className="alpha-detail_page-features_images_next_view" >
                        <img src={nextDoubleArrow} />
                      </div> */}
                    </div>
                    {item.extraData &&
                      <div>
                        <div className="alpha-detail_page-detailed_info_feature_text_top_view">
                          <h2>Serial Number:</h2>
                          <h3>{productData?.serialNumber}</h3>
                        </div>
                        <div className="alpha-detail_page-detailed_info_feature_text_top_view">
                          <h2>Odo Meter:</h2>
                          <h3>{productData?.odometer}</h3>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              )
            })}
          </div>
          {productData?.select === "Auction" ?
            <div className="alpha_detail_page_price_top_view">
              <div className="alpha_detail_page_price_view_header">
                <div onClick={() => setBidView(!bidView)} className="alpha_detail_page_price_view_header_item_info" style={{ backgroundColor: !bidView ? '#F18805' : 'white' }}>
                  <h2 className={!bidView ? "alpha_detail_page_price_view_header_item_info_text" : "alpha_detail_page_price_view_header_item_info_text_two"}>
                    Item Info
                  </h2>
                </div>
                <div onClick={() => setBidView(!bidView)} className="alpha_detail_page_price_view_header_item_info" style={{ borderTopRightRadius: 5, borderTopLeftRadius: 0, backgroundColor: bidView ? '#F18805' : 'white' }}>
                  <h2 className={bidView ? "alpha_detail_page_price_view_header_item_info_text" : "alpha_detail_page_price_view_header_item_info_text_two"}>
                    Bids ({productData?.bids?.length})
                  </h2>
                </div>
              </div>
              {!bidView ?
                <div>
                  <div className="alpha_detail_page_price_view_share_view">
                    <h2>Base Amount</h2>
                    <img src={share} />
                  </div>
                  <h1>${`${productData?.price}`}</h1>

                  {/* <h4 style={{ marginTop: 20 }}>Sold out to:{productData?.highestBid?.bidder?.name}</h4> */}

                  <div onClick={() => onPressPlaceBid()} style={{ alignSelf: 'center', marginLeft: 20 }} className={productData?.highestBid?.status === 'accepted' ? "alpha_detail_page_price_view_button_view_disable" : "alpha_detail_page_price_view_button_view"}>
                    <h2>Place Bid</h2>
                  </div>
                  {productData?.highestBid?.status === 'accepted' && <p>Sold out to: {productData?.highestBid?.bidder?.name}</p>}
                  <div className="alpha_detail_page_price_view_box_close_date_view">
                    <img src={clock} />
                    <h5>Closes:<span style={{ fontWeight: 700 }}>{`${monthNames[endDate.getMonth()]} ${endDate.getDate()} ${endDate.getFullYear()}, 12:00 AM`}</span></h5>
                  </div>
                  <div className="alpha_detail_page_price_view_location_view">
                    <img src={pinLocation} />
                    <h4>Timed Auction:<span style={{ color: '#005B99' }}> {productData?.location?.address}</span></h4>
                  </div>
                  <p>Donec non tristique ex. Maecenas malesuada, nulla efficitur eleifend rutrum, risus quam consectetur ante, non fringilla libero nisi nec lectus. Morbi lectus ex, ultrices eget lobortis ut, dignissim a tortor. Donec sodales ante mi, id laoreet magna sodales vitae. </p>

                </div>
                :
                <div>
                  <div className="alpha_detail_page_price_view_bid_list_view">
                    {productData?.bids?.length > 0 ?

                      (productData?.bids?.map((item, index) => {

                        return (
                          <div key={item.id} className="alpha_detail_page_price_view_bid_list_item_view">
                            <div>
                              <h2>{`$ ${item?.amount}` + `${index === 0 ? '  Highest Bid' : ''}`}</h2>
                            </div>
                          </div>
                        )
                      }))
                      :
                      <h2>{`No bid found`}</h2>

                    }
                  </div>
                  <h3>Closes:<span style={{ fontWeight: 700 }}>{`${monthNames[endDate.getMonth()]} ${endDate.getDate()} ${endDate.getFullYear()}, 12:00 AM`}</span> </h3>
                  <div className="alpha_detail_page_price_view_bid_list_price_large_view">
                    <h2>$</h2>
                    <h3>${bidValue}</h3>
                  </div>
                  <div className="alpha_detail_page_price_view_bid_list_buttons_view">
                    <div onClick={() => increamentOrDecrement(1)}>
                      <img src={minus} />
                    </div>
                    <div onClick={() => increamentOrDecrement(2)}>
                      <img src={plus} />
                    </div>
                  </div>
                  <div onClick={() => onPressPlaceBid()} className={productData?.highestBid?.status === 'accepted' ? "alpha_detail_page_price_view_button_view_disable" : "alpha_detail_page_price_view_button_view"}>
                    <h2 >Place Bid</h2>
                  </div>
                </div>
              }
            </div>
            :

            <div className="alpha_detail_page_price_top_view">
              <div className="alpha_detail_page_price_view_title_view">
                <h2>Item Info</h2>
              </div>
              <div className="alpha_detail_page_price_view_share_view">
                <h2>{productData?.productType === 'Spare Part' ? 'Price' : 'Per day'}</h2>
                <img style={{ cursor: 'pointer' }} src={share} />
              </div>
              <h1>${`${productData?.price}`}</h1>
              <div onClick={() => onClickPay(productData?.rentOrSell === "Rent" ? 1 : 2)} className={productData?.highestBid?.status === 'accepted' ? "alpha_detail_page_price_view_button_view" : "alpha_detail_page_price_view_button_view_disable"}>
                <h2>{productData?.rentOrSell === "Rent" ? 'Request For Rent' : 'Pay'}</h2>
              </div>
              {productData?.rentOrSell === "Rent" &&
                <div className="alpha_detail_page_price_view_location_view">
                  <img src={pinLocation} />
                  <h4>Location:<span style={{ color: '#005B99' }}> {productData?.location?.address}</span></h4>
                </div>
              }
              <p>Donec non tristique ex. Maecenas malesuada, nulla efficitur eleifend rutrum, risus quam consectetur ante, non fringilla libero nisi nec lectus. Morbi lectus ex, ultrices eget lobortis ut, dignissim a tortor. Donec sodales ante mi, id laoreet magna sodales vitae. </p>
            </div>
          }

        </div>
        <div className="alpha_detail_page_about_top_view">
          <h1>About Alpha Equipment Listings.</h1>
          <h2>Construction Equipment That You Can Trust</h2>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia, augue nec imperdiet condimentum, est elit viverra ante, quis tincidunt ante ipsum in dui. Integer posuere, ipsum sed consequat suscipit, risus sem scelerisque odio, vehicula laoreet purus arcu at neque. Etiam varius enim eu tempor feugiat. Nulla facilisi. Donec rhoncus tortor ut dapibus mollis. Sed eu sem neque. Suspendisse ac pulvinar sem, sed pulvinar nunc. In quis dui id tellus malesuada consequat nec quis tellus. Ut consectetur elit orci, non dignissim lectus malesuada nec. Phasellus congue rhoncus mi, ut pellentesque tortor sollicitudin eu.</h4>
          <h2>What type of used heavy equipment do we carry?</h2>
          <h3>Small Construction Equipment</h3>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia, augue nec imperdiet condimentum, est elit viverra ante, quis tincidunt ante ipsum in dui. Integer posuere, ipsum sed consequat suscipit, risus sem scelerisque odio, vehicula laoreet purus arcu at neque. Etiam varius enim eu tempor feugiat. Nulla facilisi. Donec rhoncus tortor ut dapibus mollis. Sed eu sem neque. </h4>
        </div>
        <Footer />
      </div>

    </div>

  );
}
