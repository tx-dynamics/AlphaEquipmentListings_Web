import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchViewTwo, SideBar, TopBar } from "../../../components";
import './auctionRequest.css'
export default function AuctionRequest() {
  const navigate = useNavigate()
  const auctionArray = [
    {
      id: 1,
      Product: '2016 Wacker Neuson RD12A',
      TotalBid: '12',
      HighestBid: '2300$',
      BidType: 'Auto Sell',
      LastDate: '25-11-2022',
      Action: 'View',
    },
    {
      id: 2,
      Product: '2016 Wacker Neuson RD12A',
      TotalBid: '12',
      HighestBid: '2300$',
      BidType: 'Auto Sell',
      LastDate: '25-11-2022',
      Action: 'View',
    },
    {
      id: 3,
      Product: '2016 Wacker Neuson RD12A',
      TotalBid: '12',
      HighestBid: '2300$',
      BidType: 'Auto Sell',
      LastDate: '25-11-2022',
      Action: 'View',
    },
    {
      id: 4,
      Product: '2016 Wacker Neuson RD12A',
      TotalBid: '12',
      HighestBid: '2300$',
      BidType: 'Auto Sell',
      LastDate: '25-11-2022',
      Action: 'View',
    },
    {
      id: 5,
      Product: '2016 Wacker Neuson RD12A',
      TotalBid: '12',
      HighestBid: '2300$',
      BidType: 'Auto Sell',
      LastDate: '25-11-2022',
      Action: 'View',
    },
    {
      id: 6,
      Product: '2016 Wacker Neuson RD12A',
      TotalBid: '12',
      HighestBid: '2300$',
      BidType: 'Auto Sell',
      LastDate: '25-11-2022',
      Action: 'View',
    },
    {
      id: 7,
      Product: '2016 Wacker Neuson RD12A',
      TotalBid: '12',
      HighestBid: '2300$',
      BidType: 'Auto Sell',
      LastDate: '25-11-2022',
      Action: 'View',
    },
    {
      id: 8,
      Product: '2016 Wacker Neuson RD12A',
      TotalBid: '12',
      HighestBid: '2300$',
      BidType: 'Auto Sell',
      LastDate: '25-11-2022',
      Action: 'View',
    },
  ]

  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-shop-title_view">
            <h1>Auction</h1>
            <SearchViewTwo />
            <div />
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-shop_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>

          {auctionArray.length > 0 ?
            <div className="alpha_payment_history_table_view" style={{ overflowX: 'hidden' }}>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Product</th>
                    <th>Total Bid</th>
                    <th>Highest Bid</th>
                    <th>Bid Type</th>
                    <th>Last Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody >
                  {auctionArray.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td data-label={''} style={{ paddingLeft: 20, }}>-{item.id}</td>
                        <td data-label={'Product'} className={'alpha_rent_req_title_style'}>{item.Product}</td>
                        <td data-label={'Total Bid'} >{item.TotalBid}</td>
                        <td data-label={'Highest Bid'} >{item.HighestBid}</td>
                        <td data-label={'Bid Type'} >{item.BidType}</td>
                        <td data-label={'Last Date'}  >{item.LastDate}</td>
                        <td onClick={() => navigate('/auctionrequestdetail')} style={{ color: '#4482FF', cursor: 'pointer' }} data-label={'Action'} >{item.Action}</td>
                      </tr>
                    )
                  })}
                </tbody>

              </table>
            </div>
            :
            <div className="alpha-my_shop_empty_div">
              <h2>You don’t have any rent requests.</h2>
            </div>
          }
        </div>
        <div style={{ marginBottom: 5 }} />
      </div>
    </div >
  );
}
