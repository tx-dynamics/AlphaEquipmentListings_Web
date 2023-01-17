import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { landingPageBanner } from '../../../assets/icons'
import { BlogView, ConnectCardModel, DashboardAuctionView, DashboardCategoriesView, DashboardSparePartView, Footer, MembershipModel, NavBar, OtpModel, PaymentModel } from "../../../components";
import { activeTab } from "../../../redux/activeTabSlice";
import './homePage.css'

export default function HomePage() {
  const navigate = useNavigate()
  const disPatch = useDispatch();

  const [membershipModel, setMembershipModel] = useState(true)
  const [chargesView, setChargesView] = useState(false)
  const [paymentModel, setPaymentModel] = useState(false)
  const [connectCard, setConnectCard] = useState(false)
  const [otpModel, setOtpModel] = useState(false)

  const auctionArray = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
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
  ]
  const sparePartsArray = [
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
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
    },
  ]

  return (
    <div className="alpha-home_page-main_container">
      <BlogView />
      <NavBar />
      {otpModel && <OtpModel onClick={() => setOtpModel(false)} onClickClose={() => [setOtpModel(false)]} />}
      {connectCard && <ConnectCardModel onClick={() => [setOtpModel(true), setConnectCard(false)]} onClickClose={() => [setConnectCard(false)]} />}
      {paymentModel && <PaymentModel onClickClose={() => setPaymentModel(false)} onClick={(value) => value.id === 1 ? [setPaymentModel(false), setOtpModel(true)] : value.id === 2 ? [setConnectCard(true), setPaymentModel(false)] : value.id === 3 ? [setPaymentModel(false), [navigate('/financing', 'financing'), disPatch(activeTab('financing'))]] : setPaymentModel(false)} />}
      {membershipModel && <MembershipModel chargesView={chargesView} onClickClose={() => setMembershipModel(false)} onClick={() => !chargesView ? setChargesView(true) : [setPaymentModel(true), setMembershipModel(false)]} />}
      <div className="alpha-home_page-container">
        <img src={landingPageBanner} alt={'Banner'} />
        <div className="alpha-home_page-auction_top_view">
          <div className="alpha-home_page-auction_heading_view">
            <h2>Auction</h2>
            <div>
              <h3>View All</h3>
            </div>
          </div>
          <div className="alpha_home-page-grid_view">
            {auctionArray.map((item, index) => {
              return (
                <DashboardAuctionView type={1} index={index} />
              )
            })}
          </div>
        </div>

        <div className="alpha-home_page-auction_top_view">
          <div className="alpha-home_page-auction_heading_view">
            <h2>Categories</h2>
            <div>
              <h3>View All</h3>
            </div>
          </div>
          <div className="alpha_home-page-grid_view_categories">
            {categoriesArray.map((item, index) => {
              return (
                <DashboardCategoriesView item={item} index={index} />
              )
            })}
          </div>
        </div>

        <div className="alpha-home_page-auction_top_view">
          <div className="alpha-home_page-auction_heading_view">
            <h2>Spare Parts</h2>
            <div>
              <h3>View All</h3>
            </div>
          </div>
          <div className="alpha_home-page-grid_view_categories">
            {sparePartsArray.map((item, index) => {
              return (
                <DashboardSparePartView index={index} />
              )
            })}
          </div>
        </div>

        <div className="alpha-home_page-auction_top_view">
          <div className="alpha-home_page-auction_heading_view">
            <h2>Rented Machinery</h2>
            <div>
              <h3>View All</h3>
            </div>
          </div>
          <div className="alpha_home-page-grid_view">
            {auctionArray.map((item, index) => {
              return (
                <DashboardAuctionView type={2} index={index} />
              )
            })}
          </div>
        </div>

        <Footer />

      </div>
    </div>
  );
}
