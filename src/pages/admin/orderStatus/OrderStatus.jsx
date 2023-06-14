import React, { useEffect, useState } from "react";
import { useSnackbar } from "react-simple-snackbar";

import { Loader, SearchViewTwo, SideBar, TopBar } from "../../../components";
import { snakbarOptions } from "../../../globalData";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import './orderStatus.css'

export default function OrderStatus() {
  const [isLoading, setIsLoading] = useState(false)
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [orderArray, setOrderArray] = useState([])

  useEffect(() => {
    getOrderStatus();
  }, []);

  const getOrderStatus = async () => {
    setIsLoading(true)
    try {
      const endPoint = api.sellerDashboard + `?search=`;
      await callApi(Method.GET, endPoint, null,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            setOrderArray(res?.data?.allOrders)
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
            <h1>Order Detail</h1>
            {/* <SearchViewTwo /> */}
            <div />
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-shop_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>
          {orderArray?.length > 0 ?
            <div className="alpha_payment_history_table_view" style={{ overflowX: 'hidden' }}>
              <table>
                <thead>
                  <tr>
                    <th scope="col" style={{ paddingLeft: 30 }}>Buyer Name</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">State</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody >
                  {orderArray?.map((item, index) => {
                    const date = new Date(item?.createdAt)
                    console.log(item);
                    return (
                      <tr key={index}>
                        <td data-label={'Buyer Name'} className="alpha_payment_history_padding_left" >{item?.requester?.name}</td>
                        <td data-label={'Product Name'} className={'alpha_my_shop_title_style'}>{item?.product?.productName}</td>
                        <td data-label={'State'} style={{ color: item?.status === 'accepted' || item?.status === "Complete" ? '#00AD50' : '#D20000' }}>{item?.status === 'accepted' || item?.status === "Complete" ? 'Accepted' : 'Pending'}</td>
                        <td data-label={'Date'} >{date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            :
            <div className="alpha-my_shop_empty_div">
              <h2>You don’t have any order status history.</h2>
            </div>
          }
        </div>
        <div style={{ marginBottom: 5 }} />
      </div>
    </div>
  );
}
