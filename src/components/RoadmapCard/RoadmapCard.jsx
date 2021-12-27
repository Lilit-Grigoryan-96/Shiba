import React from 'react'
import Ellipse from "../../assets/Ellipse 1.svg"
import "./RoadmapCard.css"

const RoadmapCard = ({num, title, text}) =>{
    return (
        <div className='roadmapcard_row'>
            <div className='roadmapcard_col'>
                <p className="num">{num}%</p>
            </div>
            <div className='roadmapcard_col'>
                <h5>{title}</h5>
                <p>{text} </p>             
            </div>
            <img  className='roadmapcard_icon' src={Ellipse} alt=""/>
        </div>
       
    )
}

export default RoadmapCard;