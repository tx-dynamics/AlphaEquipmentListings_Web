import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword, crossCircleWhite, deleteIcon, dotedTick, user } from "../../../assets/icons";
import { ChangePasswordModel, CreatePasswordModel, DeleteAccountModel, OtpModel, SideBar, SubmitModel, TextInputTwo, TopBar } from "../../../components";
import './profileAdmin.css'
export default function ProfileAdmin() {
  const navigate = useNavigate()
  const [editMode, setEditMode] = useState(false)
  const [changePModel, setChangePModel] = useState(false)
  const [createPModel, setCreatePModel] = useState(false)
  const [submitModel, setSubmitModel] = useState(false)
  const [deleteAccountModel, setDeleteAccountModel] = useState(false)
  const [otpModel, setOtpModel] = useState(false)
  const [image, setImage] = useState("");
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
    <div className="alpha-dashboard-main_container">
      <SideBar />
      {changePModel && <ChangePasswordModel onClick={() => [setCreatePModel(true), setChangePModel(false)]} onClickClose={() => setChangePModel(false)} />}
      {createPModel && <CreatePasswordModel onClick={() => [setSubmitModel(true), setCreatePModel(false)]} onClickClose={() => setCreatePModel(false)} />}
      {submitModel && <SubmitModel title={'password Updated'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis fringilla eros, sit amet auctor justo accumsan et.'} icon={dotedTick} onClick={() => setSubmitModel(false)} />}
      {deleteAccountModel && <DeleteAccountModel onClick={() => [setOtpModel(true), setDeleteAccountModel(false)]} onClickClose={() => setDeleteAccountModel(false)} />}
      {otpModel && <OtpModel onClick={() => setOtpModel(false)} onClickClose={() => setOtpModel(false)} />}
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-shop-title_view">
            <h1>Profile Setting</h1>
            <div onClick={() => setEditMode(true)} className="alpha_save_button_view">
              <h4>Edit</h4>
            </div>
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-profile_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>

          <div>
            <div className="alpha-profile_picture_top_view" style={{ paddingLeft: 40, paddingTop: 20 }}>
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
            <div className="alpha-profile_inputs_top_view">
              <div>
                <TextInputTwo title={'Name'} placeholder={'Enter your name'} />
              </div>
              <div>
                <TextInputTwo title={'Email'} placeholder={'Enter your email'} />
              </div>
              <div>
                <TextInputTwo title={'Phone Number'} placeholder={'Enter your phone number'} />
              </div>
            </div>
          </div>
          {!editMode ?
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
            :
            <div className="alpha_admin_profile_save_button">
              <div onClick={() => setEditMode(false)}>
                <h2>Save</h2>
              </div>
            </div>
          }

        </div>
        <div style={{ marginBottom: 5 }} />
      </div>
    </div>
  );
}
