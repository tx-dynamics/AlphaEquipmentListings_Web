import React, { useState } from 'react'
import { addImage } from '../../assets/icons'
import './financingStepFourAdmin.css'
import TextInputAdminFinance from '../textInputAdminFinance/TextInputAdminFinance'

export default function FinancingStepFourAdmin(props) {
    const { pageData, type } = props
    const [message, setMessage] = useState(pageData?.message ? pageData?.message : '')

    const [controlStationImages, setControlStationImages] = useState(pageData?.controlImages ? pageData?.controlImages : [])
    const [controlStationFileImages, setControlStationFileImages] = useState([])

    const [engineImages, setEngineImages] = useState(pageData?.engineImages ? pageData?.engineImages : [])
    const [engineFileImages, setEngineFileImages] = useState([])

    const [chassisImages, setChassisImages] = useState(pageData?.chassisImages ? pageData?.chassisImages : [])
    const [chassisFileImages, setChassisFileImages] = useState([])

    const [undercarriageImage, setUndercarriageImage] = useState(pageData?.undercarrigeImages ? pageData?.undercarrigeImages : [])
    const [undercarriageFileImage, setUndercarriageFileImage] = useState([])

    const buttonValueOne = message.length > 0
    const buttonValueTwo = controlStationImages.length > 0 && engineImages.length > 0 && chassisImages.length > 0 && undercarriageImage.length > 0

    const onPressNext = () => {
        const sparePart = {
            message: message
        }
        const machine = {
            controlImages: controlStationImages,
            controlFileImages: controlStationFileImages,
            engineImages: engineImages,
            engineFileImages: engineFileImages,
            chassisImages: chassisImages,
            chassisFileImages: chassisFileImages,
            undercarrigeImages: undercarriageImage,
            undercarrigeFileImages: undercarriageFileImage
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
                type === 1 ? setControlStationImages(results) :
                    type === 2 ? setEngineImages(results) :
                        type === 3 ? setChassisImages(results) :
                            setUndercarriageImage(results);
                type === 1 ? setControlStationFileImages(files) :
                    type === 2 ? setEngineFileImages(files) :
                        type === 3 ? setChassisFileImages(files) :
                            setUndercarriageFileImage(files);
            })
            .catch((error) => {
                console.error('Error reading images:', error);
            });
    };

    return (
        <div className='alpha-finance_step-admin_top_view'>
            {props?.selectedProductType === 'Machine' ?
                <>
                    <div className='alpha_finance_steps_admin_image_top_view'>
                        <h2>Add Control Stationl Images:</h2>
                        <div className='alpha_finance_steps_admin_image_view'>
                            <img onClick={() => type === 'edit' ? null : document.getElementById("controlStation").click()}
                                src={addImage} className={'alpha_finance_steps_admin_add_image_two'} alt={''} />
                            <input
                                multiple
                                onChange={(e) => handleImageChange(e, 1)}
                                id="controlStation"
                                type={"file"}
                                style={{ display: "none" }}
                            />
                            {controlStationImages.map((image) => {
                                return (
                                    <img src={image} className={'alpha_finance_steps_admin_image_two'} alt={''} />
                                )
                            })}
                        </div>
                    </div>
                    <div className='alpha_finance_steps_admin_image_top_view'>
                        <h5>Engine </h5>
                        <h2>Add Engine Images:</h2>
                        <div className='alpha_finance_steps_admin_image_view'>
                            <img onClick={() => type === 'edit' ? null : document.getElementById("engineImages").click()}
                                src={addImage} className={'alpha_finance_steps_admin_add_image_two'} alt={''} />
                            <input
                                multiple
                                onChange={(e) => handleImageChange(e, 2)}
                                id="engineImages"
                                type={"file"}
                                style={{ display: "none" }}
                            />
                            {engineImages.map((image) => {
                                return (
                                    <img src={image} className={'alpha_finance_steps_admin_image_two'} alt={''} />
                                )
                            })}
                        </div>
                    </div>
                    <div className='alpha_finance_steps_admin_image_top_view'>
                        <h5>Chassis</h5>
                        <h2>Add Chassis Images:</h2>
                        <div className='alpha_finance_steps_admin_image_view'>
                            <img onClick={() => type === 'edit' ? null : document.getElementById("chassisImages").click()}
                                src={addImage} className={'alpha_finance_steps_admin_add_image_two'} alt={''} />
                            <input
                                multiple
                                onChange={(e) => handleImageChange(e, 3)}
                                id="chassisImages"
                                type={"file"}
                                style={{ display: "none" }}
                            />
                            {chassisImages.map((image) => {
                                return (
                                    <img src={image} className={'alpha_finance_steps_admin_image_two'} alt={''} />
                                )
                            })}
                        </div>
                    </div>
                    <div className='alpha_finance_steps_admin_image_top_view'>
                        <h5>Undercarriage </h5>
                        <h2>Add Undercarriage Images:</h2>
                        <div className='alpha_finance_steps_admin_image_view'>
                            <img onClick={() => type === 'edit' ? null : document.getElementById("undercarriage").click()}
                                src={addImage} className={'alpha_finance_steps_admin_add_image_two'} alt={''} />
                            <input
                                multiple
                                onChange={(e) => handleImageChange(e, 4)}
                                id="undercarriage"
                                type={"file"}
                                style={{ display: "none" }}
                            />
                            {undercarriageImage.map((image) => {
                                return (
                                    <img src={image} className={'alpha_finance_steps_admin_image_two'} alt={''} />
                                )
                            })}
                        </div>
                    </div>
                </>
                :
                <div className='alpha_margin_right'>
                    <TextInputAdminFinance
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        title={'Message'}
                        placeholder={'Message'} />
                </div>
            }
            <div className='alpha-financing-finance_step_two_admin_buttons_top_view'>
                <div className='alpha-financing-finance_step_two_admin_back_button' onClick={() => props.onClickBack()}>
                    <h2>BACK</h2>
                </div>
                {props?.selectedProductType === 'Machine' ?
                    <div className='alpha-financing-finance_step_two_admin_next_button' onClick={() => buttonValueTwo ? onPressNext() : null}>
                        <h2>ADD</h2>
                    </div>
                    :
                    <div className='alpha-financing-finance_step_two_admin_next_button' onClick={() => buttonValueOne ? onPressNext() : null}>
                        <h2>ADD</h2>
                    </div>
                }
            </div>
        </div>
    )
}

