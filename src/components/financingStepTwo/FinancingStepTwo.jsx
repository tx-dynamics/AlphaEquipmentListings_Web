import React, { useState } from 'react'
import { TextInputTwo } from '../'
import { financingLogo } from '../../assets/icons'
import { api } from '../../network/Environment'
import { Method, callApi } from '../../network/NetworkManger'
import { useSnackbar } from 'react-simple-snackbar'
import { snakbarOptions } from '../../globalData'
import './financingStepTwo.css'

export default function FinancingStepTwo(props) {
    const { value } = props
    const [downPayment, setDownPayment] = useState(value?.downPayment ? value?.downPayment : '')
    const [searchedProduct, setSearchedProduct] = useState([])
    const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
    const [selectedValue, setSelectedValue] = useState({ price: value?.price ? value?.price : '', productName: value?.productName ? value?.productName : '' })
    const [dropdownShow, setDropdownShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [backEvent, setBackEvent] = useState(false)

    const onPressNext = () => {
        const data = {
            productId: selectedValue?._id,
            price: selectedValue?.price,
            productName: selectedValue?.productName,
            downPayment: downPayment,
        }
        selectedValue?.productName ? props.onClickNext(data) : showMessage('Please select product')
    }

    const getSearchProduct = async (text) => {
        setIsLoading(true)
        try {
            const endPoint = api.buyerDashboard + `?search=${text}`;
            await callApi(Method.GET, endPoint, null,
                res => {
                    if (res?.status === 200) {
                        setSearchedProduct(res?.data?.products)
                        setDropdownShow(res?.data?.products?.length > 0 ? true : false)
                        setIsLoading(false)

                    }
                    else {
                        showMessage(res?.message)
                        setIsLoading(false)
                    }
                },
                err => {
                    showMessage(err.message)
                    setIsLoading(false)
                });
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }

    const applyDebounce = (fun, d) => {
        // setSelectedValue({})
        let timer;
        return (text) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                text?.length > 0 ?
                    fun(text)
                    :
                    setDropdownShow(false)
            }, d);
        }
    }
    const searchMainFun = applyDebounce(getSearchProduct, 500)


    return (
        <div>
            <div className="alpha-financing-finance_step_one_top_view">
                <div className="alpha-financing-finance_step_one_view">
                    <h1>Tell us about your equipment Information</h1>
                    <div className='alpha-financing-step_one_inputs_top_view'>
                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Equipment Name'}
                            onChange={(e) => searchMainFun(e.target.value)}
                            placeholder={'Search equipment'}
                            dropDownValue={dropdownShow}
                            dropDownArray={searchedProduct.length > 0 ? searchedProduct : []}
                            dropDownStyle={{ width: '100%', left: 0 }}
                            api={true}
                            selectedValue={(item) => [setSelectedValue(item), setDropdownShow(false)]}
                            value={selectedValue?.productName}
                            loader={isLoading}
                            onKeyDown={() => [setDropdownShow(false), setSelectedValue({})]}
                        />

                        <TextInputTwo
                            style={{ paddingBottom: 4 }}
                            title={'Purchase Price'}
                            placeholder={'purchase price'}
                            value={selectedValue?.price}
                            disabled
                        />
                        <TextInputTwo
                            type="number"
                            style={{ paddingBottom: 4 }}
                            title={'Down Payment (if any)'}
                            placeholder={'Enter down payment'}
                            value={downPayment}
                            onChange={(e) => setDownPayment(e.target.value)}
                        />
                    </div>

                </div>
                <div className="alpha-financing-finance_step_one_image_view">
                    <img src={financingLogo} />
                </div>
            </div>
            <div className='alpha-financing-finance_step_two_buttons_top_view'>
                <div className='alpha-financing-finance_step_two_back_button' onClick={() => props.onClickBack()}>
                    <h2>BACK</h2>
                </div>
                <div className='alpha-financing-finance_step_two_next_button' onClick={() => onPressNext()}>
                    <h2>NEXT</h2>
                </div>
            </div>
        </div>
    )
}

