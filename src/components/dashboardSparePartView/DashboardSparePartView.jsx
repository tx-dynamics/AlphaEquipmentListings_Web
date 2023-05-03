import React from 'react'
import { distance } from '../../assets/icons'
import { getDistanceFromLatLonInKm } from '../../helpingMethods';
import { store } from '../../redux/store';
import './dashboardSparePartView.css'

export default function DashboardSparePartView(props) {
    const { item } = props
    return (
        <div key={props.index} onClick={props.onClick} className="alpha_home-page-spare_parts_top_view" style={props.style}>
            <img src={item?.images?.[0]} alt={''} className='alpha-home-page-spare_part_image_style' />
            <div className="alpha-home-page-spare_part_detail_view">
                <h2>{item?.productName}</h2>
                <h3>Location: {item?.location?.address}</h3>
                <div className="alpha-home-page-spare_part_price_distance_view">
                    <div className="alpha-home-page-spare_part_price_view">
                        <h1>Price: </h1>
                        <h4>{item?.price}$</h4>
                    </div>
                    <div className="alpha-home-page-spare_part_price_view">
                        <img src={distance} alt={''} />
                        <h5>{getDistanceFromLatLonInKm(item?.location?.coordinates[1], item?.location?.coordinates[0], store.getState().userData.userLocation.lat, store.getState().userData.userLocation.long)} km</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

