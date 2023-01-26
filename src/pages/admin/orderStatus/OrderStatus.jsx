import React from "react";
import { SearchViewTwo, SideBar, TopBar } from "../../../components";
import './orderStatus.css'
export default function OrderStatus() {
  const orderStatusArray = [
    {
      id: 1,
      buyerName: 'Aadam Gabriel',
      productName: '2016 Wacker Neuson RD12A Double Drum Roller',
      state: 'Pending',
      date: '20-11-2022',
    },
    {
      id: 2,
      buyerName: 'Robert',
      productName: 'Break Kits Truck TS20',
      state: 'Completed',
      date: '20-11-2022',
    },
    {
      id: 3,
      buyerName: 'Downey Gabriel',
      productName: 'Carry Deck Crane TS20',
      state: 'Pending',
      date: '20-11-2022',
    },
    {
      id: 4,
      buyerName: 'Aadam Gabriel',
      productName: 'Gantry Cranes & Lifts',
      state: 'Pending',
      date: '20-11-2022',
    },
    {
      id: 5,
      buyerName: 'Downey Gabriel',
      productName: 'Carry Deck Crane TS20',
      state: 'Completed',
      date: '20-11-2022',
    },
    {
      id: 6,
      buyerName: 'Robert',
      productName: 'Gantry Cranes & Lifts',
      state: 'Completed',
      date: '20-11-2022',
    },
    {
      id: 7,
      buyerName: 'Aadam Gabriel',
      productName: 'Carry Deck Crane TS20',
      state: 'Pending',
      date: '20-11-2022',
    },
    {
      id: 8,
      buyerName: 'Downey Gabriel',
      productName: 'Gantry Cranes & Lifts',
      state: 'Pending',
      date: '20-11-2022',
    },
  ]

  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-shop-title_view">
            <h1>Order Detail</h1>
            <SearchViewTwo />
            <div />
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-shop_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>

          {orderStatusArray.length > 0 ?
            <div className="alpha_payment_history_table_view" style={{ overflowX: 'hidden' }}>
              <table>
                <thead>
                  <tr>
                    <th scope="col" style={{ paddingLeft: 30 }}>Buyer Name</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">State</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody >

                  {orderStatusArray.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td data-label={'Buyer Name'} className="alpha_payment_history_padding_left" >{item.buyerName}</td>
                        <td data-label={'Product Name'} className={'alpha_my_shop_title_style'}>{item.productName}</td>
                        <td data-label={'State'} style={{ color: item.state === 'Completed' ? '#00AD50' : '#D20000' }}>{item.state}</td>
                        <td data-label={'Date'} >{item.date}</td>
                      </tr>
                    )
                  })}
                </tbody>

              </table>
            </div>
            :
            <div className="alpha-my_shop_empty_div">
              <h2>You don’t have any order status history.</h2>
            </div>
          }
        </div>
        <div style={{ marginBottom: 5 }} />
      </div>
    </div>
  );
}
