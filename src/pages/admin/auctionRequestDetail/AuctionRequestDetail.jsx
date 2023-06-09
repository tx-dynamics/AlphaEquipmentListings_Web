import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";

import { dotedTick } from "../../../assets/icons";
import { Loader, SideBar, SubmitModel, TopBar } from "../../../components";
import { snakbarOptions } from "../../../globalData";
import { diffBtwTwoDates } from "../../../helpingMethods";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import './auctionRequestDetail.css'

export default function AuctionRequestDetail() {
  const { state } = useLocation();
  const navigate = useNavigate()
  const item = state?.data
  const timeDiff = diffBtwTwoDates(new Date(), new Date(item?.auctionEndDate)).includes('-')
  const findStatus = item?.bids?.filter((data) => data.status === 'accepted')
  const [isLoading, setIsLoading] = useState(false)
  const [successfullModel, setSuccessfullModel] = useState(false)
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)

  const onPress = async (id) => {
    if (timeDiff) {
      showMessage('Bid expired')
    }
    if (!timeDiff) {
      setIsLoading(true)
      try {
        const endPoint = api.bid + `/${id}`;
        const data = {
          status: 'accepted'
        };
        await callApi(Method.PATCH, endPoint, data,
          res => {
            if (res?.status === 200) {
              setIsLoading(false)
              setSuccessfullModel(true)
              showMessage('Product assign successfully')
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
  }

  return (
    console.log(findStatus),
    <div className="alpha-dashboard-main_container">
      <SideBar />
      <Loader loading={isLoading} />
      {successfullModel && <SubmitModel onClick={() => [setSuccessfullModel(false), navigate(-1)]} icon={dotedTick} title={'Congratulations!'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis fringilla eros, sit amet auctor justo accumsan et.'} />}
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-shop-title_view">
            <h1>Auction Request</h1>
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-shop_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>
          <div className="alpha-rent_request_detail_product_deatil_view">
            <img src={item?.images[0]} alt={''} />
            <div className="alpha-rent_request_detail_product_deatil">
              <h2>{item?.productName}</h2>
              <h3>Location:<span style={{ fontWeight: 500 }}> {item?.location?.address}</span></h3>
              <div className="alpha-rent_request_detail_product_space_between">
                <h3>Mileage:<span style={{ fontWeight: 500 }}>  {item?.Mileage}</span></h3>
                {timeDiff ?
                  <h5> Bid expired</h5>
                  :
                  <h5> Bid end in {diffBtwTwoDates(new Date(), new Date(item?.auctionEndDate))}</h5>
                }
              </div>
              <div className="alpha-rent_request_detail_product_space_between">
                <h4>${item?.price}</h4>
                <h6>Manual Sell</h6>
              </div>
            </div>
          </div>
          {item?.bids?.length > 0 ?
            <div className="alpha_payment_history_table_view" >
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>User Name</th>
                    <th>Bid Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody >
                  {item?.bids?.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td data-label={''} className={'alpha-rent_request_detail_product_id_width'}>{index + 1}-</td>
                        <td data-label={'User Name'} className={'alpha_my_shop_title_style'}>{value?.bidder?.name}</td>
                        <td data-label={'Bid Price'}>${value?.amount}</td>
                        <td data-label={'Action'}><div className="alpha-my_shop-table_data_edit_view">
                          <h5 onClick={() => findStatus?.length > 0 ? showMessage('Already sold this product') : onPress(value?._id)}>{findStatus?.length > 0 ? 'Sold' : 'Sell'}</h5>
                        </div></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            :
            <div className="alpha-my_shop_empty_div">
              <h2>You don’t have any bid requests.</h2>
            </div>
          }
        </div>
        <div style={{ marginBottom: 5 }} />
      </div>
    </div >
  );
}
