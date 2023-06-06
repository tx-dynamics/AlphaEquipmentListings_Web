import React, { useEffect, useState } from 'react'
import { TextInputAdminFinance } from '..'
import { api } from '../../network/Environment'
import { Method, callApi } from '../../network/NetworkManger'
import { useSnackbar } from 'react-simple-snackbar'
import { snakbarOptions } from '../../globalData'
import './financingStepOneAdmin.css'

export default function FinancingStepOneAdmin(props) {
    const { pageData, type } = props
    const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
    const [startDate, setStartDate] = useState(pageData?.startDate ? pageData?.startDate : '')
    const [startTime, setStartTime] = useState(pageData?.startTime ? pageData?.startTime : '')
    const [selectedEndDate, setSelectedEndDate] = useState(pageData?.selectedEndDate ? pageData?.selectedEndDate : '')
    const [name, setName] = useState(pageData?.productName ? pageData?.productName : pageData?.name ? pageData?.name : '')
    const [startingPrice, setStartingPrice] = useState(pageData?.price ? pageData?.price : pageData?.startingPrice ? pageData?.startingPrice : '')
    const [usage, setUsage] = useState(pageData?.usage ? pageData?.usage : '')
    const [Mileage, setMileage] = useState(pageData?.Mileage ? pageData?.Mileage : '')
    const [categoryArray, setCategoryArray] = useState([])
    const [selectedCategory, setSelectedCategory] = useState({ categoryName: pageData?.category ? pageData?.category : '' })
    const [categoryDropdown, setCategoryDropdown] = useState(false)
    const [subcategoryArray, setSubCategoryArray] = useState([])
    const [selectedSubCategory, setSelectedSubCategory] = useState({ title: pageData?.subCategory ? pageData?.subCategory : '' })
    const [subCategoryDropDown, setSubCategoryDropDown] = useState(false)
    const [selectedProductType, setSelectedProductType] = useState({ title: pageData?.productType?.title ? pageData?.productType?.title : pageData?.productType ? pageData?.productType : 'Machine' })
    const selectedProductTypeArray = [
        {
            id: 1,
            title: 'Machine'
        },
        {
            id: 2,
            title: 'Spare Part'
        },

    ]
    const [selectedEquipmentType, setSelectedEquipmentType] = useState({ title: pageData?.equipmentType?.title ? pageData?.equipmentType?.title : pageData?.equipmentType ? pageData?.equipmentType : 'New' })
    const selectedEquipmentTypeArray = [
        {
            id: 1,
            title: 'New'
        },
        {
            id: 2,
            title: 'Old'
        },

    ]
    const [selectedAuctionType, setSelectedAuctionType] = useState({ title: pageData?.select?.title ? pageData?.select?.title : pageData?.select ? pageData?.select : 'Fix price', })
    const selectedAuctionTypeArray = [
        {
            id: 1,
            title: 'Fix price',
        },
        {
            id: 2,
            title: 'Auction',
        },
    ]
    const [selectedOwningType, setSelectedOwningType] = useState({ title: pageData?.rentOrSell?.title ? pageData?.rentOrSell?.title : pageData?.rentOrSell ? pageData?.rentOrSell : 'Rent', })
    const selectedOwningTypeArray = [
        {
            id: 1,
            title: 'Rent',
        },
        {
            id: 2,
            title: 'Sell',
        },
    ]
    const compareDates = new Date(startDate).getTime() < new Date(selectedEndDate).getTime()
    const buttonValueOne = startingPrice.toString().length > 0 && name.length > 0 && usage.length > 0 && Mileage.length > 0 && selectedCategory.categoryName.length > 0 && selectedSubCategory.title?.length > 0
    const buttonValueTwo = startingPrice.toString().length > 0 && name.length > 0 && usage.length > 0 && startDate.toString().length > 0 && startTime.toString().length > 0 && Mileage.length > 0 && compareDates && selectedCategory.categoryName.length > 0 && selectedSubCategory.title?.length > 0
    const buttonValueThree = startingPrice.toString().length > 0 && name.length > 0 && usage.length > 0

    const onPressNext = () => {
        let currentDatee = new Date(startDate)
        let endDateNew = new Date(selectedEndDate).getTime()
        const hoursToAdd = startTime.slice(0, 2); // Example: 2 hours
        const minutesToAdd = startTime.slice(3, 5);
        currentDatee.setHours(0 + hoursToAdd);
        currentDatee.setMinutes(0 + minutesToAdd);
        const sparePart = {
            productType: selectedProductType,
            equipmentType: selectedEquipmentType,
            startingPrice: startingPrice,
            name: name,
            usage: usage,
        }
        const machineOne = {
            productType: selectedProductType,
            equipmentType: selectedEquipmentType,
            select: selectedAuctionType,
            rentOrSell: selectedOwningType,
            name: name,
            startingPrice: startingPrice,
            usage: usage,
            Mileage: Mileage,
            category: selectedCategory?.categoryName,
            subCategory: selectedSubCategory?.title
        }
        const machineTwo = {
            productType: selectedProductType,
            equipmentType: selectedEquipmentType,
            select: selectedAuctionType,
            name: name,
            usage: usage,
            startingPrice: startingPrice,
            auctionStartDate: currentDatee.getTime(),
            auctionEndDate: endDateNew,
            startDate: startDate,
            startTime: startTime,
            selectedEndDate: selectedEndDate,
            Mileage: Mileage,
            category: selectedCategory?.categoryName,
            subCategory: selectedSubCategory?.title
        }
        props.onClickNext(selectedProductType.title === 'Machine' ? selectedProductType.title === 'Machine' && selectedAuctionType.title === 'Auction' ? machineTwo : machineOne : sparePart)
    }

    useEffect(() => {
        getAllCategories()
    }, []);

    const getAllCategories = async () => {
        try {
            const endPoint = api.category;
            await callApi(Method.GET, endPoint, null,
                res => {
                    if (res?.status === 200) {
                        let arr = [...res?.data?.categories]
                        for (var i = 0; i < arr.length; i++) {
                            arr[i]['title'] = res?.data?.categories[i].categoryName
                        }
                        setCategoryArray(arr)
                    }
                    else {
                        showMessage(res?.message)
                    }
                },
                err => {
                    showMessage(err.message)
                });
        } catch (error) {
            console.log(error);
        }
    }

    const selectCategoryAndSubCategory = (data) => {
        setSelectedSubCategory('')
        setCategoryDropdown(false)
        setSelectedCategory(data)
        var arr = data?.subCategories.map((str) => ({ title: str.name, }));
        setSubCategoryArray(arr)
    }

    return (
        <div className='alpha-finance_step-admin_top_view'>
            <div className="alpha-financing-radia_view_top_view">
                <h2>Select Product type</h2>
                {selectedProductTypeArray.map((item, index) => {
                    return (
                        <div onClick={() => type === 'edit' ? null : setSelectedProductType(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                            <div style={{ backgroundColor: item.title === selectedProductType.title ? '#F18805' : 'transparent' }} />
                            <h3>
                                {item.title}
                            </h3>
                        </div>
                    )
                })}
            </div>
            <div className="alpha-financing-radia_view_top_view">
                <h2>Equipment Type</h2>
                {selectedEquipmentTypeArray.map((item, index) => {
                    return (
                        <div onClick={() => type === 'edit' ? null : setSelectedEquipmentType(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                            <div style={{ backgroundColor: item.title === selectedEquipmentType.title ? '#F18805' : 'transparent' }} />
                            <h3>
                                {item.title}
                            </h3>
                        </div>
                    )
                })}
            </div>
            {selectedProductType.title === 'Machine' &&
                <div className="alpha-financing-radia_view_top_view">
                    <h2>Auction or Fix price</h2>
                    {selectedAuctionTypeArray.map((item, index) => {
                        return (
                            <div onClick={() => type === 'edit' ? null : setSelectedAuctionType(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                                <div style={{ backgroundColor: item.title === selectedAuctionType.title ? '#F18805' : 'transparent' }} />
                                <h3>
                                    {item.title}
                                </h3>
                            </div>
                        )
                    })}
                </div>
            }
            {selectedAuctionType.title === 'Fix price' && selectedProductType.title === 'Machine' &&
                <div className="alpha-financing-radia_view_top_view">
                    <h2>Rent or Sell</h2>
                    {selectedOwningTypeArray.map((item, index) => {
                        return (
                            <div onClick={() => type === 'edit' ? null : setSelectedOwningType(item)} key={index} className="alpha-financing-radia_view_image_top_view">
                                <div style={{ backgroundColor: item.title === selectedOwningType.title ? '#F18805' : 'transparent' }} />
                                <h3>
                                    {item.title}
                                </h3>
                            </div>
                        )
                    })}
                </div>
            }
            <div className='alpha-financing-step_one_admin_inputs_top_view'>
                {selectedProductType.title === 'Machine' &&
                    <div className='alpha_margin_right'>
                        <TextInputAdminFinance
                            disabled
                            selectedValue={(data) => selectCategoryAndSubCategory(data)}
                            value={selectedCategory?.categoryName}
                            onClickDropDown={() => type === 'edit' ? null : setCategoryDropdown(!categoryDropdown)}
                            dropDownArray={categoryArray.length > 0 && categoryArray}
                            dropDownValue={categoryDropdown}
                            type={'dropdown'}
                            title={'Select Category'}
                            placeholder={'Select catagory'} />
                    </div>
                }
                {selectedCategory && selectedProductType.title === 'Machine' &&
                    <div className='alpha_margin_right'>
                        <TextInputAdminFinance
                            disabled
                            selectedValue={(data) => [setSubCategoryDropDown(false), setSelectedSubCategory(data)]}
                            value={selectedSubCategory?.title}
                            onClickDropDown={() => selectedCategory?.categoryName ? type === 'edit' ? null : setSubCategoryDropDown(!categoryDropdown) : null}
                            dropDownArray={subcategoryArray.length > 0 && subcategoryArray}
                            dropDownValue={subCategoryDropDown}
                            type={'dropdown'}
                            title={'Select Sub Category'}
                            placeholder={'Select sub catagory'} />
                    </div>
                }
                {selectedProductType.title === 'Machine' ?
                    <>
                        <div className='alpha_margin_right'>
                            <TextInputAdminFinance
                                onChange={(e) => setName(e.target.value)}
                                title={'Product Name'}
                                value={name}
                                placeholder={'Enter product name'} />
                        </div>
                        <div className='alpha_margin_right'>
                            <TextInputAdminFinance
                                onChange={(e) => setStartingPrice(e.target.value)}
                                value={startingPrice.toString()}
                                title={selectedAuctionType.title === 'Fix price' ? 'Price' : 'Starting Price'}
                                placeholder={'Enter price'} />
                        </div>
                        <div className='alpha_margin_right'>
                            <TextInputAdminFinance
                                onChange={(e) => setUsage(e.target.value)}
                                title={'Usage'}
                                value={usage}
                                placeholder={'Enter usage of equipment'} />
                        </div>
                    </>
                    :
                    <>
                        <div className='alpha_margin_right'>
                            <TextInputAdminFinance
                                onChange={(e) => setName(e.target.value)}
                                title={'Product Name'}
                                value={name}
                                placeholder={'Enter product name'} />
                        </div>
                        <div className='alpha_margin_right'>
                            <TextInputAdminFinance
                                onChange={(e) => setStartingPrice(e.target.value)}
                                title={'Price'}
                                value={startingPrice.toString()}
                                placeholder={'Enter price'} />
                        </div>
                        <div className='alpha_margin_right'>
                            <TextInputAdminFinance
                                onChange={(e) => setUsage(e.target.value)}
                                title={'Usage'}
                                value={usage}
                                placeholder={'Enter usage of equipment'} />
                        </div>
                    </>
                }
                {selectedProductType.title === 'Machine' && selectedAuctionType.title === 'Auction' &&
                    <>
                        <div className='alpha_margin_right'>
                            <TextInputAdminFinance
                                onChange={(e) => [setStartDate(e.target.value)]}
                                title={'Auction Start Date'}
                                value={startDate}
                                type={'date'}
                                placeholder={'Enter usage of equipment'} />
                        </div>
                        <div className='alpha_margin_right'>
                            <TextInputAdminFinance
                                onChange={(e) => [setStartTime(e.target.value)]}
                                title={'Auction Start Time'}
                                value={startTime}
                                type={'time'}
                                placeholder={'00:00'} />
                        </div>
                        <div className='alpha_margin_right'>
                            <TextInputAdminFinance
                                onChange={(e) => [setSelectedEndDate(e.target.value)]}
                                title={'Auction End Date'}
                                value={selectedEndDate} type={'date'}
                                placeholder={'03/12/18'} />
                        </div>
                    </>
                }
                {selectedProductType.title === 'Machine' &&
                    <div className='alpha_margin_right'>
                        <TextInputAdminFinance
                            onChange={(e) => setMileage(e.target.value)}
                            title={'Mileage'}
                            value={Mileage}
                            placeholder={'Enter milage of equipment'} />
                    </div>
                }
            </div>
            {selectedProductType.title === 'Machine' ? selectedProductType.title === 'Machine' && selectedAuctionType.title === 'Auction' ?
                <div className='alpha-financing-finance_step_one_admin_button'>
                    <div onClick={() => buttonValueTwo ? onPressNext() : showMessage('Please fill all fields')}>
                        <h2>NEXT</h2>
                    </div>
                </div>
                :
                <div className='alpha-financing-finance_step_one_admin_button'>
                    <div onClick={() => buttonValueOne ? onPressNext() : showMessage('Please fill all fields')}>
                        <h2>NEXT</h2>
                    </div>
                </div>
                :
                <div className='alpha-financing-finance_step_one_admin_button'>
                    <div onClick={() => buttonValueThree ? onPressNext() : showMessage('Please fill all fields')}>
                        <h2>NEXT</h2>
                    </div>
                </div>
            }
        </div >
    )
}

