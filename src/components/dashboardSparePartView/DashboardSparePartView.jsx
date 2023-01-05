import React from 'react'
import { dummyThree, distance } from '../../assets/icons'
import './dashboardSparePartView.css'

export default function DashboardSparePartView(props) {
    return (
        <div key={props.index} className="alpha_home-page-spare_parts_top_view">
            <img src={dummyThree} alt={''} className='alpha-home-page-spare_part_image_style' />
            <div className="alpha-home-page-spare_part_detail_view">
                <h2>Wheel Hub Seal Kits Truck </h2>
                <h3>Location: Lorem ipsum dolor sit amet</h3>
                <div className="alpha-home-page-spare_part_price_distance_view">
                    <div className="alpha-home-page-spare_part_price_view">
                        <h1>Price: </h1>
                        <h4>500$</h4>
                    </div>
                    <div className="alpha-home-page-spare_part_price_view">
                        <img src={distance} alt={''} />
                        <h5>4.3 km</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

