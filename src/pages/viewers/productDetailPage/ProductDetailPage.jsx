import React, { useState } from "react";
import { distance, dummyFour, dummyOne, dummyThree, images, flag, hour, pinLocation, sNumber, nextDoubleArrow, share, plus, minus, clock, dotedTick, dotedCross } from "../../../assets/icons";
import { BlogView, ConnectCardModel, Footer, NavBar, PaymentModel, OtpModel, BookingModel, ReviewModel, SubmitModel } from "../../../components";
import './productDetailPage.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { activeTab } from "../../../redux/Slices/activeTabSlice";

export default function ProductDetailPage() {
  const navigate = useNavigate()
  const disPatch = useDispatch();
  const [bookingModel, setBookingModel] = useState(false)
  const [reviewModel, setReviewModel] = useState(false)
  const [paymentModel, setPaymentModel] = useState(false)
  const [connectCard, setConnectCard] = useState(false)
  const [successfullModel, setSuccessfullModel] = useState(false)
  const [otpModel, setOtpModel] = useState(false)
  const [bidValue, setBidValue] = useState(82000)

  const { state } = useLocation()
  const [bidView, setBidView] = useState(false)
  const imageArray = [
    dummyFour, dummyOne, dummyThree
  ];
  const featuresArray = [
    {
      id: 1,
      title: 'General Appearanceine',
      images: [dummyFour, dummyOne, dummyThree, dummyFour, dummyOne,],
      extraData: true,
      show: true
    },
    {
      id: 2,
      title: 'Engine',
      images: [dummyFour, dummyOne, dummyThree, dummyFour, dummyOne,],
      extraData: false,
      show: state?.screen === 'spareparts' ? false : true

    },
    {
      id: 3,
      title: 'Drivetrain',
      images: [dummyFour, dummyOne, dummyThree, dummyFour, dummyOne,],
      extraData: false,
      show: state?.screen === 'spareparts' ? false : true

    },
    {
      id: 4,
      title: 'Control Station',
      images: [dummyFour, dummyOne, dummyThree, dummyFour, dummyOne,],
      extraData: false,
      show: state?.screen === 'spareparts' ? false : true

    },
    {
      id: 5,
      title: 'Body Configuration',
      images: [dummyFour, dummyOne, dummyThree, dummyFour, dummyOne,],
      extraData: false,
      show: state?.screen === 'spareparts' ? false : true

    },
    {
      id: 6,
      title: 'Undercarriage',
      images: [dummyFour, dummyOne, dummyThree, dummyFour, dummyOne,],
      extraData: false,
      show: state?.screen === 'spareparts' ? false : true

    }
  ]
  const bidsPriceArray = [
    {
      id: 1,
      price: '$72,000',
    },
    {
      id: 2,
      price: '$73,000',
    },
    {
      id: 3,
      price: '$80,000',
    },
    {
      id: 4,
      price: '$80,000 High Bid',
    },
  ]
  const increamentOrDecrement = (type) => {
    let minValue = bidValue
    type === 1 ?
      setBidValue(minValue - 100)
      :
      setBidValue(minValue + 100)
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
            {imageArray.map((item) => {
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
            <h1>2016 Wacker Neuson RD12A Double Drum Roller</h1>
            <div className="alpha-detail_page-location_data_view">
              <div className="alpha-detail_page-location_view">
                <div className="alpha-detail_page-location_icon_view">
                  <img src={pinLocation} />
                </div>
                <div className="alpha-detail_page-located_text_view">
                  <p>Located</p>
                  <img src={distance} />
                  <h6>4.3 km</h6>
                </div>
                <div className="alpha-detail_page-location_text_view">
                  <img src={flag} />
                  <h5>Lethbridge County, AB, CAN</h5>
                </div>
              </div>
              {state?.screen !== 'spareparts' ?
                <>
                  <>
                    <div className="alpha-detail_page-hours_view_divider" />
                    <div className="alpha-detail_page-hours_top_view" >
                      <img src={hour} />
                      <h2>Hours</h2>
                      <h3>4,465 hrs</h3>
                    </div>
                  </>
                  <>
                    <div className="alpha-detail_page-hours_view_divider" />
                    <div className="alpha-detail_page-hours_top_view" >
                      <img src={sNumber} />
                      <h2>Serial number</h2>
                      <h3>JEE0139930</h3>
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
                <h3>Enclosed Cab, Air Conditioner, Air Ride Seat, 2005 US EPA Label, Auxiliary Hydraulics, Hydraulic Coupler, 104 in Bucket, 20.5R25 Tires, 48 in Forks</h3>
              </div>
              <div className="alpha-detail_page-detailed_info_feature_text_top_view">
                <h2>Usage:</h2>
                <h3>Not Available</h3>
              </div>
              <div className="alpha-detail_page-detailed_info_feature_text_top_view">
                <h2>Catalogue Notes:</h2>
                <h3>Sed iaculis ut lorem et interdum. Sed eu interdum dui, ac consectetur purus. Sed ac leo tincidunt, vestibulum augue in, viverra elit. Vivamus tristique, leo interdum fermentum ultrices, sem quam varius tellus</h3>
              </div>
            </div>
            {featuresArray.filter((item) => item.show).map((item, index) => {
              return (
                <div key={index}>
                  <div className="alpha-detail_page-detailed_info_divider" />
                  <div className="alpha-detail_page-features_top_view">
                    <div className="alpha-detail_page-features_title_view">
                      <h2>{item.title}</h2>
                      <img src={images} />
                      <h3>7 Photos</h3>
                    </div>
                    <div className="alpha-detail_page-features_images_top_view">
                      <div className="alpha-detail_page-features_images_view" >
                        {item.images.map((data, index) => {
                          return (
                            <img style={{ marginRight: index === item.images.length - 1 ? -20 : 20 }} key={data} src={data} />
                          )
                        })}
                      </div>
                      <div className="alpha-detail_page-features_images_next_view" >
                        <img src={nextDoubleArrow} />
                      </div>
                    </div>
                    {item.extraData &&
                      <div>
                        <div className="alpha-detail_page-detailed_info_feature_text_top_view">
                          <h2>Serial Number:</h2>
                          <h3>72846837978256375</h3>
                        </div>
                        <div className="alpha-detail_page-detailed_info_feature_text_top_view">
                          <h2>Hour Meter:</h2>
                          <h3>Sed iaculis ut lorem et interdum. Sed eu interdum dui, ac consectetur purus. Sed ac leo tincidunt, vestibulum augue in, viverra elit. Vivamus tristique, leo interdum fermentum ultrices, sem quam varius tellus</h3>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              )
            })}
          </div>
          {state?.screen === 'auction' ?
            <div className="alpha_detail_page_price_top_view">
              <div className="alpha_detail_page_price_view_header">
                <div onClick={() => setBidView(!bidView)} className="alpha_detail_page_price_view_header_item_info" style={{ backgroundColor: !bidView ? '#F18805' : 'white' }}>
                  <h2 className={!bidView ? "alpha_detail_page_price_view_header_item_info_text" : "alpha_detail_page_price_view_header_item_info_text_two"}>
                    Item Info
                  </h2>
                </div>
                <div onClick={() => setBidView(!bidView)} className="alpha_detail_page_price_view_header_item_info" style={{ borderTopRightRadius: 5, borderTopLeftRadius: 0, backgroundColor: bidView ? '#F18805' : 'white' }}>
                  <h2 className={bidView ? "alpha_detail_page_price_view_header_item_info_text" : "alpha_detail_page_price_view_header_item_info_text_two"}>
                    Bids (29 bids)
                  </h2>
                </div>
              </div>
              {!bidView ?
                <div>
                  <div className="alpha_detail_page_price_view_share_view">
                    <h2>High Bid</h2>
                    <img src={share} />
                  </div>
                  <h1>$82,000</h1>
                  <div onClick={() => setBidView(!bidView)} style={{ alignSelf: 'center', marginLeft: 20 }} className="alpha_detail_page_price_view_button_view">
                    <h2>Place Bid</h2>
                  </div>
                  <div className="alpha_detail_page_price_view_box_close_date_view">
                    <img src={clock} />
                    <h5>Closes:<span style={{ fontWeight: 700 }}> Dec 1, 5:05:30 AM</span></h5>
                  </div>
                  <div className="alpha_detail_page_price_view_location_view">
                    <img src={pinLocation} />
                    <h4>Timed Auction:<span style={{ color: '#005B99' }}> Australia National Unreserved Auction, AUS</span></h4>
                  </div>
                  <p>Donec non tristique ex. Maecenas malesuada, nulla efficitur eleifend rutrum, risus quam consectetur ante, non fringilla libero nisi nec lectus. Morbi lectus ex, ultrices eget lobortis ut, dignissim a tortor. Donec sodales ante mi, id laoreet magna sodales vitae. </p>

                </div>
                :
                <div>
                  <div className="alpha_detail_page_price_view_bid_list_view">
                    {bidsPriceArray.map((item) => {
                      return (
                        <div key={item.id} className="alpha_detail_page_price_view_bid_list_item_view">
                          <div>
                            <h2>{item.price}</h2>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <h3>Closes:<span style={{ fontWeight: 700 }}>Dec 1, 5:05:30 AM</span> </h3>
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
                  <div onClick={() => setPaymentModel(true)} className="alpha_detail_page_price_view_bid_list_button">
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
                <h2>{state?.screen === 'spareparts' ? 'Per day' : 'Price'}</h2>
                <img src={share} />
              </div>
              <h1>$82,000</h1>
              <div onClick={() => state?.screen === 'rented' ? setBookingModel(true) : setPaymentModel(true)} className="alpha_detail_page_price_view_button_view">
                <h2>{state?.screen === 'rented' ? 'Request For Rent' : 'Pay'}</h2>
              </div>
              {state?.screen === 'rented' &&
                <div className="alpha_detail_page_price_view_location_view">
                  <img src={pinLocation} />
                  <h4>Location:<span style={{ color: '#005B99' }}> Australia National Unreserved Auction, AUS</span></h4>
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
