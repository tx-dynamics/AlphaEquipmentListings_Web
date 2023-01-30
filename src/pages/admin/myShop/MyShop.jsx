import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteProductModel, MembershipModel, PaymentModel, SearchView, SideBar, TopBar } from "../../../components";
import './myShop.css'
export default function MyShop() {
  const navigate = useNavigate()
  const [showDeleteModel, setShowDeleteModel] = useState(false)
  const [membershipModel, setMembershipModel] = useState(true)
  const [chargesView, setChargesView] = useState(false)
  const [secondPlan, setSecondPlan] = useState(false)
  const [paymentModel, setPaymentModel] = useState(false)

  const [selectedId, setSelectedId] = useState({ id: 0 })
  const [myProductsArray, setMyProductArray] = useState([
    {
      id: 1,
      title: '2016 Wacker Neuson RD12A Double Drum Roller',
      condition: 'New',
      inStock: 3,
      price: '200$',
      type: 'Machine',
    },
    {
      id: 2,
      title: 'Carry Deck Crane TS20',
      condition: 'Used',
      inStock: 3,
      price: '-',
      type: 'Machine',
    },
    {
      id: 3,
      title: 'Break Kits Truck TS20',
      condition: 'New',
      inStock: 3,
      price: '200$',
      type: 'Spare Parts',
    },
    {
      id: 4,
      title: '2016 Wacker Neuson RD12A Double Drum Roller',
      condition: 'Used',
      inStock: 3,
      price: '200$',
      type: 'Machine',
    },
    {
      id: 5,
      title: 'Gantry Cranes & Lifts',
      condition: 'Used',
      inStock: 3,
      price: '-',
      type: 'Machine',
    },
    {
      id: 6,
      title: 'Wheel Hub Seal Kits Truck',
      condition: 'New',
      inStock: 3,
      price: '200$',
      type: 'Spare Parts',
    },
    {
      id: 7,
      title: 'Carry Deck Crane TS20',
      condition: 'Used',
      inStock: 3,
      price: '200$',
      type: 'Machine',
    },
    {
      id: 8,
      title: 'Gantry Cranes & Lifts',
      condition: 'New',
      inStock: 3,
      price: '200$',
      type: 'Machine',
    },

    {
      id: 9,
      title: 'Break Kits Truck TS20',
      condition: 'New',
      inStock: 3,
      price: '-',
      type: 'Spare Parts',
    },
    {
      id: 10,
      title: 'Wheel Hub Seal Kits Truck ',
      condition: 'New',
      inStock: 3,
      price: '200$',
      type: 'Spare Parts',
    },
  ])

  const deleteProduct = () => {
    const array = [...myProductsArray]
    let remove = array.filter((item) => item.id !== selectedId.id)
    setMyProductArray(remove)
    setShowDeleteModel(false)
  }

  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      {paymentModel && <PaymentModel admin onClick={() => setPaymentModel(false)} onClickClose={() => setPaymentModel(false)} />}
      {membershipModel && <MembershipModel admin={true} secondPlan={secondPlan} chargesView={chargesView} onClick={() => [secondPlan ? [setMembershipModel(false), setPaymentModel(true)] : chargesView ? setSecondPlan(true) : setChargesView(!chargesView)]} onClickClose={() => setMembershipModel(false)} />}
      {showDeleteModel && <DeleteProductModel onClick={() => deleteProduct()} onClickCancel={() => [setSelectedId({ id: 0 }), setShowDeleteModel(false)]} />}
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-shop-title_view">
            <h1>Your Shop</h1>
            <SearchView />
            <div onClick={() => navigate('/addproduct', { state: { screen: 'add' } })} className="alpha_my_Shop-add_product_button_view">
              <h5>+ Add Product</h5>
            </div>
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-shop_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>

          {myProductsArray.length > 0 ?
            <div className="alpha_my_shop_table_view" style={{ overflowX: 'hidden' }}>
              <table>
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Condition</th>
                    <th scope="col">In Stock</th>
                    <th scope="col">Price</th>
                    <th scope="col">Type</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody >

                  {myProductsArray.map((item) => {
                    return (
                      <tr>
                        <td data-label={''} >-{item.id}</td>
                        <td data-label={'Name'} className={'alpha_my_shop_title_style'}>{item.title}</td>
                        <td data-label={'Condition'}> <div className="alpha-my_shop-table_data_new_view">
                          <h6>{item.condition}</h6>
                        </div>
                        </td>
                        <td data-label={'In Stock'} >{item.inStock}</td>
                        <td data-label={'Price'} >{item.price}</td>
                        <td data-label={'Type'} >{item.type}</td>
                        <td data-label={'Action'}><div className="alpha-my_shop-table_data_edit_view">
                          <h5 onClick={() => navigate('/addproduct', { state: { screen: 'edit' } })}>Edit</h5>
                          <h5
                            onClick={() => [setShowDeleteModel(true), setSelectedId(item)]}>
                            Delete</h5>
                        </div></td>
                      </tr>
                    )
                  })}
                </tbody>

              </table>
            </div>
            :
            <div className="alpha-my_shop_empty_div">
              <h2>You don’t have any product.</h2>
            </div>
          }
        </div>
        <div style={{ marginBottom: 5 }} />
      </div>
    </div>
  );
}
