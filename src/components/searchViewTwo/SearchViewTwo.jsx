import React, { useState } from 'react'
import { arrowDownWhite, searchGrey } from '../../assets/icons'
import './searchViewTwo.css'

export default function SearchViewTwo() {
    const [showFilterValue, setShowFilterValue] = useState(false)

    return (
        <div className="alpha-my_shop-search_top_view_two">
            <div onClick={() => setShowFilterValue(!showFilterValue)} className="alpha-my_shop-search_filter_view_two">
                <h2>All</h2>
                <img src={arrowDownWhite} />
                {showFilterValue &&
                    <div className="alpha-my_shop-search_filter_dropdown_view_two">
                        <p>New</p>
                        <p>Used</p>
                        <p>Cancel</p>
                    </div>
                }
            </div>
            <div className="alpha-my_shop-search_search_view_two">
                <input placeholder="Search" />
                <img src={searchGrey} />
            </div>
        </div>
    )
}

