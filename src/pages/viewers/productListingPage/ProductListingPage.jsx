import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { arrowDown, arrowDownBlack, close, distance, drawerIcon, dummyFour, menu, search, searchWhite } from "../../../assets/icons";
import { BlogView, DashboardCategoriesView, Footer, NavBar } from "../../../components";
import './productListingPage.css'
import { diffBtwTwoDates, getDistanceFromLatLonInKm } from "../../../helpingMethods";
import { store } from "../../../redux/store";

export default function ProductListingPage() {
  const navigate = useNavigate()
  const [value, setValue] = useState(-1000)
  const { state } = useLocation();

  const filterItemArray = [
    {
      id: 1,
      title: 'Region',
    },
    {
      id: 2,
      title: 'Type',
    },
    {
      id: 3,
      title: 'Auction',
    },
    {
      id: 4,
      title: 'Make',
    },
    {
      id: 5,
      title: 'Model',
    },
    {
      id: 6,
      title: 'Year',
    },
    {
      id: 7,
      title: 'Price',
    },
    {
      id: 8,
      title: 'Services',
    },

  ]


  return (
    < div className="alpha-pro_list_page-main_container" >
      <BlogView />
      <NavBar />
      <div className="alpha-home_page-container">
        <div className="alpha-pro_list_page_top_container">
          <div className={"alpha-pro_list_page_filter_top_view"}>
            <div className="alpha-main_cat_page_filter_title_view">
              <h1>Filters</h1>
            </div>
            <div className="alpha-pro_list_page_filter_and_items_view">
              {filterItemArray.map((item, index) => {
                return (
                  <div key={index} className="alpha-main_cat_page_filter_items_top_view">
                    <div className="alpha-pro_list_page_filter_items_view">
                      <h2>{item.title}</h2>
                      <img src={arrowDownBlack} />
                    </div>
                    <div className="alpha-main_cat_page_filter_item_divider" />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="alpha-pro_list_page_item_top_view" >
            <div className="alpha-main_cat_page_drawer_top_view" style={{ left: value }}>
              <div className="alpha-main_cat_page_filter_title_view">
                <div className='alpha-drawer_close_icon' >
                  <img src={close} onClick={() => setValue(-1000)} />
                </div>
                <h1>Filters</h1>
              </div>
              <div className="alpha-pro_list_page_filter_and_items_view">
                {filterItemArray.map((item, index) => {
                  return (
                    <div key={index} className="alpha-main_cat_page_filter_items_top_view">
                      <div className="alpha-pro_list_page_filter_items_view">
                        <h2>{item.title}</h2>
                        <img src={arrowDownBlack} />
                      </div>
                      <div className="alpha-main_cat_page_filter_item_divider" />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="alpha-pro_list_page_heading_and_search_view">
              <div className="alpha-pro_list_page_drawer_icon_view">
                <img src={menu} onClick={() => setValue(0)} />
                <h2>{state?.screen === 'auction' ? 'Auction' : `Products`}</h2>
              </div>
              <h3>Showing results for</h3>
            </div>
            <div className="alpha-pro_list_page_divider" />
            {state?.screen == 'category' ?
              (state?.data?.products?.map((item, index) => {
                const timeDiff = diffBtwTwoDates(new Date(), new Date(item?.auctionEndDate)).includes('-')
                return (
                  <div key={index} onClick={() => navigate('/productdetailpage', { state: { screen: state?.screen, data: item } })}>
                    <div className="alpha-pro_list_page_item_view">
                      <div className="alpha-pro_list_page_item_image_view">
                        <img src={item?.images[0]} />
                      </div>
                      <div className="alpha-pro_list_page_item_detail_view">
                        <h1>{item?.productName}</h1>
                        <h2>Location: <span style={{ fontWeight: 500 }}>{item?.location?.address}</span></h2>
                        <div className="alpha-pro_list_page-dis_and_km_top_view">
                          <div className="alpha-pro_list_page-dis_view">
                            <h3>Mileage: {item?.Mileage}</h3>
                          </div>
                          <div className="alpha-pro_list_page-dis_view">
                            <img src={distance} />
                            <h4>{getDistanceFromLatLonInKm(item?.location?.coordinates[1], item?.location?.coordinates[0], store.getState().userData.userLocation.lat, store.getState().userData.userLocation.long)} km</h4>
                          </div>
                        </div>
                        <h5>Catalogue Notes: <span style={{ fontWeight: 400 }}>{item?.catelougeNote}</span></h5>
                        <div className="alpha-home-page-spare_part_price_distance_view">
                          <p>{item?.select === 'Auction' ? 'Online Auction' : `Price: $${item?.price}`}</p>
                          {item?.select === 'Auction' &&
                            (timeDiff ?
                              <h6><span style={{ fontWeight: 700 }}>Autcion Expired</span></h6>
                              :
                              <h6>Highest Bid:<span style={{ fontWeight: 700 }}> ${item?.highestBid?.amount} </span></h6>

                            )
                          }
                        </div>
                      </div>
                    </div>
                    <div className="alpha-pro_list_page_divider" />
                  </div>
                )
              }))
              :
              (state?.data?.map((item, index) => {
                const timeDiff = diffBtwTwoDates(new Date(), new Date(item?.auctionEndDate)).includes('-')
                return (
                  <div key={index} onClick={() => navigate('/productdetailpage', { state: { screen: state?.screen, data: item } })}>
                    <div className="alpha-pro_list_page_item_view">
                      <div className="alpha-pro_list_page_item_image_view">
                        <img src={item?.images[0]} />
                      </div>
                      <div className="alpha-pro_list_page_item_detail_view">
                        <h1>{item?.productName}</h1>
                        <h2>Location: <span style={{ fontWeight: 500 }}>{item?.location?.address}</span></h2>
                        <div className="alpha-pro_list_page-dis_and_km_top_view">
                          <div className="alpha-pro_list_page-dis_view">
                            <h3>Mileage: {item?.Mileage}</h3>
                          </div>
                          <div className="alpha-pro_list_page-dis_view">
                            <img src={distance} />
                            <h4>{getDistanceFromLatLonInKm(item?.location?.coordinates[1], item?.location?.coordinates[0], store.getState().userData.userLocation.lat, store.getState().userData.userLocation.long)} km</h4>
                          </div>
                        </div>
                        <h5>Catalogue Notes: <span style={{ fontWeight: 400 }}>{item?.catelougeNote}</span></h5>
                        <div className="alpha-home-page-spare_part_price_distance_view">
                          <p>{item?.select === 'Auction' ? 'Online Auction' : `Price: $${item?.price}`}</p>
                          {item?.select === 'Auction' &&
                            (timeDiff ?
                              <h6><span style={{ fontWeight: 700 }}>Autcion Expired</span></h6>
                              :
                              <h6>Highest Bid:<span style={{ fontWeight: 700 }}> ${item?.highestBid?.amount} </span></h6>

                            )
                          }
                        </div>
                      </div>
                    </div>
                    <div className="alpha-pro_list_page_divider" />
                  </div>
                )
              }))
            }
            {/* <div className="alpha-pro_list_page_see_all_view">
              <div>
                <h2>See All 14606 Items</h2>
              </div>
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    </div >
  );
}
