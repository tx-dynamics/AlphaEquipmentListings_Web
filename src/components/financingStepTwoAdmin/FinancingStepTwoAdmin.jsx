import React, { useState } from 'react'
import { TextInputAdminFinance } from '..'
import { addImage, dummyImage } from '../../assets/icons'
import './financingStepTwoAdmin.css'

export default function FinancingStepTwoAdmin(props) {
    const [image, setImage] = useState('');
    const [typeOfEquipmentDropdown, setTypeOfEquipmentDropdown] = useState(false)
    const [typeOfEquipmentValue, setTypeOfEquipmentValue] = useState('')
    const typeOfEquipmentArray = [
        {
            id: 1,
            title: 'Transport Truck',
        },
        {
            id: 2,
            title: 'Earth Moving',
        },
        {
            id: 3,
            title: 'Lifting Material',
        },
        {
            id: 4,
            title: 'Other'
        }
    ]
    const [equipmentModelDropdown, setEquipmentModelDropdown] = useState(false)
    const [equipmentModelValue, setEquipmentModelValue] = useState('')
    const equipmentModelArray = [
        {
            id: 1,
            title: 'Transport Truck',
        },
        {
            id: 2,
            title: 'Earth Moving',
        },
        {
            id: 3,
            title: 'Lifting Material',
        },
        {
            id: 4,
            title: 'Other'
        }
    ]
    const imageArray = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ];

    const uploadImage = () => {
        document.getElementById("selectFile").click();
    };

    const onChange = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        };
    };

    return (
        <div className='alpha-finance_step-admin_top_view'>
            <div className='alpha-financing-step_one_admin_inputs_top_view'>
                <div className='alpha_margin_right'>
                    <TextInputAdminFinance
                        title={'Location'}
                        placeholder={'Enter your location'} />
                </div>
                <div className='alpha_margin_right'>
                    <TextInputAdminFinance
                        title={'Usage'}
                        placeholder={'Enter usage of equipment'} />
                </div>
                <div className='alpha_margin_right'>
                    <TextInputAdminFinance
                        title={'Catalogue Note'}
                        placeholder={'Enter Catalogue of equipment'} />
                </div>
                <div className='alpha_margin_right'>
                    <TextInputAdminFinance
                        disabled
                        selectedValue={(item) => [setTypeOfEquipmentValue(item.title), setTypeOfEquipmentDropdown(false)]}
                        value={typeOfEquipmentValue}
                        onClickDropDown={() => setTypeOfEquipmentDropdown(!typeOfEquipmentDropdown)}
                        dropDownArray={typeOfEquipmentArray}
                        dropDownValue={typeOfEquipmentDropdown}
                        type={'dropdown'}
                        title={'Type of Equipment'}
                        placeholder={'Select equipment type'} />
                </div>

                <div className='alpha_margin_right'>
                    <TextInputAdminFinance
                        textArea
                        title={'Features'}
                        placeholder={'Enter features of equipment'} />
                </div>
                <div className='alpha_margin_right'>
                    <TextInputAdminFinance
                        disabled
                        selectedValue={(item) => [setEquipmentModelValue(item.title), setEquipmentModelDropdown(false)]}
                        value={equipmentModelValue}
                        onClickDropDown={() => setEquipmentModelDropdown(!equipmentModelDropdown)}
                        dropDownArray={equipmentModelArray}
                        dropDownValue={equipmentModelDropdown}
                        type={'dropdown'}
                        title={'Equipment Model'}
                        placeholder={'Select equipment model'} />
                </div>
            </div>
            <div className='alpha_finance_steps_admin_image_top_view'>
                <h2>Add images of Equipment</h2>
                <div className='alpha_finance_steps_admin_image_view'>
                    <input
                        multiple
                        onChange={(e) => onChange(e.target.files[0])}
                        id="selectFile"
                        type={"file"}
                        style={{ display: "none" }}
                    />
                    <img
                        // onClick={() => uploadImage()}
                        src={addImage} className={'alpha_finance_steps_admin_add_image'} alt={''} />
                    {imageArray.map((image) => {
                        return (
                            <img src={dummyImage} className={'alpha_finance_steps_admin_image'} alt={''} />
                        )
                    })}
                    {/* {image !== '' &&
                        <img src={image} className={'alpha_finance_steps_admin_image'} alt={''} />
                    } */}
                </div>
            </div>
            <div className='alpha-financing-finance_step_two_admin_buttons_top_view'>
                <div className='alpha-financing-finance_step_two_admin_back_button' onClick={() => props.onClickBack()}>
                    <h2>BACK</h2>
                </div>
                <div className='alpha-financing-finance_step_two_admin_next_button' onClick={() => props.onClickNext()}>
                    <h2>NEXT</h2>
                </div>
            </div>
        </div>
    )
}

