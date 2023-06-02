import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { completed, dotedTick, emptyCircle, inprogress } from "../../../assets/icons";
import { FinancingStepFourAdmin, FinancingStepOneAdmin, FinancingStepThreeAdmin, FinancingStepTwoAdmin, Loader, SideBar, SubmitModel, TopBar } from "../../../components";
import './editProduct.css'
import { upload, uploadTwo } from "../../../helpingMethods";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import { useSnackbar } from "react-simple-snackbar";
import { snakbarOptions } from "../../../globalData";
export default function EditProduct() {
  const navigate = useNavigate()
  const { state } = useLocation();
  const [isModel, setIsModel] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [pageOneData, setPageOneData] = useState(state?.data)
  const [pageTwoData, setPageTwoData] = useState(state?.data)
  const [pageThreeData, setPageThreeData] = useState(state?.data)
  const [pageFourData, setPageFourData] = useState(state?.data)
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [addProductStepsArray, setAddProductStepsArray] = useState([
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
      title: 'Control Station'
    },
  ])

  const next = (data) => {
    const body = document.querySelector('#steps');
    body.scrollIntoView({
      behavior: 'smooth'
    }, 500)

    if (activeIndex === 3) {
      pageOneData?.productType.title === 'Machine' ?
        addMachineToStore(data)
        :
        addsparePartToStore(data)
    }
    else {
      const array = [...addProductStepsArray]
      array[activeIndex].status = 'completed'
      array[activeIndex + 1].status = 'inprogress'
      setAddProductStepsArray(array)
      setActiveIndex(activeIndex + 1)
    }
  }

  const back = () => {
    const body = document.querySelector('#steps');
    body.scrollIntoView({
      behavior: 'smooth'
    }, 500)
    const array = [...addProductStepsArray]
    array[activeIndex].status = 'empty'
    array[activeIndex - 1].status = 'inprogress'
    setAddProductStepsArray(array)
    setActiveIndex(activeIndex - 1)
  }


  const addsparePartToStore = async (value) => {
    setIsLoading(true)
    try {
      const endPoint = api.product + `/${state?.data?._id}`;
      const data = {
        productType: pageOneData?.productType?.title,
        equipmentType: pageOneData?.equipmentType?.title,
        select: pageOneData?.select?.title,
        price: pageOneData?.startingPrice,
        productName: pageOneData?.name,
        displayTitle: pageOneData?.displayTitle,
        location: pageTwoData?.location,
        stock: pageTwoData?.stock,
        features: pageTwoData?.features,
        catelougeNote: pageTwoData?.catelougeNote,
        equipmentType2: pageTwoData?.equipmentType2,
        message: value?.message
      };
      // console.log(data);
      // return
      await callApi(Method.PATCH, endPoint, data,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            setIsModel(true)
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

  const addMachineToStore = async (data) => {
    setIsLoading(true)
    try {
      const endPoint = api.product + `/${state?.data?._id}`;
      const data = {
        productType: pageOneData?.productType?.title,
        equipmentType: pageOneData?.equipmentType?.title,
        select: pageOneData?.select?.title,
        catogory: pageOneData?.category,
        subCategory: pageOneData?.subCategory,
        rentOrSell: pageOneData?.rentOrSell?.title ? pageOneData?.rentOrSell?.title : '',
        price: pageOneData?.startingPrice,
        productName: pageOneData?.name,
        usage: pageOneData?.usage,
        Mileage: pageOneData?.Mileage,
        auctionStartDate: pageOneData?.auctionStartDate ? pageOneData?.auctionStartDate : '',
        auctionEndDate: pageOneData?.auctionEndDate ? pageOneData?.auctionEndDate : '',
        location: pageTwoData?.location,
        features: pageTwoData?.features,
        stock: pageTwoData?.stock,
        catelougeNote: pageTwoData?.catelougeNote,
        equipmentType2: pageTwoData?.equipmentType2,
        equipmentModel: pageTwoData?.equipmentModel,
        serialNumber: pageThreeData?.serialNumber,
        odometer: pageThreeData?.odometer,
      };
      await callApi(Method.PATCH, endPoint, data,
        res => {
          if (res?.status === 200) {
            setIsLoading(false)
            setIsModel(true)
          }
          else {
            setIsLoading(false)
            showMessage(res?.message)
          }
        },
        err => {
          showMessage(err.message)
          setIsLoading(false);
          console.log(err)

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
      {isModel && <SubmitModel onClick={() => navigate(-1)} icon={dotedTick} title={'updated successfully'} />}

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
            {addProductStepsArray.map((item, index) => {
              return (
                <div key={index} className="alpha-add_product-steps">
                  <img src={item.status === 'inprogress' ? inprogress : item.status === 'completed' ? completed : emptyCircle} />
                  {addProductStepsArray.length === index + 1 ?
                    null
                    :
                    <div style={{ borderBottomColor: item.status === 'completed' ? '#F18805' : '#D1D5DB' }} />
                  }
                </div>
              )
            })}
          </div>
          <div className="alpha_add_product_steps_des_view">
            <h5>{addProductStepsArray[activeIndex].title}</h5>
          </div>
          <div className={"alpha_custom_style_for_add_product"}>
            {activeIndex === 0 ?
              <FinancingStepOneAdmin type={'edit'} pageData={pageOneData} onClickNext={(data) => [setPageOneData(data), next(data)]} />
              :
              activeIndex === 1 ?
                <FinancingStepTwoAdmin type={'edit'} pageData={pageTwoData} selectedProductType={pageOneData?.productType?.title} onClickBack={() => back()} onClickNext={(data) => [setPageTwoData(data), next(data)]} />
                :
                activeIndex === 2 ?
                  <FinancingStepThreeAdmin type={'edit'} pageData={pageThreeData} selectedProductType={pageOneData?.productType?.title} onClickBack={() => back()} onClickNext={(data) => [setPageThreeData(data), next(data)]} />
                  :
                  <FinancingStepFourAdmin type={'edit'} pageData={pageFourData} selectedProductType={pageOneData?.productType?.title} onClickBack={() => back()} onClickNext={(data) => [setPageFourData(data), next(data)]} />
            }
          </div>
        </div>
      </div>
    </div>
  );
}
