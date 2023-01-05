import React from 'react'
import { dummyOne, distance } from '../../assets/icons'
import './dashboardAuctionView.css'

export default function DashboardAuctionView(props) {
    return (
        <div key={props.index} className="alpha_home-page-grid_inner_view">
            <img src={dummyOne} alt={''} className="alpha_home-page-grid_inner_view_image" />
            <h1>2018 Prinoth Panther T67 Crawler Carrier</h1>
            <h2>Location: Lorem ipsum dolor sit amet</h2>
            <div className="alpha-home_page_auction_distance_view">
                <h3>Meter: 3456hrs</h3>
                {props.type === 2 &&
                    <h5>80$/Day</h5>
                }
                <div className="alpha-home_page_auction_km_view">
                    <img alt={''} src={distance} />
                    <h4>4.3 km</h4>
                </div>
            </div>
            {props.type === 1 &&
                <div className="alpha-home_page_auction_online_view">
                    <h3>Online Auction</h3>
                    <h4>Last Date:<span style={{ color: '#000' }}> Dec 05, 2022</span></h4>
                </div>
            }
        </div>
    )
}

