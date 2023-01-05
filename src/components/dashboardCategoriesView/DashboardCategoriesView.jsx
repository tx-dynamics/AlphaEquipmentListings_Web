import React from 'react'
import { dummyTwo } from '../../assets/icons'
import './dashboardCategoriesView.css'

export default function DashboardCategoriesView(props) {
    return (
        <div key={props.index} className="alpha_home-page_categories_view">
            <img src={dummyTwo} alt={''} />
            <div className="alpha_home-page_categories_name_view">
                <h3>{props.item.title}</h3>
                <h4>{props.item.count}</h4>
            </div>
        </div>
    )
}

