import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";
import { useDispatch } from "react-redux";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { distance, images, hour, pinLocation, sNumber, share, plus, minus, clock, dotedTick } from "../../../assets/icons";
import { BlogView, ConnectCardModel, Footer, NavBar, PaymentModel, OtpModel, BookingModel, ReviewModel, SubmitModel } from "../../../components";
import { activeTab } from "../../../redux/Slices/activeTabSlice";
import { getDistanceFromLatLonInKm } from "../../../helpingMethods";
import { store } from "../../../redux/store";
import { snakbarOptions } from "../../../globalData";
import './productDetailPage.css'

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
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [bidView, setBidView] = useState(false)
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
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
    setPaymentModel(true)
    setBidView(!bidView)
    if (bidValue > 0) {
      const data = {
        product: productData?._id,
        amount: bidValue,
        status: "pending"
      };
      console.log(data);
      // disPatch(bidData(data))
      // navigate(routes.deposit, { route: routes.placeBid })
    }
    else {
      showMessage('You cannot place bid below 0$')
    }
  }

  useEffect(() => {
    if (productData === undefined) {
      console.log('empty data')
    }
  }, [])

  const onClickPay = () => {
    productData?.rentOrSell === "Rent" ? setBookingModel(true) : setPaymentModel(true)
  }

  return (
    <div className="alpha-pro_list_page-main_container">
      <BlogView />
      <NavBar />
      {bookingModel && <BookingModel onClickClose={() => setBookingModel(false)} onClick={() => [setPaymentModel(true), setBookingModel(false)]} />}
      {paymentModel && <PaymentModel onClickClose={() => setPaymentModel(false)} onClick={(value) => value.id === 1 ? [setReviewModel(true), setPaymentModel(false)] : value.id === 2 ? [setConnectCard(true), setPaymentModel(false)] : value.id === 3 ? [setPaymentModel(false), [navigate('/financing', 'financing'), disPatch(activeTab('financing'))]] : [setReviewModel(true), setPaymentModel(false)]} />}
      {reviewModel && <ReviewModel onClickClose={() => [setReviewModel(false)]} onClick={() => [setOtpModel(true), setReviewModel(false)]} />}
      {connectCard && <ConnectCardModel onClick={() => [setReviewModel(true), setConnectCard(false)]} onClickClose={() => [setConnectCard(false)]} />}
      {otpModel && <OtpModel onClick={() => [setSuccessfullModel(true), setOtpModel(false)]} onClickClose={() => [setOtpModel(false)]} />}
      {successfullModel && <SubmitModel onClick={() => setSuccessfullModel(false)} icon={dotedTick} button title={'Congratulations!'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis fringilla eros, sit amet auctor justo accumsan et.'} />}
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
            <h1>{productData?.productName}</h1>
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
                <div onClick={() => productData?.highestBid?.amount ? setBidView(!bidView) : showMessage('Bid Expired')} className="alpha_detail_page_price_view_header_item_info" style={{ borderTopRightRadius: 5, borderTopLeftRadius: 0, backgroundColor: bidView ? '#F18805' : 'white' }}>
                  <h2 className={bidView ? "alpha_detail_page_price_view_header_item_info_text" : "alpha_detail_page_price_view_header_item_info_text_two"}>
                    Bids ({productData?.bids?.length})
                  </h2>
                </div>
              </div>
              {!bidView ?
                <div>
                  <div className="alpha_detail_page_price_view_share_view">
                    <h2>Highest Bid</h2>
                    <img src={share} />
                  </div>
                  {productData?.highestBid?.amount ?
                    <h1>${`${productData?.highestBid?.amount}`}</h1>
                    :
                    <h1>Bid expired</h1>

                  }
                  {productData?.highestBid?.amount ?
                    <div onClick={() => onPressPlaceBid()} style={{ alignSelf: 'center', marginLeft: 20 }} className="alpha_detail_page_price_view_button_view">
                      <h2>Place Bid</h2>
                    </div>
                    :
                    <div style={{ marginTop: 10 }} />
                  }

                  <div className="alpha_detail_page_price_view_box_close_date_view">
                    <img src={clock} />
                    <h5>Closes:<span style={{ fontWeight: 700 }}>{`${monthNames[endDate.getMonth()]} ${endDate.getDate()}, 12:00 AM`}</span></h5>
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
                    {productData?.bids?.map((item, index) => {
                      return (
                        <div key={item.id} className="alpha_detail_page_price_view_bid_list_item_view">
                          <div>
                            <h2>{`$ ${item?.amount}` + `${index === 0 ? '  Highest Bid' : ''}`}</h2>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <h3>Closes:<span style={{ fontWeight: 700 }}>{`${monthNames[endDate.getMonth()]} ${endDate.getDate()}, 12:00 AM`}</span> </h3>
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
                  <div onClick={() => onPressPlaceBid()} className="alpha_detail_page_price_view_bid_list_button">
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
              <div onClick={() => onClickPay()} className="alpha_detail_page_price_view_button_view">
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
