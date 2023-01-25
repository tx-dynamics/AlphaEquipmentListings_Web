import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { shopBgImage, user, crossCircleWhite, dotedTick } from "../../../assets/icons";
import { OtpModel, SideBar, SubmitModel, TextInputTwo, TopBar } from "../../../components";
import './shop.css'
export default function Shop() {
  const navigate = useNavigate()
  const [image, setImage] = useState("");
  const [storeCreated, setStoreCreated] = useState(false);
  const [successfullModel, setSuccessfullModel] = useState(false)
  const [otpModel, setOtpModel] = useState(false)
  const uploadImage = () => {
    document.getElementById("selectFile").click();
  };

  const onChange = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };
  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      {otpModel && <OtpModel onClick={() => [setSuccessfullModel(true), setOtpModel(false)]} onClickClose={() => [setOtpModel(false)]} />}
      {successfullModel && <SubmitModel onClick={() => [setSuccessfullModel(false), navigate('/myshop')]} icon={dotedTick} title={'Congratulations!'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis fringilla eros, sit amet auctor justo accumsan et.'} />}

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
                    <img src={image === "" ? user : image} alt={''} />
                  </div>
                  <div className="alpha-profile_add_image">
                    <img onClick={() => uploadImage()} src={crossCircleWhite} />
                    <input
                      onChange={(e) => onChange(e.target.files[0])}
                      id="selectFile"
                      type={"file"}
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
              </div>
              <div style={{}} className="alpha-profile_inputs_top_view">
                <div>
                  <TextInputTwo title={'Store Name'} placeholder={'Enter your store name'} />
                </div>
                <div>
                  <TextInputTwo title={'Business Email'} placeholder={'Enter your business email'} />
                </div>
                <div>
                  <TextInputTwo title={'Business Phone Number'} placeholder={'Enter your business phone number'} />
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
          <div onClick={() => storeCreated ? setOtpModel(true) : setStoreCreated(!storeCreated)} className="alpha-shop-shop_detail_button_view">
            <h2>{storeCreated ? 'Confirm' : 'Start'}</h2>
          </div>

        </div>

      </div>
    </div>
  );
}
