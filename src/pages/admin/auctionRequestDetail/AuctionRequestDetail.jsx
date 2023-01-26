import React, { useState } from "react";
import { dotedTick, dummyThree } from "../../../assets/icons";
import { SideBar, SubmitModel, TopBar } from "../../../components";
import './auctionRequestDetail.css'
export default function AuctionRequestDetail() {
  const [successfullModel, setSuccessfullModel] = useState(false)
  const [selectedId, setSelectedId] = useState({ id: 0 })
  const [auctionRequestArray, setauctionRequestArray] = useState([
    {
      id: 1,
      userName: 'Aadam Gabriel',
      bidPrice: '5000$'
    },
    {
      id: 2,
      userName: 'Robert Downey',
      bidPrice: '4300$'
    },
    {
      id: 3,
      userName: 'Robert Downey',
      bidPrice: '4000$'
    },
    {
      id: 3,
      userName: 'Robert Downey',
      bidPrice: '6000$'
    },
  ])

  const removeRequest = () => {
    const array = [...auctionRequestArray]
    let remove = array.filter((item) => item.id !== selectedId.id)
    setauctionRequestArray(remove)
    setSuccessfullModel(false)
  }

  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      {successfullModel && <SubmitModel onClick={() => removeRequest()} icon={dotedTick} title={'Congratulations!'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis fringilla eros, sit amet auctor justo accumsan et.'} />}
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-shop-title_view">
            <h1>Rent Request</h1>
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-shop_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>
          <div className="alpha-rent_request_detail_product_deatil_view">
            <img src={dummyThree} alt={''} />
            <div className="alpha-rent_request_detail_product_deatil">
              <h2>2016 Wacker Neuson RD12A Double Drum Roller</h2>
              <h3>Location:<span style={{ fontWeight: 500 }}> Lorem ipsum dolor sit amet ipsum dolor sit</span></h3>
              <div className="alpha-rent_request_detail_product_space_between">
                <h3>Hours Meter:<span style={{ fontWeight: 500 }}>  300h</span></h3>
                <h5>Bid end in 4d 14h</h5>
              </div>
              <div className="alpha-rent_request_detail_product_space_between">
                <h4>200$/day</h4>
                <h6>Manual Sell</h6>
              </div>
            </div>
          </div>
          {auctionRequestArray.length > 0 ?
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
                  {auctionRequestArray.map((item) => {
                    return (
                      <tr>
                        <td data-label={''} className={'alpha-rent_request_detail_product_id_width'}>-{item.id}</td>
                        <td data-label={'User Name'} className={'alpha_my_shop_title_style'}>{item.userName}</td>
                        <td data-label={'Bid Price'}>{item.bidPrice}</td>
                        <td data-label={'Action'}><div className="alpha-my_shop-table_data_edit_view">
                          <h5 onClick={() => [setSelectedId(item), setSuccessfullModel(true)]}>Sell</h5>
                        </div></td>
                      </tr>
                    )
                  })}
                </tbody>

              </table>
            </div>
            :
            <div className="alpha-my_shop_empty_div">
              <h2>You don’t have any buy requests.</h2>
            </div>
          }
        </div>
        <div style={{ marginBottom: 5 }} />
      </div>
    </div >
  );
}
