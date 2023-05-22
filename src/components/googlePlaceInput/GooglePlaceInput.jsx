import React from 'react'
import './googlePlaceInput.css'
import ReactGoogleAutocomplete from 'react-google-autocomplete'

const GooglePlaceInput = (props) => {
    const locationObj = (addressDetail) => {
        const location = addressDetail?.geometry?.location;
        const addressTitle = addressDetail?.formatted_address
        const lat = location.lat();
        const long = location.lng();
        var locObj = {
            type: 'Point',
            address: addressTitle,
            coordinates: [long, lat]
        };
        props.onChange(locObj)
    }

    return (
        <div className='alpha-input_two_container' style={props.style} >
            <p>{props.title}</p>
            <ReactGoogleAutocomplete
                defaultValue={props?.value}
                className='alpha-input_two_container_input'
                apiKey={'AIzaSyAIfgWBooxQYHqpajAHOQCoaydZuJhOKQY'}
                onPlaceSelected={(data) => locationObj(data)}
            />
        </div>
    )
}

export default GooglePlaceInput
