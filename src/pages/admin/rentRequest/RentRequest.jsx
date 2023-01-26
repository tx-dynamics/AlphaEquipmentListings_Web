import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchViewTwo, SideBar, TopBar } from "../../../components";
import './rentRequest.css'
export default function RentRequest() {
  const navigate = useNavigate()
  const rentRequestArray = [
    {
      id: 1,
      Product: '2016 Wacker Neuson RD12A',
      Rent: '200$',
      Request: '2',
      Action: 'View',
    },
    {
      id: 2,
      Product: 'Carry Deck Crane TS20',
      Rent: '700$',
      Request: '2',
      Action: 'View',
    },
    {
      id: 3,
      Product: 'Jumbos',
      Rent: '200$',
      Request: '2',
      Action: 'View',
    },
    {
      id: 4,
      Product: '2008 Euclid R40 Haul Truck',
      Rent: '200$',
      Request: '1',
      Action: 'View',
    },
    {
      id: 5,
      Product: 'Gantry Cranes & Lifts',
      Rent: '700$',
      Request: '2',
      Action: 'View',
    },
    {
      id: 6,
      Product: 'Jumbos',
      Rent: '200$',
      Request: '1',
      Action: 'View',
    },
    {
      id: 7,
      Product: 'Carry Deck Crane TS20',
      Rent: '200$',
      Request: '1',
      Action: 'View',
    },
    {
      id: 8,
      Product: 'Gantry Cranes & Lifts',
      Rent: '700$',
      Request: '2',
      Action: 'View',
    },
  ]

  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-shop-title_view">
            <h1>Rent Request</h1>
            <SearchViewTwo />
            <div />
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-shop_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>
          {rentRequestArray.length > 0 ?
            <div className="alpha_payment_history_table_view" style={{ overflowX: 'hidden' }}>
              <table>
                <thead>
                  <tr>
                    <th ></th>
                    <th >Product </th>
                    <th >Rent/Day</th>
                    <th >Request</th>
                    <th >Action</th>
                  </tr>
                </thead>
                <tbody >
                  {rentRequestArray.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td data-label={''} style={{ paddingLeft: 20, }}>-{item.id}</td>
                        <td data-label={'Product'} className={'alpha_rent_req_title_style'}   >{item.Product}</td>
                        <td data-label={'Rent/Day'} >{item.Rent}</td>
                        <td data-label={'Request'}  >{item.Request}</td>
                        <td style={{ color: '#4482FF', cursor: 'pointer' }} onClick={() => navigate('/rentrequestdetail')} data-label={'Action'} >{item.Action}</td>
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
