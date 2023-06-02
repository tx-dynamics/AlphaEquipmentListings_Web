import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";

import { Loader, SearchViewTwo, SideBar, TopBar } from "../../../components";
import { snakbarOptions } from "../../../globalData";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import './buyRequest.css'

export default function BuyRequest() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [sellArray, setSellArray] = useState([])

  useEffect(() => {
    getRequestsDetail();
  }, []);

  const getRequestsDetail = async () => {
    setIsLoading(true)
    try {
      const endPoint = api.sellerDashboard + `?search=`;
      await callApi(Method.GET, endPoint, null,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            setSellArray(res?.data?.buyRequests)
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

  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      <Loader loading={isLoading} />
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-shop-title_view">
            <h1>Buy Request</h1>
            {/* <SearchViewTwo /> */}
            <div />
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-shop_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>
          {sellArray?.length > 0 ?
            <div className="alpha_payment_history_table_view" style={{ overflowX: 'hidden' }}>
              <table>
                <thead>
                  <tr>
                    <th ></th>
                    <th >Product </th>
                    <th >Price</th>
                    <th >Request</th>
                    <th >Action</th>
                  </tr>
                </thead>
                <tbody >
                  {sellArray?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td data-label={''} style={{ paddingLeft: 20, }}>-{index + 1}</td>
                        <td data-label={'Product'} className={'alpha_buy_req_title_style'}  >{item?.product?.productName}</td>
                        <td data-label={'Price'} >${item?.product?.price}</td>
                        <td data-label={'Request'}  >1</td>
                        <td onClick={() => navigate('/buyrequestdetail', { state: { data: item } })} style={{ color: '#4482FF', cursor: 'pointer' }} data-label={'Action'} >View</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            :
            <div className="alpha-my_shop_empty_div">
              <h2>You don’t have any rent requests.</h2>
            </div>
          }
        </div>
        <div style={{ marginBottom: 5 }} />
      </div>
    </div >
  );
}
