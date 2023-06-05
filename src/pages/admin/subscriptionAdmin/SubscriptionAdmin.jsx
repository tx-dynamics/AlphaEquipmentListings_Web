import React, { useEffect, useState } from "react";
import socketIO from "socket.io-client";

import { emoji, send, document, tickRound } from "../../../assets/icons";
import { ConnectCardModel, Loader, MembershipModel, OtpModel, SideBar, TopBar } from "../../../components";
import { store } from "../../../redux/store";
import { BASE_URL, api } from "../../../network/Environment";
import './subscriptionAdmin.css'
import { useSnackbar } from "react-simple-snackbar";
import { snakbarOptions } from "../../../globalData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Method, callApi } from "../../../network/NetworkManger";
import { userData } from "../../../redux/Slices/userDataSlice";

export default function SubscriptionAdmin() {
  const navigate = useNavigate()
  const disPatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const [plans, setPlans] = useState([])
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [selectedPlan, setSelectedPlan] = useState({ type: store.getState().userData.userData.subscriptionType })
  const [showModel, setShowModel] = useState(false)
  const [connectCard, setConnectCard] = useState(false)
  const [otpModel, setOtpModel] = useState(false)
  const [cardDetail, setCardDetail] = useState()
  const [selectedType, setSelectedType] = useState({})
  useEffect(() => {
    getAllSubscriptionPlans()
  }, [])
  const getAllSubscriptionPlans = async () => {
    setIsLoading(true)
    try {
      const endPoint = api.getSubscriptions;
      await callApi(Method.GET, endPoint, null,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            setPlans(res?.data?.types)
          }
          else {
            setIsLoading(false)
            showMessage(res?.message)
          }
        },
        err => {
          setIsLoading(false)
          showMessage(err.message)
        });
    } catch (error) {
      setIsLoading(false)
      console.log(error);
    }
  }

  const onPressContinue = (data) => {
    setSelectedType(data)
    setShowModel(false)
    if (selectedPlan.type === 'BASIC') {
      const user = Object.assign('', store.getState().userData.userData)
      user['subscriptionType'] = 'BASIC'
      disPatch(userData(user))
      showMessage('Successfully subscribed')
      navigate('/dashboard', { replace: true })
    }
    else {
      setConnectCard(true)
    }
  }


  const sendOtp = async (data) => {
    setCardDetail(data)
    setConnectCard(false)
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

  const onPressConfirmOtp = async (otp) => {
    setOtpModel(false)
    try {
      setIsLoading(true);
      const endPoint = api.subscription;
      const data = {
        otp: otp,
        subscriptionType: selectedPlan?.type?.toUpperCase(),
        yearly: selectedType === 2 ? true : false,
        card: cardDetail
      };
      await callApi(Method.POST, endPoint, data,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            disPatch(userData(res.data?.user));
            showMessage('Subscriptions subscribe successfully')
            navigate('/dashboard', { replace: true })
          }
          else {
            setOtpModel(true)
            setIsLoading(false)
            showMessage(res?.message)
          }
        },
        err => {
          setOtpModel(true)

          showMessage(err.message)
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      <Loader loading={isLoading} />
      {connectCard && <ConnectCardModel onClick={(data) => sendOtp(data)} onClickClose={() => [setConnectCard(false)]} />}
      {otpModel && <OtpModel onClick={(data) => onPressConfirmOtp(data)} onClickClose={() => [setOtpModel(false)]} />}
      {showModel && <MembershipModel onClick={(data) => onPressContinue(data)} onClickClose={() => setShowModel(false)} price1={selectedPlan?.pricing?.monthly} price2={selectedPlan?.pricing?.yearly} />}
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-chat_admin_top_container">
          {/* <div className="alpha-chat_admib_container"> */}
          <div className="alpha-home_page-container">
            <div className="alpha-subscription_page_top_container_admin">
              <h1>Unlock Your Membership</h1>
              <h2>Get access to biggest digital platform for heavy equipment or machinery </h2>
              <div className="alpha-subscription_page_item_top_view_admin">
                {plans?.length > 0 &&
                  (plans.map((item, index) => {
                    return (
                      <div style={{ backgroundColor: selectedPlan?.type === item?.type ? '#F18805' : 'white', borderWidth: 1, borderColor: selectedPlan?.type === item?.type ? 'white' : '#F18805' }} onClick={() => setSelectedPlan(item)} key={index} className="alpha-subscription_page_item_view_admin">
                        <div style={{ borderColor: selectedPlan?.type === item?.type ? 'white' : '#F18805' }} className="alpha-subscription_page_item_type_view_admin">
                          <h3 style={{ color: selectedPlan?.type === item?.type ? 'white' : '#F18805' }}>{item?.type}</h3>
                        </div>
                        <h4 style={{ color: selectedPlan?.type === item?.type ? 'white' : '#F18805' }}>${item?.pricing?.monthly}/${item?.pricing?.yearly}</h4>
                        <h5 style={{ color: selectedPlan?.type === item?.type ? 'white' : '#F18805' }}>Monthly/Yearly</h5>
                        {item?.points?.map((data) => {
                          return (
                            <div className="alpha-subscription_page_item_point_view_admin">
                              <img src={tickRound} />
                              <h6 style={{ color: selectedPlan?.type === item?.type ? 'white' : '#F18805' }}>{data}</h6>
                            </div>
                          )
                        })}
                      </div>
                    )
                  }))
                }
              </div>
              <div className="alpha-calculator-buttion_view">
                <div onClick={() => selectedPlan?.type ? setShowModel(true) : showMessage('Please choose plan first')}>
                  <h3>Continue</h3>
                </div>
              </div>
            </div>
          </div>
          {/* </div>  */}
        </div>
      </div>
    </div>
  );
}
