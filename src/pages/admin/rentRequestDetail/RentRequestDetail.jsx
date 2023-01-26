import React, { useState } from "react";
import { dotedTick, dummyThree } from "../../../assets/icons";
import { DenyRequestModel, SideBar, SubmitModel, TopBar } from "../../../components";
import './rentRequestDetail.css'
export default function RentRequestDetail() {
  const [successfullModel, setSuccessfullModel] = useState(false)
  const [denyRequestModel, setDenyRequest] = useState(false)
  const [selectedId, setSelectedId] = useState({ id: 0 })
  const [rentRequestArray, setRentRequestArray] = useState([
    {
      id: 1,
      userName: 'Aadam Gabriel',
      days: '3',
      totalRent: '600$',
      from: '25-11-2022',
      to: '27-11-2022',
      time: '02:00 PM',
    },
    {
      id: 2,
      userName: 'Robert Downey',
      days: '4',
      totalRent: '800$',
      from: '26-11-2022',
      to: '29-11-2022',
      time: '06:00 PM',
    },
    {
      id: 3,
      userName: 'Robert Downey',
      days: '4',
      totalRent: '800$',
      from: '26-11-2022',
      to: '29-11-2022',
      time: '06:00 PM',
    },
  ])

  const removeRequest = () => {
    const array = [...rentRequestArray]
    let remove = array.filter((item) => item.id !== selectedId.id)
    setRentRequestArray(remove)
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
          {rentRequestArray.length > 0 ?
            <div className="alpha_payment_history_table_view" >
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>User Name</th>
                    <th>Days</th>
                    <th>Total Rent</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Time</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody >
                  {rentRequestArray.map((item) => {
                    return (
                      <tr>
                        <td data-label={''} className={'alpha-rent_request_detail_product_id_width'}>-{item.id}</td>
                        <td data-label={'User Name'} className={'alpha_my_shop_title_style'}>{item.userName}</td>
                        <td data-label={'Days'}>{item.days}</td>
                        <td data-label={'Total Rent'} >{item.totalRent}</td>
                        <td data-label={'From'} >{item.from}</td>
                        <td data-label={'To'} >{item.to}</td>
                        <td data-label={'Time'} >{item.time}</td>
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
              <h2>You don’t have any rent requests.</h2>
            </div>
          }
        </div>
        <div style={{ marginBottom: 5 }} />
      </div>
    </div >
  );
}
