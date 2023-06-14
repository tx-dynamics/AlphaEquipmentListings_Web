import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tickRound } from "../../../assets/icons";
import { BlogView, ConnectCardModel, Footer, Loader, MembershipModel, NavBar, OtpModel } from "../../../components";
import { store } from "../../../redux/store";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import { useSnackbar } from "react-simple-snackbar";
import { snakbarOptions } from "../../../globalData";
import { useDispatch } from "react-redux";
import { userData } from "../../../redux/Slices/userDataSlice";
import './subscriptionPage.css'

export default function SubscriptionPage() {
  const navigate = useNavigate()
  const disPatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false)
  const [plans, setPlans] = useState([])
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [selectedPlan, setSelectedPlan] = useState(store.getState().userData.userData?.subscriptionObject)
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
      navigate('/', { replace: true })
    }
    else {
      sendOtp()
    }
  }


  const sendOtp = async (data) => {
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
      const endPoint = api.verifyOtp;
      const data = {
        otp: otp,
      };
      await callApi(Method.POST, endPoint, data,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            setConnectCard(true)
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
  const onPressConnect = async (value) => {
    setConnectCard(false)
    try {
      setIsLoading(true);
      const endPoint = api.subscription;
      const data = {
        subscriptionType: selectedPlan?.type?.toUpperCase(),
        yearly: selectedType === 2 ? true : false,
        card: value
      };
      console.log(data);
      await callApi(Method.POST, endPoint, data,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            disPatch(userData(res.data?.user));
            showMessage('Subscriptions subscribe successfully')
            navigate('/', { replace: true })
          }
          else {
            setConnectCard(true)
            setIsLoading(false)
            showMessage(res?.message)
          }
        },
        err => {
          setConnectCard(true)

          showMessage(err.message)
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    < div className="alpha-pro_list_page-main_container" >
      <BlogView />
      <Loader loading={isLoading} />
      <NavBar loaderValue={(data) => setIsLoading(data)} />
      {connectCard && <ConnectCardModel onClick={(data) => onPressConnect(data)} onClickClose={() => [setConnectCard(false)]} />}
      {otpModel && <OtpModel onClick={(data) => onPressConfirmOtp(data)} onClickClose={() => [setOtpModel(false)]} />}
      {showModel && <MembershipModel onClick={(data) => onPressContinue(data)} onClickClose={() => setShowModel(false)} price1={selectedPlan?.pricing?.monthly} price2={selectedPlan?.pricing?.yearly} />}
      <div className="alpha-home_page-container">
        <div className="alpha-subscription_page_top_container">
          <h1>Unlock Your Membership</h1>
          <h2>Get access to biggest digital platform for heavy equipment or machinery </h2>
          <div className="alpha-subscription_page_item_top_view">
            {plans?.length > 0 &&
              (plans.map((item, index) => {
                return (
                  <div style={{ backgroundColor: selectedPlan?.type === item?.type ? '#F18805' : 'white', borderWidth: 1, borderColor: selectedPlan?.type === item?.type ? 'white' : '#F18805' }} onClick={() => setSelectedPlan(item)} key={index} className="alpha-subscription_page_item_view">
                    <div style={{ borderColor: selectedPlan?.type === item?.type ? 'white' : '#F18805' }} className="alpha-subscription_page_item_type_view">
                      <h3 style={{ color: selectedPlan?.type === item?.type ? 'white' : '#F18805' }}>{item?.type}</h3>
                    </div>
                    <h4 style={{ color: selectedPlan?.type === item?.type ? 'white' : '#F18805' }}>${item?.pricing?.monthly}/${item?.pricing?.yearly}</h4>
                    <h5 style={{ color: selectedPlan?.type === item?.type ? 'white' : '#F18805' }}>Monthly/Yearly</h5>
                    {item?.points?.map((data) => {
                      return (
                        <div className="alpha-subscription_page_item_point_view">
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
          <div className={selectedPlan?.type ? 'alpha-calculator-buttion_view' : 'alpha-calculator-buttion_view_disable'}>
            <div onClick={() => selectedPlan?.type ? setShowModel(true) : showMessage('Please choose plan first')}>
              <h3>Continue</h3>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div >
  );
}
