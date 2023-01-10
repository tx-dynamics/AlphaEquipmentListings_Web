import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { arrowDown, arrowDownBlack, close, distance, drawerIcon, dummyFour, menu, search, searchWhite } from "../../../assets/icons";
import { BlogView, DashboardCategoriesView, Footer, NavBar } from "../../../components";
import './productListingPage.css'

export default function ProductListingPage() {
  const navigate = useNavigate()
  const [value, setValue] = useState(-1000)
  const filterItemArray = [
    {
      id: 1,
      title: 'Region',
      count: ' (142)'
    },
    {
      id: 2,
      title: 'Type',
      count: ' (142)'
    },
    {
      id: 3,
      title: 'Auction',
      count: ' (123)'
    },
    {
      id: 4,
      title: 'Make',
      count: ' (123)'
    },
    {
      id: 5,
      title: 'Model',
      count: ' (123)'
    },
    {
      id: 6,
      title: 'Year',
      count: ' (123)'
    },
    {
      id: 7,
      title: 'Price',
      count: ' (123)'
    },
    {
      id: 8,
      title: 'Services',
      count: ' (123)'
    },

  ]

  const productsArray = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },

  ]

  return (
    <div className="alpha-pro_list_page-main_container">
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
                <h2>Tamder Roller</h2>
              </div>
              <h3>Showing 346 results for</h3>
            </div>
            <div className="alpha-pro_list_page_divider" />
            {productsArray.map((item, index) => {
              return (
                <div key={index} onClick={() => navigate('/productdetailpage')}>
                  <div className="alpha-pro_list_page_item_view">
                    <div className="alpha-pro_list_page_item_image_view">
                      <img src={dummyFour} />
                    </div>
                    <div className="alpha-pro_list_page_item_detail_view">
                      <h1>2016 Wacker Neuson RD12A Double Drum Roller</h1>
                      <h2>Location: <span style={{ fontWeight: 500 }}>Lorem ipsum dolor sit amet ipsum dolor sit</span></h2>
                      <div className="alpha-pro_list_page-dis_and_km_top_view">
                        <div className="alpha-pro_list_page-dis_view">
                          <h3>Hours Meter: 300h</h3>
                        </div>
                        <div className="alpha-pro_list_page-dis_view">
                          <img src={distance} />
                          <h4>4.3 km</h4>
                        </div>
                      </div>
                      <h5>Catalogue Notes: <span style={{ fontWeight: 400 }}>Lorem ipsum dolor amuet, conse ctetur adipi scing elit. Vivamus at bibendum ante</span></h5>
                      <p>Price: $8600</p>
                    </div>
                  </div>
                  <div className="alpha-pro_list_page_divider" />
                </div>
              )
            })}
            <div className="alpha-pro_list_page_see_all_view">
              <div>
                <h2>See All 14606 Items</h2>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
