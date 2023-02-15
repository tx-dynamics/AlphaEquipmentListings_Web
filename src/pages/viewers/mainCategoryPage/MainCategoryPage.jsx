import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { arrowDownBlack, close, menu, searchWhite } from "../../../assets/icons";
import { BlogView, DashboardCategoriesView, DashboardSparePartView, Footer, NavBar } from "../../../components";
import './mainCategoryPage.css'

export default function MainCategoryPage() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [value, setValue] = useState(-1000)
  const filterItemArray = [
    {
      id: 1,
      title: 'All Terrain Vehicles ',
      count: ' (142)'
    },
    {
      id: 2,
      title: 'Articulated Trucks',
      count: ' (142)'
    },
    {
      id: 3,
      title: 'Compactors',
      count: ' (123)'
    },
    {
      id: 4,
      title: 'Cranes',
      count: ' (123)'
    },
    {
      id: 5,
      title: 'Dozers',
      count: ' (123)'
    },
    {
      id: 6,
      title: 'Drills',
      count: ' (123)'
    },
    {
      id: 7,
      title: 'Excavators',
      count: ' (123)'
    },
    {
      id: 8,
      title: 'Front Shovels',
      count: ' (123)'
    },
    {
      id: 9,
      title: 'Generator Sets',
      count: ' (123)'
    },
    {
      id: 10,
      title: 'Horizontal Drilling',
      count: ' (123)'
    },
    {
      id: 11,
      title: 'Loader Backhoes',
      count: ' (123)'
    },
    {
      id: 12,
      title: 'Loaders',
      count: ' (123)'
    },
    {
      id: 13,
      title: 'Motor Graders',
      count: ' (123)'
    },
    {
      id: 14,
      title: 'Parts or Inoperable',
      count: ' (123)'
    },
    {
      id: 15,
      title: 'Power Vans',
      count: ' (123)'
    },
    {
      id: 16,
      title: 'Forestry Vehicles',
      count: ' (123)'
    },
    {
      id: 17,
      title: 'Earth Moving',
      count: ' (23)'
    },
  ]
  const filterItemArrayTwo = [
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

  const categoriesArray = [
    {
      id: 1,
      title: 'Transport Truck',
      count: '(1352)'
    },
    {
      id: 2,
      title: 'Agriculture',
      count: '(1352)'
    },
    {
      id: 3,
      title: 'Agriculture',
      count: '(1352)'
    },
    {
      id: 4,
      title: 'Construction',
      count: '(1352)'
    },
    {
      id: 5,
      title: 'Lifting Material',
      count: '(1352)'
    },
    {
      id: 6,
      title: 'Forestry Vehicles',
      count: '(1352)'
    },
    {
      id: 7,
      title: 'Earth Moving',
      count: '(1352)'
    },
    {
      id: 8,
      title: 'Agriculture',
      count: '(1352)'
    },
    {
      id: 9,
      title: 'Forestry Vehicles',
      count: '(1352)'
    },

  ]

  return (
    <div className="alpha-home_page-main_container">
      <BlogView />
      <NavBar />
      <div className="alpha-home_page-container">
        <div className="alpha-main_cat_page_top_container">
          {state?.screen === 'spareparts' ?
            <div className={"alpha-pro_list_page_filter_top_view"}>
              <div className="alpha-main_cat_page_filter_title_view">
                <h1>Filters</h1>
              </div>
              <div className="alpha-pro_list_page_filter_and_items_view">
                {filterItemArrayTwo.map((item, index) => {
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
            :
            <div className={"alpha-main_cat_page_filter_top_view"}>
              <div className="alpha-main_cat_page_filter_title_view">
                <h1>CONSTRUCTION</h1>
              </div>
              <div className="alpha-main_cat_page_filter_and_items_view">
                {filterItemArray.map((item, index) => {
                  return (
                    <div key={index} className="alpha-main_cat_page_filter_items_top_view">
                      <div className="alpha-main_cat_page_filter_items_view">
                        <h2 >{item.title}</h2>&nbsp;&nbsp;
                        <h3>{item.count}</h3>
                      </div>
                      <div className="alpha-main_cat_page_filter_item_divider" />
                    </div>
                  )
                })}
              </div>
            </div>
          }
          <div className="alpha-main_cat_page_item_top_view" style={{ marginLeft: state?.screen === 'spareparts' && 0 }}>
            {state?.screen === 'spareparts' ?
              <div className="alpha-main_cat_page_drawer_top_view" style={{ left: value }}>
                <div className="alpha-main_cat_page_filter_title_view">
                  <div className='alpha-drawer_close_icon' >
                    <img src={close} onClick={() => setValue(-1000)} />
                  </div>
                  <h1>Filters</h1>
                </div>
                <div className="alpha-pro_list_page_filter_and_items_view">
                  {filterItemArrayTwo.map((item, index) => {
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
              </div> :
              <div className="alpha-main_cat_page_drawer_top_view" style={{ left: value }}>
                <div className="alpha-main_cat_page_filter_title_view">
                  <div className='alpha-drawer_close_icon' >
                    <img src={close} onClick={() => setValue(-1000)} />
                  </div>
                  <h1>CONSTRUCTION</h1>
                </div>
                <div className="alpha-main_cat_page_filter_and_items_view">
                  {filterItemArray.map((item, index) => {
                    return (
                      <div key={index} className="alpha-main_cat_page_filter_items_top_view">
                        <div className="alpha-main_cat_page_filter_items_view">
                          <h2>{item.title}</h2>
                          <h3>{item.count}</h3>
                        </div>
                        <div className="alpha-main_cat_page_filter_item_divider" />
                      </div>
                    )
                  })}
                </div>
              </div>
            }
            <div className="alpha-main_cat_page_heading_and_search_view">
              <div className="alpha-main_cat_page_drawer_icon_view">
                <img src={menu} onClick={() => setValue(0)} />
                <h1>{state?.screen === 'spareparts' ? 'Spare Parts' : 'Top Category'}</h1>
              </div>
              <div className="alpha-main_cat_page_search_view">
                <input placeholder="Search  category" />
                <div>
                  <img src={searchWhite} />
                </div>
              </div>
            </div>
            <div className="alpha-main_cat_page_items_top_view">
              {categoriesArray.map((item, index) => {
                return (
                  state?.screen === 'spareparts' ?
                    <DashboardSparePartView onClick={() => navigate('/productdetailpage', { state: { screen: state?.screen } })} style={{ width: 270 }} index={index} />
                    :
                    <DashboardCategoriesView onClick={() => navigate('/productlistingpage', { state: { screen: state?.screen } })} titleStyle={{ fontSize: 18 }} containerStyle={{ width: 264, height: 256, marginRight: 30, marginBottom: 30 }} item={item} index={index} />
                )
              })}
            </div>
            <div className="alpha-main_cat_page_see_all_view">
              <div>
                <h2>See All 14606 Items</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="alpha-main_cat_page_description_top_view">
          <h1>About Alpha Equipment Listings.</h1>
          <h2>Construction Equipment That You Can Trust</h2>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia, augue nec imperdiet condimentum, est elit viverra ante, quis tincidunt ante ipsum in dui. Integer posuere, ipsum sed consequat suscipit, risus sem scelerisque odio, vehicula laoreet purus arcu at neque. Etiam varius enim eu tempor feugiat. Nulla facilisi. Donec rhoncus tortor ut dapibus mollis. Sed eu sem neque. Suspendisse ac pulvinar sem, sed pulvinar nunc. In quis dui id tellus malesuada consequat nec quis tellus. Ut consectetur elit orci, non dignissim lectus malesuada nec. Phasellus congue rhoncus mi, ut pellentesque tortor sollicitudin eu.</h4>
          <h2>What type of used heavy equipment do we carry?</h2>
          <h3>Small Construction Equipment</h3>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia, augue nec imperdiet condimentum, est elit viverra ante, quis tincidunt ante ipsum in dui. Integer posuere, ipsum sed consequat suscipit, risus sem scelerisque odio, vehicula laoreet purus arcu at neque. Etiam varius enim eu tempor feugiat. Nulla facilisi. Donec rhoncus tortor ut dapibus mollis. Sed eu sem neque. Suspendisse ac pulvinar sem, sed pulvinar nunc. In quis dui id tellus malesuada consequat nec quis tellus. Ut consectetur elit orci, non dignissim lectus malesuada nec. Phasellus congue rhoncus mi, ut pellentesque tortor sollicitudin eu.</h4>
          <h3>Heavy Construction Equipment</h3>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia, augue nec imperdiet condimentum, est elit viverra ante, quis tincidunt ante ipsum in dui. Integer posuere, ipsum sed consequat suscipit, risus sem scelerisque odio, vehicula laoreet purus arcu at neque. Etiam varius enim eu tempor feugiat. Nulla facilisi. Donec rhoncus tortor ut dapibus mollis. Sed eu sem neque. Suspendisse ac pulvinar sem, sed pulvinar nunc. In quis dui id tellus malesuada consequat nec quis tellus. Ut consectetur elit orci, non dignissim lectus malesuada nec. Phasellus congue rhoncus mi, ut pellentesque tortor sollicitudin eu.</h4>
          <h3>Industrial Support</h3>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia, augue nec imperdiet condimentum, est elit viverra ante, quis tincidunt ante ipsum in dui. Integer posuere, ipsum sed consequat suscipit, risus sem scelerisque odio, vehicula laoreet purus arcu at neque. Etiam varius enim eu tempor feugiat. Nulla facilisi. Donec rhoncus tortor ut dapibus mollis. Sed eu sem neque. Suspendisse ac pulvinar sem, sed pulvinar nunc. In quis dui id tellus malesuada consequat nec quis tellus. Ut consectetur elit orci, non dignissim lectus malesuada nec. Phasellus congue rhoncus mi, ut pellentesque tortor sollicitudin eu.</h4>
        </div>
        <Footer />
      </div>
    </div>
  );
}
