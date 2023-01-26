import React from "react";
import { SearchViewTwo, SideBar, TopBar } from "../../../components";
import './paymentHistory.css'
export default function PaymentHistory() {
  const paymentHistoryArray = [
    {
      id: 1,
      buyerName: 'Aadam Gabriel',
      productName: '2016 Wacker Neuson RD12A Double Drum Roller',
      sale: 'Machine',
      date: '20-11-2022',
      payment: '200$',
      method: 'Wallet',
    },
    {
      id: 2,
      buyerName: 'Robert',
      productName: 'Break Kits Truck TS20',
      sale: 'Machine',
      date: '20-11-2022',
      payment: '200$',
      method: '-',
    },
    {
      id: 3,
      buyerName: 'Downey Gabriel',
      productName: 'Carry Deck Crane TS20',
      sale: 'Spare Parts',
      date: '20-11-2022',
      payment: '200$',
      method: 'Wallet',
    },
    {
      id: 4,
      buyerName: 'Aadam Gabriel',
      productName: 'Gantry Cranes & Lifts',
      sale: 'Machine',
      date: '20-11-2022',
      payment: '4000$',
      method: 'Wallet',
    },
    {
      id: 5,
      buyerName: 'Downey Gabriel',
      productName: 'Carry Deck Crane TS20',
      sale: 'Machine',
      date: '20-11-2022',
      payment: '200$',
      method: '-',
    },
    {
      id: 6,
      buyerName: 'Robert',
      productName: 'Gantry Cranes & Lifts',
      sale: 'Spare Parts',
      date: '20-11-2022',
      payment: '4000$',
      method: 'Wallet',
    },
    {
      id: 7,
      buyerName: 'Aadam Gabriel',
      productName: 'Carry Deck Crane TS20',
      sale: 'Machine',
      date: '20-11-2022',
      payment: '200$',
      method: 'Wallet',
    },
    {
      id: 8,
      buyerName: 'Downey Gabriel',
      productName: 'Gantry Cranes & Lifts',
      sale: 'Spare Parts',
      date: '19-11-2022',
      payment: '4000$',
      method: '-',
    },
  ]

  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-shop-title_view">
            <h1>Payment History</h1>
            <SearchViewTwo />
            <div />
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-shop_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>

          {paymentHistoryArray.length > 0 ?
            <div className="alpha_payment_history_table_view" style={{ overflowX: 'hidden' }}>
              <table>
                <thead>
                  <tr>
                    <th scope="col" style={{ paddingLeft: 30 }}>Buyer Name</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Sale</th>
                    <th scope="col">Date</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Method</th>
                  </tr>
                </thead>
                <tbody >

                  {paymentHistoryArray.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td data-label={'Buyer Name'} className="alpha_payment_history_padding_left" >{item.buyerName}</td>
                        <td data-label={'Product Name'} className={'alpha_my_shop_title_style'}>{item.productName}</td>
                        <td data-label={'Sale'}>{item.sale}</td>
                        <td data-label={'Date'} >{item.date}</td>
                        <td data-label={'Payment'} >{item.payment}</td>
                        <td data-label={'Method'} >{item.method}</td>
                      </tr>
                    )
                  })}
                </tbody>

              </table>
            </div>
            :
            <div className="alpha-my_shop_empty_div">
              <h2>You don’t have any payment history.</h2>
            </div>
          }
        </div>
        <div style={{ marginBottom: 5 }} />
      </div>
    </div>
  );
}
