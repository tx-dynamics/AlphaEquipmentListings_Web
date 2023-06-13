import React, { useState } from 'react'
import { GooglePlaceInput, TextInputAdminFinance } from '..'
import { addImage, dummyImage } from '../../assets/icons'
import './financingStepTwoAdmin.css'
import { uploadFilesToS3 } from '../../helpingMethods'

export default function FinancingStepTwoAdmin(props) {
    const { pageData, type } = props
    const [location, setLocation] = useState({ address: '' })
    const [features, setFeatures] = useState(pageData?.features ? pageData?.features : '')
    const [notes, setNotes] = useState(pageData?.catelougeNote ? pageData?.catelougeNote : '')
    const [stock, setStock] = useState(pageData?.stock ? pageData?.stock : '')
    const [model, setModel] = useState(pageData?.equipmentModel ? pageData?.equipmentModel : '')
    const [images, setImages] = useState(pageData?.images ? pageData?.images : [])
    const [imagesFiles, setImagesFiles] = useState([])

    const [typeOfEquipment, setTypeOfEquipment] = useState(pageData?.equipmentType2 ? pageData?.equipmentType2 : '')
    const [typeOfEquipmentDropdown, setTypeOfEquipmentDropdown] = useState(false)
    const typeOfEquipmentArray = [
        {
            id: 1,
            title: 'New',
        },
        {
            id: 2,
            title: 'Old',
        },
    ]

    const buttonValueOne = location?.address?.length > 0 && features.length > 0 && notes.length > 0 && typeOfEquipment.length > 0 && images.length > 0 && stock.toString().length > 0
    const buttonValueTwo = location?.address?.length > 0 && features.length > 0 && notes.length > 0 && typeOfEquipment.length > 0 && images.length > 0 && model.length > 0 && stock.toString().length > 0

    const onPressNext = () => {

        const sparePart = {
            location: location,
            features: features,
            catelougeNote: notes,
            equipmentType2: typeOfEquipment,
            images: images,
            imagesFiles: imagesFiles,
            stock: stock
        }
        const machine = {
            location: location,
            features: features,
            catelougeNote: notes,
            equipmentType2: typeOfEquipment,
            images: images,
            imagesFiles: imagesFiles,
            equipmentModel: model,
            stock: stock

        }
        props.onClickNext(props?.selectedProductType === 'Machine' ? machine : sparePart)
    }

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imagePromises = files.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        });

        Promise.all(imagePromises)
            .then((results) => {
                setImagesFiles(files)
                setImages(results);
            })
            .catch((error) => {
                console.error('Error reading images:', error);
            });
    };

    return (
        <div className='alpha-finance_step-admin_top_view'>
            <div className='alpha-financing-step_one_admin_inputs_top_view'>
                <div className='alpha_margin_right' style={{ marginRight: 65 }}>
                    <GooglePlaceInput
                        onChange={(e) => setLocation(e)}
                        value={location?.address}
                        title={'Location'}
                        placeholder={'Enter your location'} />
                </div>

                <div className='alpha_margin_right'>
                    <TextInputAdminFinance
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        title={'Catalogue Notes:'}
                        placeholder={'Enter Catalogue of equipment'} />
                </div>
                <div className='alpha_margin_right'>
                    <TextInputAdminFinance
                        type="number"
                        value={stock.toString()}
                        onChange={(e) => setStock(e.target.value)}
                        title={'Stock Available:'}
                        placeholder={'Enter Stock'} />
                </div>
                <div className='alpha_margin_right'>
                    <TextInputAdminFinance
                        disabled
                        selectedValue={(data) => [setTypeOfEquipmentDropdown(false), setTypeOfEquipment(data.title)]}
                        value={typeOfEquipment}
                        onClickDropDown={() => setTypeOfEquipmentDropdown(!typeOfEquipmentDropdown)}
                        dropDownArray={typeOfEquipmentArray}
                        dropDownValue={typeOfEquipmentDropdown}
                        type={'dropdown'}
                        title={'Type of Equipment'}
                        placeholder={'Select equipment type'} />
                </div>
                <div className='alpha_margin_right'>
                    <TextInputAdminFinance
                        value={features}
                        onChange={(e) => setFeatures(e.target.value)}
                        textArea
                        title={'Features'}
                        placeholder={'Enter features of equipment'} />
                </div>
                {props?.selectedProductType === 'Machine' &&
                    <div className='alpha_margin_right'>

                        <TextInputAdminFinance
                            value={model}
                            onChange={(e) => setModel(e.target.value)}
                            title={'Equipment model:'}
                            placeholder={'Enter equipment model'} />
                    </div>
                }
            </div>
            <div className='alpha_finance_steps_admin_image_top_view'>
                <h2>Add images of Equipment</h2>
                <div className='alpha_finance_steps_admin_image_view'>
                    <input
                        multiple
                        onChange={(e) => handleImageChange(e)}
                        id="selectFile"
                        type={"file"}
                        style={{ display: "none" }}
                    />
                    <img onClick={() => type === 'edit' ? null : document.getElementById("selectFile").click()} src={addImage} className={'alpha_finance_steps_admin_add_image'} alt={''} />
                    {images.map((image) => {
                        return (
                            <img src={image} className={'alpha_finance_steps_admin_image'} alt={''} />
                        )
                    })}

                </div>
            </div>
            <div className='alpha-financing-finance_step_two_admin_buttons_top_view'>
                <div className='alpha-financing-finance_step_two_admin_back_button' onClick={() => props.onClickBack()}>
                    <h2>BACK</h2>
                </div>
                {props?.selectedProductType === 'Machine' ?
                    <div className='alpha-financing-finance_step_two_admin_next_button' onClick={() => buttonValueTwo ? onPressNext() : null}>
                        <h2>NEXT</h2>
                    </div>
                    :
                    <div className='alpha-financing-finance_step_two_admin_next_button' onClick={() => buttonValueOne ? onPressNext() : null}>
                        <h2>NEXT</h2>
                    </div>
                }
            </div>
        </div>
    )
}

