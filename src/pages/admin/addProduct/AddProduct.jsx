import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { completed, dotedTick, emptyCircle, inprogress } from "../../../assets/icons";
import { SideBar, SubmitModel, TopBar } from "../../../components";
import './addProduct.css'
export default function AddProduct() {
  const navigate = useNavigate()
  const [successfullModel, setSuccessfullModel] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [addProductArray, setAddProductArray] = useState([
    {
      id: 0,
      status: 'inprogress',
      title: 'Equipment Info'
    },
    {
      id: 1,
      status: 'empty',
      title: 'Detailed Information'
    },
    {
      id: 2,
      status: 'empty',
      title: 'General Appearance'
    },
    {
      id: 3,
      status: 'empty',
      title: 'Control Station (optional)'
    },
  ])
  // const next = () => {
  //   const body = document.querySelector('#steps');
  //   body.scrollIntoView({
  //     behavior: 'smooth'
  //   }, 500)
  //   if (activeIndex === 4) {
  //     setShowModel(true)
  //   }
  //   else {
  //     const array = [...addProductArray]
  //     array[activeIndex].status = 'completed'
  //     array[activeIndex + 1].status = 'inprogress'
  //     setAddProductArray(array)
  //     setActiveIndex(activeIndex + 1)
  //   }
  // }

  // const back = () => {
  //   const body = document.querySelector('#steps');
  //   body.scrollIntoView({
  //     behavior: 'smooth'
  //   }, 500)
  //   const array = [...addProductArray]
  //   array[activeIndex].status = 'empty'
  //   array[activeIndex - 1].status = 'inprogress'
  //   setAddProductArray(array)
  //   setActiveIndex(activeIndex - 1)
  // }

  // const onComplete = () => {
  //   setActiveIndex(0)
  //   setShowModel(false)
  //   navigate('/homepage')
  // }
  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      {successfullModel && <SubmitModel onClick={() => [setSuccessfullModel(false), navigate('/myshop')]} icon={dotedTick} title={'Congratulations!'} des={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis fringilla eros, sit amet auctor justo accumsan et.'} />}

      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-shop-title_view">
            <h1>Add Product</h1>
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-shop_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>
          <div className="alpha_add_product_des_view">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium orci vel ante posuere, et pharetra magna consectetur.</p>
          </div>
          <div className="alpha_add_product_steps_count_view">
            {addProductArray.map((item, index) => {
              return (
                <div key={index} className="alpha-add_product-steps">
                  <img src={item.status === 'inprogress' ? inprogress : item.status === 'completed' ? completed : emptyCircle} />
                  {addProductArray.length === index + 1 ?
                    null
                    :
                    <div style={{ borderBottomColor: item.status === 'completed' ? '#F18805' : '#D1D5DB' }} />
                  }
                </div>
              )
            })}
          </div>
          <div className="alpha_add_product_steps_des_view">
            <h5>{addProductArray[activeIndex].title}<span style={{ fontWeight: 300, color: '#898989' }}>{activeIndex === 0 && ' (optional)'}</span></h5>
          </div>


        </div>

      </div>
    </div>
  );
}
