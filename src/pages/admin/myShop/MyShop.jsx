import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "react-simple-snackbar";

import { Loader, SearchView, SideBar, TopBar } from "../../../components";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import { snakbarOptions } from "../../../globalData";
import './myShop.css'

export default function MyShop() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [storeProducts, setStoreProducts] = useState([])
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)

  useEffect(() => {
    getStoreProducts();
  }, []);

  const getStoreProducts = async () => {
    setIsLoading(true)
    try {
      const endPoint = api.product;
      await callApi(Method.GET, endPoint, null,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            setStoreProducts(res?.data?.products)
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
            <h1>Your Shop</h1>
            <SearchView />
            <div onClick={() => navigate('/addproduct')} className="alpha_my_Shop-add_product_button_view">
              <h5>+ Add Product</h5>
            </div>
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-shop_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>
          {storeProducts.length > 0 ?
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
                  {storeProducts.map((item, index) => {
                    return (
                      <tr>
                        <td data-label={''} >-{index + 1}</td>
                        <td data-label={'Name'} className={'alpha_my_shop_title_style'}>{item?.productName}</td>
                        <td data-label={'Condition'}> <div className="alpha-my_shop-table_data_new_view">
                          <h6>{item?.equipmentType}</h6>
                        </div>
                        </td>
                        <td data-label={'In Stock'} >{item?.stock}</td>
                        <td data-label={'Price'} >${item?.price}</td>
                        <td data-label={'Type'} >{item?.productType}</td>
                        <td data-label={'Action'}><div className="alpha-my_shop-table_data_edit_view">
                          <h5 onClick={() => navigate('/editproduct', { state: { data: item } })}
                          >Edit</h5>
                          <h5
                          //onClick={() => [setShowDeleteModel(true)]}
                          >
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
