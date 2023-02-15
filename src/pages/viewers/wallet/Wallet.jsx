import React, { useState } from "react";
import { walletIcon } from "../../../assets/icons";
import { BlogView, ConnectCardModel, Footer, NavBar, } from "../../../components";
import './wallet.css'

export default function Wallet() {
  const [connectCardModel, setConnectCardModel] = useState(false);
  const [cardActive, setCardActive] = useState(false);
  const transationArray = [
    {
      id: 1,
      name: 'User Name',
      amount: '500$',
      date: '20-11-2022'
    },
    {
      id: 2,
      name: 'User Name',
      amount: '500$',
      date: '20-11-2022'
    },
    {
      id: 3,
      name: 'User Name',
      amount: '500$',
      date: '20-11-2022'
    },
    {
      id: 4,
      name: 'User Name',
      amount: '500$',
      date: '20-11-2022'
    },
    {
      id: 5,
      name: 'User Name',
      amount: '500$',
      date: '20-11-2022'
    },
  ]

  return (
    <div className="alpha-home_page-main_container">
      <BlogView />
      <NavBar />
      {connectCardModel && <ConnectCardModel onClick={() => [setCardActive(true), setConnectCardModel(false)]} onClickClose={() => setConnectCardModel(false)} />}
      <div className="alpha_detail_page_container">
        <div className="alpha-profile_outer_container">
          <div className="alpha-wallet_top_container">
            <div className="alpha-wallet_heading_view">
              <h1>Online Wallet</h1>
              <p>We Lorem ipsum dolor amuet, conse ctetur adipi scing elit. Vivamus at bibendum ante.</p>
            </div>
            <div className="alpha-wallet-detail_top_view">
              <div className="alpha-wallet-detail_bg_image_view">
                <div className="alpha-wallet-detal_balance_view">
                  <div className="alpha-wallet-detail_connect_view">
                    <p>Connect</p>
                  </div>
                  <h1>Balance</h1>
                  <h2>3500<br />USD</h2>
                  <div className="alpha-wallet-detail_topup_top_view">
                    <div>
                      <h3>Top up</h3>
                    </div>
                    <h4>Withdraw</h4>
                  </div>
                </div>
                <div className="alpha-wallet-detal_wallet_icon_view">
                  <h2>Wallet</h2>
                  <img src={walletIcon} />
                </div>
              </div>
            </div>
            {cardActive ?
              <div>
                <div className="alpha-wallet-transaction_history_top_view">
                  <h1>Transaction History</h1>
                  <div className="alpha-wallet-transaction_sub_title_top_view">
                    <h2>User Name</h2>
                    <h3>Amount</h3>
                    <h3>Day</h3>
                  </div>
                </div>
                {transationArray.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="alpha-wallet-transaction_history_view">
                        <h2>{item.id}-</h2>
                        <h3>{item.name}</h3>
                        <h4>{item.amount}</h4>
                        <h4>{item.date}</h4>
                      </div>
                      <div className="alpha-wallet-transation_divider" />
                    </div>
                  )
                })}
              </div>
              :
              <div className="alpha-wallet-button_view">
                <div onClick={() => setConnectCardModel(true)}>
                  <h3>Connect Card</h3>
                </div>
              </div>
            }
          </div>
        </div>
        <Footer />
      </div>
    </div>

  );
}
