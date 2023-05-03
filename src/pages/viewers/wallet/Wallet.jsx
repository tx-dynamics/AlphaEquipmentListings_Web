import React, { useState } from "react";
import { walletIcon } from "../../../assets/icons";
import { BlogView, ConnectCardModel, Footer, Loader, NavBar, } from "../../../components";
import './wallet.css'
import { store } from '../../../redux/store'
import { useSnackbar } from "react-simple-snackbar";
import { snakbarOptions } from "../../../globalData";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";

export default function Wallet() {
  const user = store.getState().userData.userData
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [isLoading, setIsLoading] = useState(false)
  const [connectCardModel, setConnectCardModel] = useState(false);
  const [cardActive, setCardActive] = useState(false);
  const [transationHistory, setTransactionHistory] = useState([])

  React.useEffect(() => {
    getWalletDetail()
  }, []);

  const getWalletDetail = async () => {
    setIsLoading(true)
    try {
      const endPoint = api.getWallet + `?userType=buyer`;
      await callApi(Method.GET, endPoint, null,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            setTransactionHistory(res?.data?.transactionHistory)
          }
          else {
            setIsLoading(false)
            showMessage(res?.message)
          }
        },
        err => {
          showMessage(err.message)
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="alpha-home_page-main_container">
      <BlogView />
      <NavBar />
      <Loader loading={isLoading} />
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
                  <h2>{user?.balance}<br />USD</h2>
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
            <div>
              <div className="alpha-wallet-transaction_history_top_view">
                <h1>Transaction History</h1>
                <div className="alpha-wallet-transaction_sub_title_top_view">
                  <h2>User Name</h2>
                  <h3>Amount</h3>
                  <h3>Day</h3>
                </div>
              </div>
              {transationHistory.map((item, index) => {
                return (
                  <div key={index}>
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
            {/* :
              <div className="alpha-wallet-button_view">
                <div onClick={() => setConnectCardModel(true)}>
                  <h3>Connect Card</h3>
                </div>
              </div>
            } */}
          </div>
        </div>
        <Footer />
      </div>
    </div>

  );
}
