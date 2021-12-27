import React from 'react'
import "./GuestCard.css"

const GuestCard = ({img, name}) =>{
    return (
        <div className="guest_card">
            <img src={img} alt=""/>
            <h4>{name}</h4>
        </div>
    )
}

export default GuestCard;