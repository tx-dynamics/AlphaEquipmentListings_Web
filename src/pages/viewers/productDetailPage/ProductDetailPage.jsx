import React, { useState } from "react";
import { arrowDown, arrowDownBlack, close, distance, drawerIcon, dummyFour, dummyOne, dummyThree, dummyTwo, images, flag, hour, menu, pinLocation, search, searchWhite, sNumber, nextDoubleArrow, share } from "../../../assets/icons";
import { BlogView, DashboardCategoriesView, Footer, NavBar } from "../../../components";
import './productDetailPage.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProductDetailPage() {
  const imageArray = [
    dummyFour, dummyOne, dummyThree
  ];
  const featuresArray = [
    {
      id: 1,
      title: 'General Appearanceine',
      images: [dummyFour, dummyOne, dummyThree, dummyFour, dummyOne,],
      extraData: true
    },
    {
      id: 2,
      title: 'Engine',
      images: [dummyFour, dummyOne, dummyThree, dummyFour, dummyOne,],
      extraData: false
    },
    {
      id: 3,
      title: 'Drivetrain',
      images: [dummyFour, dummyOne, dummyThree, dummyFour, dummyOne,],
      extraData: false
    },
    {
      id: 4,
      title: 'Control Station',
      images: [dummyFour, dummyOne, dummyThree, dummyFour, dummyOne,],
      extraData: false
    },
    {
      id: 5,
      title: 'Body Configuration',
      images: [dummyFour, dummyOne, dummyThree, dummyFour, dummyOne,],
      extraData: false
    },
    {
      id: 6,
      title: 'Undercarriage',
      images: [dummyFour, dummyOne, dummyThree, dummyFour, dummyOne,],
      extraData: false
    }
  ]
  return (
    <div className="alpha-pro_list_page-main_container">
      <BlogView />
      <NavBar />
      <div className="alpha_detail_page_container">
        <div className="alpha_image_slider_top_view">
          <Slide transitionDuration={300} infinite={false}>
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
              <div className="alpha-detail_page-hours_view_divider" />
              <div className="alpha-detail_page-hours_top_view" >
                <img src={hour} />
                <h2>Hours</h2>
                <h3>4,465 hrs</h3>
              </div>
              <div className="alpha-detail_page-hours_view_divider" />
              <div className="alpha-detail_page-hours_top_view" >
                <img src={sNumber} />
                <h2>Serial number</h2>
                <h3>JEE0139930</h3>
              </div>
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
            {featuresArray.map((item, index) => {
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
                        {item.images.map((item) => {
                          return (
                            <img key={item} src={item} />
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
          <div className="alpha_detail_page_price_top_view">
            <div className="alpha_detail_page_price_view_title_view">
              <h2>Item Info</h2>
            </div>
            <div className="alpha_detail_page_price_view_share_view">
              <h2>Price</h2>
              <img src={share} />
            </div>
            <h1>$82,000</h1>
            <div className="alpha_detail_page_price_view_button_view">
              <h2>Pay</h2>
            </div>
            <p>Donec non tristique ex. Maecenas malesuada, nulla efficitur eleifend rutrum, risus quam consectetur ante, non fringilla libero nisi nec lectus. Morbi lectus ex, ultrices eget lobortis ut, dignissim a tortor. Donec sodales ante mi, id laoreet magna sodales vitae. </p>
          </div>
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
