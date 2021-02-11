import React from 'react'

export default function menuItem(props) {
    return (
        <div className="menu-item-container">
            <div className="menu-item-heading-container">
                <h3 className="menu-item-heading">{props.title}</h3>
                <p className="menu-item-price">${props.price}</p>
            </div>
            <p className="menu-item-description">{props.desc}</p>
        </div>
    )
}
