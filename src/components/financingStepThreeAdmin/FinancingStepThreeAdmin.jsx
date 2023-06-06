import React, { useState } from 'react'
import { TextInputAdminFinance } from '..'
import { addImage } from '../../assets/icons'
import './financingStepThreeAdmin.css'

export default function FinancingStepThreeAdmin(props) {
    const { pageData, type } = props
    const [serialNumber, setSerialNumber] = useState(pageData?.serialNumber ? pageData?.serialNumber : '')
    const [serialNumberImage, setSerialNumberImage] = useState(typeof pageData?.serialNumberImage === 'string' ? pageData?.serialNumberImage : typeof pageData?.serialNumberImage === 'object' ? pageData?.serialNumberImage[0] : [])
    const [serialNumberFileImage, setSerialNumberFileImage] = useState([])
    const [odometer, setOdometer] = useState(pageData?.odometer ? pageData?.odometer : '')
    const [additionalImages, setAdditionalImages] = useState(pageData?.additionalImages ? pageData?.additionalImages : [])
    const [additionalFileImages, setAdditionalFileImages] = useState([])

    const buttonValueOne = serialNumber.length > 0 && serialNumberImage.length > 0 && odometer.length > 0 && additionalImages.length > 0
    const buttonValueTwo = additionalImages.length > 0


    const onPressNext = () => {
        const sparePart = {
            additionalImages: additionalImages,
            additionalFileImages: additionalFileImages,

        }
        const machine = {
            serialNumber: serialNumber,
            serialNumberImage: [serialNumberImage],
            serialNumberFileImage: serialNumberFileImage,
            odometer: odometer,
            additionalImages: additionalImages,
            additionalFileImages: additionalFileImages,
        }
        props.onClickNext(props?.selectedProductType === 'Machine' ? machine : sparePart)
    }

    const handleImageChange = (e, type) => {
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
                type === 1 ? setSerialNumberImage(results) : setAdditionalImages(results);
                type === 1 ? setSerialNumberFileImage(files) : setAdditionalFileImages(files);

            })
            .catch((error) => {
                console.error('Error reading images:', error);
            });
    };


    return (
        <div className='alpha-finance_step-admin_top_view'>
            {props?.selectedProductType === 'Machine' &&
                <>
                    <div className='alpha-financing-step_one_admin_inputs_top_view'>
                        <div className='alpha_margin_right'>
                            <TextInputAdminFinance
                                value={serialNumber}
                                onChange={(e) => setSerialNumber(e.target.value)}
                                title={'Serial Number'}
                                placeholder={'Enter serial number'} />
                        </div>
                    </div>
                    <div className='alpha_finance_steps_admin_image_top_view'>
                        <h2>Add images of Serial Number</h2>
                        <input
                            onChange={(e) => handleImageChange(e, 1)}
                            id="selectSerialImage"
                            type={"file"}
                            style={{ display: "none" }}
                        />
                        <div onClick={() => type === 'edit' ? null : document.getElementById("selectSerialImage").click()} className='alpha_finance_steps_admin_image_view'>
                            <img
                                src={serialNumberImage?.length > 0 ? serialNumberImage : addImage} className={'alpha_finance_steps_admin_add_image'} alt={''} />
                        </div>
                    </div>
                    <div className='alpha-financing-step_one_admin_inputs_top_view'>
                        <div className='alpha_margin_right'>
                            <TextInputAdminFinance
                                value={odometer}
                                onChange={(e) => setOdometer(e.target.value)}
                                title={'Odometer'}
                                placeholder={'Add odometer reading'} />
                        </div>
                    </div>
                </>
            }
            <div className='alpha_finance_steps_admin_image_top_view'>
                <h2>Add Additional Images of Equipment</h2>
                <div className='alpha_finance_steps_admin_image_view'>
                    <img onClick={() => type === 'edit' ? null : document.getElementById("selectImages").click()}
                        src={addImage} className={'alpha_finance_steps_admin_add_image_two'} alt={''} />
                    <input
                        multiple
                        onChange={(e) => handleImageChange(e, 2)}
                        id="selectImages"
                        type={"file"}
                        style={{ display: "none" }}
                    />
                    {additionalImages.map((image) => {
                        return (
                            <img src={image} className={'alpha_finance_steps_admin_image_two'} alt={''} />
                        )
                    })}
                </div>
            </div>
            <div className='alpha-financing-finance_step_two_admin_buttons_top_view'>
                <div className='alpha-financing-finance_step_two_admin_back_button' onClick={() => props.onClickBack()}>
                    <h2>BACK</h2>
                </div>
                {props?.selectedProductType === 'Machine' ?
                    <div className='alpha-financing-finance_step_two_admin_next_button' onClick={() => buttonValueOne ? onPressNext() : null}>
                        <h2>NEXT</h2>
                    </div>
                    :
                    <div className='alpha-financing-finance_step_two_admin_next_button' onClick={() => buttonValueTwo ? onPressNext() : null}>
                        <h2>NEXT</h2>
                    </div>
                }
            </div>
        </div>
    )
}

