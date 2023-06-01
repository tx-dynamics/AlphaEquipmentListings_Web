import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSnackbar } from "react-simple-snackbar";

import { shopBgImage, user, crossCircleWhite, dotedTick } from "../../../assets/icons";
import { Loader, OtpModel, SideBar, SubmitModel, TextInputTwo, TopBar } from "../../../components";
import { emailFormat, snakbarOptions } from "../../../globalData";
import { upload } from "../../../helpingMethods";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import { userData } from "../../../redux/Slices/userDataSlice";
import './shop.css'

export default function Shop() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [image, setImage] = useState("");
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [storeCreated, setStoreCreated] = useState(false);
  const [successfullModel, setSuccessfullModel] = useState(false)
  const [otpModel, setOtpModel] = useState(false)
  const nameValue = name.length > 0 && name.length < 4 ? 'Store name must be 4 character long' : null
  const emailValue = email.length > 0 && !emailFormat.test(email) ? 'Email format error' : null
  const disableValue = (name.length > 1 && nameValue == null) && (email.length > 1 && emailValue == null) && (phone.length > 5) && (image !== '')

  const onClickConfirm = async () => {
    if (disableValue) {
      try {
        setIsLoading(true)
        const endPoint = api.createStore;
        const data = {
          businessEmail: email,
          businessPhone: phone,
          storeName: name,
          storeImage: image
        };
        await callApi(Method.POST, endPoint, data,
          res => {
            if (res?.status === 200) {
              setIsLoading(false)
              showMessage('Store created please verify it')
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
      showMessage('Please fill all the fields')
    }
  }

  const onPressConfirmOtp = async (otp) => {
    setOtpModel(false)
    try {
      setIsLoading(true);
      const endPoint = api.verifyStore;
      const data = {
        otp: otp,
      };
      await callApi(Method.POST, endPoint, data,
        res => {
          if (res?.status === 200) {
            getUserDetail()
          }
          else {
            setIsLoading(false)
            setOtpModel(true)
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

  const getUserDetail = async () => {
    const endPoint = api.myProfile;
    await callApi(Method.GET, endPoint, null,
      res => {
        if (res?.status === 200) {
          setIsLoading(false)
          showMessage('Otp verify successfully')
          dispatch(userData(res.data?.data));
          navigate('/myshop', { replace: true })
        }
        else {
          showMessage(res?.message)
        }
      },
      err => {
        showMessage(err?.message)
          (err.message)
      });
  };

  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      <Loader loading={isLoading} />
      {otpModel && <OtpModel onClick={(data) => onPressConfirmOtp(data)} onClickClose={() => [setOtpModel(false)]} />}
      {successfullModel && <SubmitModel onClick={() => [setSuccessfullModel(false), navigate('/myshop', { replace: true })]} icon={dotedTick} title={'Congratulations!'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis fringilla eros, sit amet auctor justo accumsan et.'} />}
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-shop-title_view">
            <h1>Your Shop</h1>
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-shop_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>
          <div className="alpha-shop-shop_detail_title_view">
            <h1>Create your Store in just 2 steps</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium orci vel ante posuere, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium orci vel ante posuere, et pharetra magna consectetur.</h2>
          </div>
          {storeCreated ?
            <>
              <div className="alpha-profile_picture_top_view" style={{ paddingLeft: 20, paddingTop: 0 }}>
                <h2>Profile Picture</h2>
                <div style={{ paddingLeft: 60, marginBottom: 20 }} className="alpha-profile_picture_view">
                  <div className="alpha-profile_image_image">
                    <img src={image ? image : user} alt={''} />
                  </div>
                  <div className="alpha-profile_add_image">
                    <img onClick={() => document.getElementById("upload-store").click()} src={crossCircleWhite} />
                    <input
                      onChange={upload(url => setImage(url), setIsLoading)}
                      id='upload-store'
                      type={"file"}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </div>
              <div style={{}} className="alpha-profile_inputs_top_view">
                <div>
                  <TextInputTwo onChange={(e) => setName(e.target.value)} title={'Store Name'} placeholder={'Enter your store name'} />
                </div>
                <div>
                  <TextInputTwo onChange={(e) => setEmail(e.target.value)} title={'Business Email'} placeholder={'Enter your business email'} />
                </div>
                <div>
                  <TextInputTwo onChange={(e) => setPhone(e.target.value)} title={'Business Phone Number'} placeholder={'Enter your business phone number'} />
                </div>
              </div>
            </>
            :
            <div className="alpha-shop-shop_detail_image_top_view">
              <div className="alpha-shop-shop_detail_image_view">
                <img src={shopBgImage} />
              </div>
            </div>
          }
          <div onClick={() => storeCreated ? onClickConfirm() : setStoreCreated(!storeCreated)} className="alpha-shop-shop_detail_button_view">
            <h2>{storeCreated ? 'Confirm' : 'Start'}</h2>
          </div>

        </div>

      </div>
    </div>
  );
}
