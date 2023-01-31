import React from "react";
import { useState } from "react";
import { CashWithdrawModel, SideBar, TopBar } from "../../../components";
import './walletAdmin.css'
export default function WalletAdmin() {
  const [showModel, setShowModel] = useState(false)
  const walletHistoryArray = [
    {
      id: 1,
      userName: 'Aadam Gabriel',
      amount: '200$',
      day: '20-11-2022',
      accountNumber: '78265376523635',
    },
    {
      id: 2,
      userName: 'Aadam Gabriel',
      amount: '200$',
      day: '20-11-2022',
      accountNumber: '78265376523635',
    },
    {
      id: 3,
      userName: 'Aadam Gabriel',
      amount: '200$',
      day: '20-11-2022',
      accountNumber: '78265376523635',
    },
    {
      id: 4,
      userName: 'Aadam Gabriel',
      amount: '200$',
      day: '20-11-2022',
      accountNumber: '78265376523635',
    },
    {
      id: 5,
      userName: 'Aadam Gabriel',
      amount: '200$',
      day: '20-11-2022',
      accountNumber: '78265376523635',
    },
    {
      id: 6,
      userName: 'Aadam Gabriel',
      amount: '200$',
      day: '20-11-2022',
      accountNumber: '78265376523635',
    },
    {
      id: 7,
      userName: 'Aadam Gabriel',
      amount: '200$',
      day: '20-11-2022',
      accountNumber: '78265376523635',
    },
    {
      id: 8,
      userName: 'Aadam Gabriel',
      amount: '200$',
      day: '20-11-2022',
      accountNumber: '78265376523635',
    },
  ]

  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      {showModel &&
        <CashWithdrawModel onClick={() => setShowModel(false)} onClickClose={() => setShowModel(false)} />
      }
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-wallet_admin_top_container">
            <h1>Wallet</h1>
            <div className="alpha-wallet_admin_total_bal_top_view">
              <div className="alpha-wallet_admin_total_bal_view">
                <h2>Total Balance:</h2>
                <h3>$24.4K</h3>
              </div>
              <div onClick={() => setShowModel(true)} className="alpha-wallet_admin_cash_with_button">
                <h2>Cash Withdrawal</h2>
              </div>
            </div>
            <p>Payment History</p>
            {walletHistoryArray.length > 0 ?
              <div className="alpha_payment_history_table_view" style={{ overflowX: 'hidden' }}>
                <table>
                  <thead>
                    <tr>
                      <th scope="col" ></th>
                      <th scope="col">User Name</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Day</th>
                      <th scope="col">Account Number</th>
                    </tr>
                  </thead>
                  <tbody >

                    {walletHistoryArray.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td data-label={'Id'} className="alpha_payment_history_padding_left alpha_wallet_id_style" >{item.id}-</td>
                          <td data-label={'User Name'}>{item.userName}</td>
                          <td data-label={'Amount'}>{item.amount}</td>
                          <td data-label={'Day'} >{item.day}</td>
                          <td data-label={'Account Number'} >{item.accountNumber}</td>
                        </tr>
                      )
                    })}
                  </tbody>

                </table>
              </div>
              :
              <div className="alpha-wallet_empty_div">
                <h2>You don’t have any transaction history.</h2>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
