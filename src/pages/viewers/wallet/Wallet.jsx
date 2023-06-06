import React, { useState } from "react";
import { dotedTick, walletIcon } from "../../../assets/icons";
import { BlogView, CashWithdrawModel, ConnectCardModel, Footer, Loader, NavBar, OtpModel, SubmitModel, TopUpModel, } from "../../../components";
import './wallet.css'
import { store } from '../../../redux/store'
import { useSnackbar } from "react-simple-snackbar";
import { snakbarOptions } from "../../../globalData";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import { userData } from "../../../redux/Slices/userDataSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Wallet() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = store.getState().userData.userData
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [isLoading, setIsLoading] = useState(false)
  const [withdrawModel, setWithdrawModel] = useState(false)
  const [connectCardModel, setConnectCardModel] = useState(false);
  const [cardActive, setCardActive] = useState(false);
  const [transationHistory, setTransactionHistory] = useState([])
  const [accountData, setAccountData] = useState()
  const [otpModel, setOtpModel] = useState(false)
  const [successfullModel, setSuccessfullModel] = useState(false)
  const [topupData, setTopUpData] = useState()
  const [typeWithdrawel, setTypeWithdrawel] = useState(true)

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
            dispatch(userData(res?.data?.user))
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

  const verifyDetail = async (data) => {
    setWithdrawModel(false)
    if (data?.amount < user?.balance) {
      try {
        setIsLoading(true);
        const endPoint = api.sendAgainSignupOtp
        const data = {
          email: store.getState().userData?.userData?.email,
        };
        await callApi(Method.POST, endPoint, data,
          res => {
            if (res?.status === 200) {
              setIsLoading(false)
              setOtpModel(true)
              setTypeWithdrawel(true)
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
    else {
      showMessage("You don't have sufficient balance to complete this transaction.")
    }

  };

  const verifyTopUpDetail = async () => {
    setConnectCardModel(false)
    try {
      setIsLoading(true);
      const endPoint = api.sendAgainSignupOtp
      const data = {
        email: store.getState().userData?.userData?.email,
      };
      await callApi(Method.POST, endPoint, data,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            setTypeWithdrawel(false)
            setOtpModel(true)
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
  };

  const onPressConfirmOtp = async (otp) => {
    setOtpModel(false)
    try {
      setIsLoading(true);
      const endPoint = typeWithdrawel ? api.withdrawalWallet : api.topupWallet;
      const card = {
        cardName: topupData?.cardName,
        cardNumber: topupData?.cardNumber,
        expiryDate: topupData?.expiryDate,
        cvv: topupData?.cvv,
      }
      const data = {
        otp: otp,
        amount: accountData?.amount,
        accountNumber: accountData?.accountNumber,
        accountName: accountData?.accountName,
        branchNumber: accountData?.branchNumber
      };
      const topupDataa = {
        otp: otp,
        amount: topupData?.amount,
        card: card
      }
      await callApi(Method.POST, endPoint, typeWithdrawel ? data : topupDataa,
        res => {
          if (res?.status === 200) {
            dispatch(userData(res?.data?.user))
            setIsLoading(false)
            setSuccessfullModel(true)
          }
          else {
            setIsLoading(false)
            showMessage(res?.message)
            setOtpModel(true)
          }
        },
        err => {
          showMessage(err.message)
          setIsLoading(false);
          setOtpModel(true)
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setOtpModel(true)
    }
  };


  return (
    <div className="alpha-home_page-main_container">
      <BlogView />

      <NavBar loaderValue={(data) => setIsLoading(data)} />
      <Loader loading={isLoading} />
      {connectCardModel && <TopUpModel onClick={(data) => [setTopUpData(data), verifyTopUpDetail()]} onClickClose={() => setConnectCardModel(false)} />}
      {withdrawModel && <CashWithdrawModel onClick={(data) => [setAccountData(data), verifyDetail(data)]} onClickClose={() => setWithdrawModel(false)} />}
      {otpModel && <OtpModel onClick={(data) => onPressConfirmOtp(data)} onClickClose={() => [setOtpModel(false)]} />}
      {successfullModel && <SubmitModel onClick={() => [getWalletDetail(), setSuccessfullModel(false)]} icon={dotedTick} button title={'Congratulations!'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis fringilla eros, sit amet auctor justo accumsan et.'} />}

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
                      <h3 onClick={() => setConnectCardModel(true)}>Top up</h3>
                    </div>
                    <h4 onClick={() => setWithdrawModel(true)}>Withdraw</h4>
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
              {transationHistory.length > 0 ?
                (transationHistory.map((item, index) => {
                  const date = new Date(item?.createdAt)
                  return (
                    <div key={index}>
                      <div className="alpha-wallet-transaction_history_view">
                        <h2>{index + 1}-</h2>
                        <h3>{item?.seller?.name}</h3>
                        <h4>{item?.positive === false ? '-' : ''}{item.amount}{'$'}</h4>
                        <h4>{item?.createdAt ? `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}` : ''}</h4>
                      </div>
                      <div className="alpha-wallet-transation_divider" />
                    </div>
                  )
                }))
                :
                <div className="alpha_home_page_no_data" style={{ paddingTop: 20 }}>
                  <h2>No transactions found</h2>
                </div>
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>

  );
}
