import React, { useState } from 'react'
import { GooglePlaceInput, TextInputTwo } from '../'
import { useSnackbar } from 'react-simple-snackbar'
import { snakbarOptions } from '../../globalData'
import { financingLogo } from '../../assets/icons'
import './financingStepOne.css'

export default function FinancingStepOne(props) {
    const { value } = props
    const [location, setLocation] = useState({ address: value?.location?.address ? value?.location?.address : '' })
    const [name, setName] = useState(value?.name ? value?.name : '')
    const [email, setEmail] = useState(value?.email ? value?.email : '')
    const [number, setNumber] = useState(value?.number ? value?.number : '')
    const [businessId, setBusinessId] = useState(value?.businessId ? value?.businessId : '')
    const [dob, setDob] = useState('')
    const [date, setDate] = useState(value?.dob?.date ? value?.dob?.date : '')
    const buttonValue = name.length > 0 && email.length > 0 && number.length > 0 && location?.address.length > 0 && date !== '' && businessId.length > 0
    const [showMessage, hideMessage] = useSnackbar(snakbarOptions)

    const onClickNext = () => {
        const data = {
            name: name,
            email: email,
            location: location,
            number: number,
            dob: { date: date, timeStamp: dob },
            businessId: businessId
        }
        buttonValue ? props.onClickNext(data) : showMessage('Please fill all the fields')
    }
    return (
        <div>
            <div className="alpha-financing-finance_step_one_top_view">
                <div className="alpha-financing-finance_step_one_view">
                    <h1>Tell us about your personal information</h1>
                    <div className='alpha-financing-step_one_inputs_top_view'>
                        <TextInputTwo
                            onChange={(e) => setName(e.target.value)}
                            style={{ paddingBottom: 4 }}
                            value={name}
                            title={'Legal Business Name'}
                            placeholder={'Enter business name'} />
                        <GooglePlaceInput
                            onChange={(e) => setLocation(e)}
                            value={location?.address}
                            title={'Location'}
                            placeholder={'Enter your location'} />
                        <TextInputTwo
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ paddingBottom: 4 }}
                            value={email}
                            title={'Email'}
                            placeholder={'Enter email'} />
                        <TextInputTwo
                            onChange={(e) => setNumber(e.target.value)}
                            style={{ paddingBottom: 4 }}
                            value={number}
                            title={'Phone Number'}
                            placeholder={'Enter phone number'} />
                        <TextInputTwo
                            value={date}
                            onChange={(e) => [setDate(e.target.value), setDob(new Date(e.target.value).getTime())]}
                            inputStyle={{ paddingBottom: 4, flex: 1, }}
                            type={'date'}
                            title={'Type of equipment'}
                            placeholder={'Select equipment type'} />
                        <TextInputTwo
                            onChange={(e) => setBusinessId(e.target.value)}
                            style={{ paddingBottom: 4 }}
                            value={businessId}
                            title={'Socail Security Number or Business Tax ID  Number'}
                            placeholder={'Enter SSN or Business id'} />
                    </div>
                </div>
                <div className="alpha-financing-finance_step_one_image_view">
                    <img src={financingLogo} />
                </div>
            </div>
            <div className='alpha-financing-finance_step_one_button'>
                <div onClick={() => onClickNext()}>
                    <h2>NEXT</h2>
                </div>
            </div>
        </div>
    )
}

