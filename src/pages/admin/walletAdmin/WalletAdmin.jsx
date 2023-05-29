import React from "react";
import { useState } from "react";
import { CashWithdrawModel, Loader, OtpModel, SideBar, SubmitModel, TopBar } from "../../../components";
import './walletAdmin.css'
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import { useSnackbar } from "react-simple-snackbar";
import { snakbarOptions } from "../../../globalData";
import { dotedTick } from "../../../assets/icons";
import { store } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { userData } from "../../../redux/Slices/userDataSlice";

export default function WalletAdmin() {
  const dispatch = useDispatch()
  const [showModel, setShowModel] = useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [transactionHistory, setTransactionHistory] = React.useState([])
  const [balance, setBalance] = React.useState(0)
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const user = store.getState().userData.userData

  const [withdrawModel, setWithdrawModel] = useState(false)
  const [connectCardModel, setConnectCardModel] = useState(false);
  const [cardActive, setCardActive] = useState(false);
  const [accountData, setAccountData] = useState()
  const [otpModel, setOtpModel] = useState(false)
  const [successfullModel, setSuccessfullModel] = useState(false)
  const [topupData, setTopUpData] = useState()
  const [typeWithdrawel, setTypeWithdrawel] = useState(true)

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

  React.useEffect(() => {
    getWalletDetail()
  }, []);


  const getWalletDetail = async (value) => {
    setIsLoading(true)
    try {
      const endPoint = api.getWallet + `?userType=seller`;
      await callApi(Method.GET, endPoint, null,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            setBalance(res?.data?.user?.balance)
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

  const onPressConfirmOtp = async (otp) => {
    setOtpModel(false)
    try {
      setIsLoading(true);
      const endPoint = api.withdrawalWallet;

      const data = {
        otp: otp,
        amount: accountData?.amount,
        accountNumber: accountData?.accountNumber,
        accountName: accountData?.accountName,
        branchNumber: accountData?.branchNumber
      };

      await callApi(Method.POST, endPoint, data,
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
    <div className="alpha-dashboard-main_container">
      <SideBar />
      <Loader loading={isLoading} />
      {withdrawModel && <CashWithdrawModel onClick={(data) => [setAccountData(data), verifyDetail(data)]} onClickClose={() => setWithdrawModel(false)} />}
      {otpModel && <OtpModel onClick={(data) => onPressConfirmOtp(data)} onClickClose={() => [setOtpModel(false)]} />}
      {successfullModel && <SubmitModel onClick={() => [getWalletDetail(), setSuccessfullModel(false)]} icon={dotedTick} button title={'Congratulations!'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis fringilla eros, sit amet auctor justo accumsan et.'} />}

      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-wallet_admin_top_container">
            <h1>Wallet</h1>
            <div className="alpha-wallet_admin_total_bal_top_view">
              <div className="alpha-wallet_admin_total_bal_view">
                <h2>Total Balance:</h2>
                <h3>${balance}</h3>
              </div>
              <div onClick={() => setWithdrawModel(true)} className="alpha-wallet_admin_cash_with_button">
                <h2>Cash Withdrawal</h2>
              </div>
            </div>
            <p>Payment History</p>
            {transactionHistory?.length > 0 ?
              <div className="alpha_payment_history_table_view" style={{ overflowX: 'hidden' }}>
                <table>
                  <thead>
                    <tr>
                      <th scope="col" ></th>
                      <th scope="col">User Name</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Day</th>
                      <th scope="col">Product</th>
                    </tr>
                  </thead>
                  <tbody >

                    {transactionHistory?.map((item, index) => {
                      const date = new Date(item?.createdAt)
                      return (
                        <tr key={index}>
                          <td data-label={'Id'} className="alpha_payment_history_padding_left alpha_wallet_id_style" >{index + 1}-</td>
                          <td data-label={'User Name'}>{item?.seller?.name}</td>
                          <td style={{ color: item?.positive === false ? '#FF0000' : '#11D80D' }} data-label={'Amount'}>{item?.positive === false ? '-' : ''} ${item.amount}</td>
                          <td data-label={'Day'} >{item?.createdAt ? date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() : ''}</td>
                          {item?.product?._id ?
                            <td data-label={'Product'} >{item?.product?.productName}</td>
                            :
                            <td data-label={'Product'} >{item?.isTopup === false ? 'Amount withdrawel' : 'Amount topup'}</td>
                          }
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
