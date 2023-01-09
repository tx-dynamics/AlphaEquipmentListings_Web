import React from 'react'
import { dummyTwo } from '../../assets/icons'
import './dashboardCategoriesView.css'

export default function DashboardCategoriesView(props) {
    return (
        <div key={props.index} onClick={props.onClick} className="alpha_home-page_categories_view" style={props.containerStyle}>
            <img src={dummyTwo} alt={''} />
            <div className="alpha_home-page_categories_name_view">
                <h3 style={props.titleStyle}>{props.item.title}</h3>
                <h4 style={props.countStyle}>{props.item.count}</h4>
            </div>
        </div>
    )
}

