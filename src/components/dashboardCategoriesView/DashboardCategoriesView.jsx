import React from 'react'
import { dummyTwo } from '../../assets/icons'
import './dashboardCategoriesView.css'

export default function DashboardCategoriesView(props) {
    const { item } = props
    return (
        <div key={props.index} onClick={props.onClick} className="alpha_home-page_categories_view" style={props.containerStyle}>
            <img src={item?.image} alt={''} />
            <div className="alpha_home-page_categories_name_view">
                <h3 style={props.titleStyle}>{props?.type === 1 ? item.categoryName : item?.name}</h3>
                <h4 style={props.countStyle}>{props?.type === 1 ? item?.subCategories?.length : item?.products?.length}</h4>
            </div>
        </div>
    )
}

