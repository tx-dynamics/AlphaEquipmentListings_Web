import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { completed, dotedTick, emptyCircle, inprogress } from "../../../assets/icons";
import { FinancingStepFourAdmin, FinancingStepOneAdmin, FinancingStepThreeAdmin, FinancingStepTwoAdmin, SideBar, SubmitModel, TopBar } from "../../../components";
import './addProduct.css'
export default function AddProduct() {
  const navigate = useNavigate()
  const { state } = useLocation();

  const [successfullModel, setSuccessfullModel] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedProductType, setSelectedProductType] = useState()
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
  const next = () => {
    const body = document.querySelector('#steps');
    body.scrollIntoView({
      behavior: 'smooth'
    }, 500)
    if (activeIndex === 3) {
      setSuccessfullModel(true)
    }
    else {
      const array = [...addProductArray]
      array[activeIndex].status = 'completed'
      array[activeIndex + 1].status = 'inprogress'
      setAddProductArray(array)
      setActiveIndex(activeIndex + 1)
    }
  }

  const back = () => {
    const body = document.querySelector('#steps');
    body.scrollIntoView({
      behavior: 'smooth'
    }, 500)
    const array = [...addProductArray]
    array[activeIndex].status = 'empty'
    array[activeIndex - 1].status = 'inprogress'
    setAddProductArray(array)
    setActiveIndex(activeIndex - 1)
  }

  const onComplete = () => {
    const array = [...addProductArray]
    for (var i = 0; i < array.length; i++) {
      if (i === 0) {
        array[i].status = 'inprogress'

      }
      else {
        array[i].status = 'empty'

      }
    }
    setAddProductArray(array)
    setActiveIndex(0)
    setSuccessfullModel(false)
  }
  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      {successfullModel && <SubmitModel onClick={() => onComplete()} icon={dotedTick} title={state?.screen === 'add' ? 'added successfully' : 'Updated successfully'} />}

      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-shop-container">
          <div className="alpha-shop-title_view">
            <h1>Add Product</h1>
            {state?.screen === 'edit' &&
              <div className="alpha_save_button_view">
                <h4>Save</h4>
              </div>
            }
          </div>
          <div className="alpha-shop_dividers_top_view">
            <div className="alpha-shop_divider_one" />
            <div className="alpha-shop_divider_two" />
            <div className="alpha-shop_divider_three" />
          </div>
          <div className="alpha_add_product_des_view">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium orci vel ante posuere, et pharetra magna consectetur.</p>
          </div>
          <div id={'steps'} className="alpha_add_product_steps_count_view">
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
          <div className={activeIndex === 2 && selectedProductType === 2 ? "alpha_custom_style_for_add_product" : ''}>
            {activeIndex === 0 ?
              <FinancingStepOneAdmin onClickNext={(id) => [setSelectedProductType(id), next()]} />
              :
              activeIndex === 1 ?
                <FinancingStepTwoAdmin type={selectedProductType} onClickBack={() => back()} onClickNext={() => next()} />
                :
                activeIndex === 2 ?
                  <FinancingStepThreeAdmin type={selectedProductType} onClickBack={() => back()} onClickNext={() => next()} />
                  :
                  <FinancingStepFourAdmin type={selectedProductType} onClickBack={() => back()} onClickNext={() => next()} />
            }
          </div>
        </div>
      </div>
    </div>
  );
}
