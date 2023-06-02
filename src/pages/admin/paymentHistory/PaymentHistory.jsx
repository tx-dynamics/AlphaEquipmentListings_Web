import React, { useEffect, useState } from "react";
import { useSnackbar } from "react-simple-snackbar";

import { Loader, SearchViewTwo, SideBar, TopBar } from "../../../components";
import { snakbarOptions } from "../../../globalData";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import './paymentHistory.css'

export default function PaymentHistory() {
  const [isLoading, setIsLoading] = useState(false)
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [orderArray, setOrderArray] = useState([])

  useEffect(() => {
    getPaymentHistory();
  }, []);

  const getPaymentHistory = async () => {
    setIsLoading(true)
    try {
      const endPoint = api.sellerDashboard + `?search=`;
      await callApi(Method.GET, endPoint, null,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            setOrderArray(res?.data?.orders)
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
            <h1>Payment History</h1>
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
                    <th scope="col">Sale</th>
                    <th scope="col">Date</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Method</th>
                  </tr>
                </thead>
                <tbody >
                  {orderArray?.map((item, index) => {
                    const date = new Date(item?.createdAt)
                    return (
                      <tr key={index}>
                        <td data-label={'Buyer Name'} className="alpha_payment_history_padding_left" >{item?.requester?.name}</td>
                        <td data-label={'Product Name'} className={'alpha_my_shop_title_style'}>{item?.product?.productName}</td>
                        <td data-label={'Sale'}>{item?.product?.productType}</td>
                        <td data-label={'Date'} >{date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()}</td>
                        <td data-label={'Payment'} >${item?.product?.price}</td>
                        <td data-label={'Method'} >{item?.wallet ? 'Wallet' : 'Card'}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            :
            <div className="alpha-my_shop_empty_div">
              <h2>You don’t have any payment history.</h2>
            </div>
          }
        </div>
        <div style={{ marginBottom: 5 }} />
      </div>
    </div>
  );
}
