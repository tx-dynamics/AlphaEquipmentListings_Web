import React, { useState } from "react";
import { changePassword, crossCircleWhite, deleteIcon, dotedTick, user } from "../../../assets/icons";
import { BlogView, CreatePasswordModel, DeleteAccountModel, Footer, NavBar, OtpModel, SubmitModel, TextInputTwo } from "../../../components";
import ChangePasswordModel from "../../../components/changePasswordModel/ChangePasswordModel";
import './profile.css'

export default function Profile() {
  const [image, setImage] = useState("");
  const [changePModel, setChangePModel] = useState(false)
  const [createPModel, setCreatePModel] = useState(false)
  const [submitModel, setSubmitModel] = useState(false)
  const [deleteAccountModel, setDeleteAccountModel] = useState(false)
  const [otpModel, setOtpModel] = useState(false)
  const actiopArray = [
    {
      id: 1,
      title: 'Change Password',
      des: 'Lorem ipsum dolor amuet conse ctur adipi scing elit at bibendum ante bibendum.',
      icon: changePassword,
    },
    {
      id: 2,
      title: 'Delete My Account',
      des: 'Lorem ipsum dolor amuet conse ctur adipi scing elit at bibendum ante bibendum.',
      icon: deleteIcon
    }
  ]

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
    <div className="alpha-home_page-main_container">
      <BlogView />
      <NavBar />
      {changePModel && <ChangePasswordModel onClick={() => [setCreatePModel(true), setChangePModel(false)]} onClickClose={() => setChangePModel(false)} />}
      {createPModel && <CreatePasswordModel onClick={() => [setSubmitModel(true), setCreatePModel(false)]} onClickClose={() => setCreatePModel(false)} />}
      {submitModel && <SubmitModel title={'password Updated'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis fringilla eros, sit amet auctor justo accumsan et.'} icon={dotedTick} onClick={() => setSubmitModel(false)} />}
      {deleteAccountModel && <DeleteAccountModel onClick={() => [setOtpModel(true), setDeleteAccountModel(false)]} onClickClose={() => setDeleteAccountModel(false)} />}
      {otpModel && <OtpModel onClick={() => setOtpModel(false)} onClickClose={() => setOtpModel(false)} />}

      <div className="alpha_detail_page_container">
        <div className="alpha-profile_outer_container">
          <div className="alpha-profile_top_container">
            <div className="alpha-profile_heading_view">
              <h1>Profile Setting</h1>
              <div>
                <p>Save</p>
              </div>
            </div>
            <div className="alpha-profile_heading_divider_top_view">
              <div className="alpha-profile_heading_divider_one" />
              <div className="alpha-profile_heading_divider_two" />
              <div className="alpha-profile_heading_divider_three" />
            </div>
            <div className="alpha-profile_picture_top_view">
              <h2>Profile Picture<span style={{ color: '#FF0000' }}> *</span></h2>
              <div className="alpha-profile_picture_view">
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
            <div className="alpha-profile_inputs_top_view">
              <div>
                <TextInputTwo title={'Name'} placeholder={'Aadam Gabriel'} />
              </div>
              <div>
                <TextInputTwo title={'Email'} placeholder={'aadam123@gmail.com'} />
              </div>
              <div>
                <TextInputTwo title={'Phone numbeer'} placeholder={'+1 321 555562894'} />
              </div>
            </div>
            <div className="alpha-profile-actios_top_view">
              {actiopArray.map((item) => {
                return (
                  <div onClick={() => item.id === 1 ? setChangePModel(true) : setDeleteAccountModel(true)} key={item.id} className="alpha-profile-actios_view">
                    <img src={item.icon} />
                    <div>
                      <h2>{item.title}</h2>
                      <h3>{item.des}</h3>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>

  );
}
