import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";

import { dotedTick } from "../../../assets/icons";
import { DenyRequestModel, Loader, SideBar, SubmitModel, TopBar } from "../../../components";
import { snakbarOptions } from "../../../globalData";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import './buyRequestDetail.css'

export default function BuyRequestDetail() {
  const { state } = useLocation();
  const navigate = useNavigate()
  const item = state?.data
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [successfullModel, setSuccessfullModel] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [denyRequestModel, setDenyRequest] = useState(false)

  const onPress = async (id, type) => {
    setIsLoading(true)
    setDenyRequest(false)
    try {
      const endPoint = api.buyRequest;
      const data = {
        id: id,
        status: type === 1 ? 'Cancel' : 'Complete',
      };
      await callApi(Method.PATCH, endPoint, data,
        res => {
          if (res?.status === 200) {
            type === 1 ? navigate(-1) : setSuccessfullModel(true)
            setIsLoading(false)
            showMessage(res?.message)
          }
          else {
            setIsLoading(false)
            showMessage(res?.message)
          }
        },
        err => {
          setIsLoading(false);
          showMessage(err?.message)
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      <Loader loading={isLoading} />
      {successfullModel && <SubmitModel onClick={() => navigate(-1)} icon={dotedTick} title={'Congratulations!'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis fringilla eros, sit amet auctor justo accumsan et.'} />}
      {denyRequestModel && <DenyRequestModel onClickClose={() => setDenyRequest(false)} onClick={() => onPress(item?._id, 1)} />}
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-shop-title_view">
            <h1>Buy Request</h1>
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-shop_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>
          <div className="alpha-rent_request_detail_product_deatil_view">
            <img src={item?.product?.images[0]} alt={''} />
            <div className="alpha-rent_request_detail_product_deatil">
              <h2>{item?.product?.productName}</h2>
              <h3>Location:<span style={{ fontWeight: 500 }}> {item?.product?.location?.address}</span></h3>
              <div className="alpha-rent_request_detail_product_space_between">
                <h3>Mileage:<span style={{ fontWeight: 500 }}>  {item?.product?.Mileage}</span></h3>
              </div>
              <div className="alpha-rent_request_detail_product_space_between">
                <h4>${item?.product?.price}</h4>
              </div>
            </div>
          </div>
          <div className="alpha_payment_history_table_view" >
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>User Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody >
                <tr>
                  <td data-label={''} className={'alpha-rent_request_detail_product_id_width'}>{1}-</td>
                  <td data-label={'User Name'} className={'alpha_my_shop_title_style'}>{item?.requester?.name}</td>
                  <td data-label={'Action'}><div className="alpha-my_shop-table_data_edit_view">
                    <h5 onClick={() => onPress(item?._id, 2)}>Confirm</h5>
                    <h5 onClick={() => [setDenyRequest(true)]}>
                      Deny</h5>
                  </div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ marginBottom: 5 }} />
      </div>
    </div >
  );
}
