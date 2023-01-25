import React from "react";
import { useState } from "react";
import { DeleteProductModel, SearchView, SideBar, TopBar } from "../../../components";
import './myShop.css'
export default function MyShop() {
  const [showDeleteModel, setShowDeleteModel] = useState(false)
  const [selectedId, setSelectedId] = useState({ id: 0 })
  const [myProductsArray, setMyProductArray] = useState([
    {
      id: 1,
      title: '2016 Wacker Neuson RD12A Double Drum Roller',
      condition: 'New',
      inStock: 3,
      price: '200$',
      type: 'Machine'
    },
    {
      id: 2,
      title: 'Carry Deck Crane TS20',
      condition: 'Used',
      inStock: 3,
      price: '-',
      type: 'Machine'
    },
    {
      id: 3,
      title: 'Break Kits Truck TS20',
      condition: 'New',
      inStock: 3,
      price: '200$',
      type: 'Spare Parts'
    },
    {
      id: 4,
      title: '2016 Wacker Neuson RD12A Double Drum Roller',
      condition: 'Used',
      inStock: 3,
      price: '200$',
      type: 'Machine'
    },
    {
      id: 5,
      title: 'Gantry Cranes & Lifts',
      condition: 'Used',
      inStock: 3,
      price: '-',
      type: 'Machine'
    },
    {
      id: 6,
      title: 'Wheel Hub Seal Kits Truck',
      condition: 'New',
      inStock: 3,
      price: '200$',
      type: 'Spare Parts'
    },
    {
      id: 7,
      title: 'Carry Deck Crane TS20',
      condition: 'Used',
      inStock: 3,
      price: '200$',
      type: 'Machine'
    },
    {
      id: 8,
      title: 'Gantry Cranes & Lifts',
      condition: 'New',
      inStock: 3,
      price: '200$',
      type: 'Machine'
    },

    {
      id: 9,
      title: 'Break Kits Truck TS20',
      condition: 'New',
      inStock: 3,
      price: '-',
      type: 'Spare Parts'
    },
    {
      id: 10,
      title: 'Wheel Hub Seal Kits Truck ',
      condition: 'New',
      inStock: 3,
      price: '200$',
      type: 'Spare Parts'
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
      {showDeleteModel && <DeleteProductModel onClick={() => deleteProduct()} onClickCancel={() => [setSelectedId({ id: 0 }), setShowDeleteModel(false)]} />}
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-shop-title_view">
            <h1>Your Shop</h1>
            <SearchView />
            <div className="alpha_my_Shop-add_product_button_view">
              <h5>+ Add Product</h5>
            </div>
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-shop_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>
          {myProductsArray.length > 0 ?
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Condition</th>
                  <th>In Stock</th>
                  <th>Price</th>
                  <th>Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {myProductsArray.map((item) => {
                return (
                  <tbody key={item.id}>
                    <tr>
                      <td style={{ width: 50 }}>-{item.id}</td>
                      <td style={{ width: 370 }}>{item.title}</td>
                      <td style={{ width: 100 }}> <div style={{ backgroundColor: item.condition === 'Used' ? '#0096CC' : '#26D1A0', }} className="alpha-my_shop-table_data_new_view">
                        <h6> {item.condition}</h6>
                      </div>
                      </td>
                      <td style={{ width: 120 }} >{item.inStock}</td>
                      <td style={{ width: 100 }}>{item.price}</td>
                      <td style={{ width: 150 }} >{item.type}</td>
                      <td><div className="alpha-my_shop-table_data_edit_view">
                        <h5 >Edit</h5>
                        <h5 onClick={() => [setShowDeleteModel(true), setSelectedId(item)]}>Delete</h5>
                      </div></td>
                    </tr>
                  </tbody>
                )
              })}
            </table>
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
