import React, { useState } from "react";
import { useSnackbar } from "react-simple-snackbar";
import { useDispatch } from "react-redux";

import { changePassword, crossCircleWhite, deleteIcon, dotedTick } from "../../../assets/icons";
import { BlogView, CreatePasswordModel, DeleteAccountModel, Footer, Loader, NavBar, OtpModel, SubmitModel, TextInputTwo } from "../../../components";
import { store } from "../../../redux/store";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import { snakbarOptions } from "../../../globalData";
import { userData } from "../../../redux/Slices/userDataSlice";
import ChangePasswordModel from "../../../components/changePasswordModel/ChangePasswordModel";
import './profile.css'

export default function Profile() {
  const dispatch = useDispatch();
  const user = store.getState().userData.userData
  const [isLoading, setIsLoading] = useState(false)
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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
  // const uploadImageToAws = async (data) => {
  //   // setIsLoading(true);

  //   uploadAwsImage(image)

  // }

  const updateProfile = async (imagePath) => {
    if (name.length > 0 || phoneNumber.length > 0) {
      try {
        setIsLoading(true);
        const endPoint = api.updateProfile;
        const data = {}
        // if (image !== '') {
        //   data.image = image
        // }
        if (name !== '') {
          data.name = name
        }
        if (phoneNumber !== '') {
          data.number = phoneNumber
        }

        await callApi(Method.PATCH, endPoint, data,
          res => {
            if (res?.status === 200) {
              dispatch(userData(res.data?.user));
              setIsLoading(false)
              showMessage(res?.message)
            }
            else {
              setIsLoading(false)
              showMessage(res?.message)
            }
          },
          err => {
            console.log(err);
            showMessage(err.message)
            setIsLoading(false);
          });
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
    else {
      showMessage('Please type name or number to update')
    }
  }

  return (
    <div className="alpha-home_page-main_container">
      <BlogView />
      <NavBar />
      <Loader loading={isLoading} />
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
              <div onClick={() => updateProfile()}>
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
                  <img src={image === '' ? user?.image && user?.image : image} alt={''} />
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
                <TextInputTwo onChange={(e) => setName(e.target.value)} title={'Name'} placeholder={user?.name} />
              </div>
              <div>
                <TextInputTwo disabled={true} title={'Email'} placeholder={user?.email} />
              </div>
              <div>
                <TextInputTwo onChange={(e) => setPhoneNumber(e.target.value)} title={'Phone number'} placeholder={user?.number} />
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
