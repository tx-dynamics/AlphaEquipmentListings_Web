import React, { useState } from "react";
import { dotedTick, dummyThree } from "../../../assets/icons";
import { DenyRequestModel, SideBar, SubmitModel, TopBar } from "../../../components";
import './buyRequestDetail.css'
export default function BuyRequestDetail() {
  const [successfullModel, setSuccessfullModel] = useState(false)
  const [denyRequestModel, setDenyRequest] = useState(false)
  const [selectedId, setSelectedId] = useState({ id: 0 })
  const [buyRequestArray, setbuyRequestArray] = useState([
    {
      id: 1,
      userName: 'Aadam Gabriel',
    },
    {
      id: 2,
      userName: 'Robert Downey',
    },
    {
      id: 3,
      userName: 'Robert Downey',
    },
  ])

  const removeRequest = () => {
    const array = [...buyRequestArray]
    let remove = array.filter((item) => item.id !== selectedId.id)
    setbuyRequestArray(remove)
    setSuccessfullModel(false)
    setDenyRequest(false)
  }

  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      {successfullModel && <SubmitModel onClick={() => removeRequest()} icon={dotedTick} title={'Congratulations!'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis fringilla eros, sit amet auctor justo accumsan et.'} />}
      {denyRequestModel && <DenyRequestModel onClickClose={() => setDenyRequest(false)} onClick={() => removeRequest()} />}

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
              </div>
              <div className="alpha-rent_request_detail_product_space_between">
                <h4>200$/day</h4>
              </div>
            </div>
          </div>
          {buyRequestArray.length > 0 ?
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
                  {buyRequestArray.map((item) => {
                    return (
                      <tr>
                        <td data-label={''} className={'alpha-rent_request_detail_product_id_width'}>-{item.id}</td>
                        <td data-label={'User Name'} className={'alpha_my_shop_title_style'}>{item.userName}</td>
                        <td data-label={'Action'}><div className="alpha-my_shop-table_data_edit_view">
                          <h5 onClick={() => [setSelectedId(item), setSuccessfullModel(true)]}>Confirm</h5>
                          <h5 onClick={() => [setSelectedId(item), setDenyRequest(true)]}>
                            Deny</h5>
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
