import React, { useState } from 'react'
import { arrowDownWhite, searchGrey } from '../../assets/icons'
import './searchView.css'

export default function SearchView() {
    const [showFilterValue, setShowFilterValue] = useState(false)

    return (
        <div className="alpha-my_shop-search_top_view">
            <div onClick={() => setShowFilterValue(!showFilterValue)} className="alpha-my_shop-search_filter_view">
                <h2>All</h2>
                <img src={arrowDownWhite} />
                {showFilterValue &&
                    <div className="alpha-my_shop-search_filter_dropdown_view">
                        <p>New</p>
                        <p>Used</p>
                        <p>Cancel</p>
                    </div>
                }
            </div>
            <div className="alpha-my_shop-search_search_view">
                <input placeholder="Search" />
                <img src={searchGrey} />
            </div>
        </div>
    )
}

