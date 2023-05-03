import React from 'react'
import { distance } from '../../assets/icons'
import { diffBtwTwoDates, getDistanceFromLatLonInKm } from '../../helpingMethods'
import { store } from '../../redux/store'
import './dashboardAuctionView.css'

export default function DashboardAuctionView(props) {
    const { item } = props
    const timeDiff = diffBtwTwoDates(new Date(), new Date(item?.auctionEndDate)).includes('-')
    const lastDate = new Date(item?.auctionEndDate)
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    return (
        <div key={props.index} onClick={props.onClick} className="alpha_home-page-grid_inner_view">
            <img src={item?.images[0]} alt={''} className="alpha_home-page-grid_inner_view_image" />
            <h1>{item?.productName}</h1>
            <h2>Location: {item?.location?.address}</h2>
            <div className="alpha-home_page_auction_distance_view">
                <h3>Meter: {item?.odometer}</h3>
                {props.type === 2 &&
                    <h5>{item?.price}$/Day</h5>
                }
                <div className="alpha-home_page_auction_km_view">
                    <img alt={''} src={distance} />
                    <h4>{getDistanceFromLatLonInKm(item?.location?.coordinates[1], item?.location?.coordinates[0], store.getState().userData.userLocation.lat, store.getState().userData.userLocation.long)} km</h4>
                </div>
            </div>
            {props.type === 1 &&
                <div className="alpha-home_page_auction_online_view">
                    <h3>Online Auction</h3>
                    {timeDiff ?
                        <h4>Auction expired</h4>
                        :
                        <h4>Last Date:<span style={{ color: '#000' }}> {monthNames[lastDate.getMonth()]} {lastDate?.getDate() + ',' + ' ' + lastDate?.getFullYear()}</span></h4>
                    }
                </div>
            }
        </div>
    )
}

