import React from 'react'
import iconOne from "../../assets/icon-1.svg"
import linkdin from "../../assets/icon-2.svg"
import instagram from "../../assets/icon-3.svg"
import twitter from "../../assets/icon-4.svg"

const SocIcons = () =>{
    return (
        <ul className="soc_icons">
            <li className="soc_icon">
                <a href="#"><img src={iconOne} alt=""/></a>
            </li>
            <li className="soc_icon">
                <a href="#"><img src={linkdin} alt=""/></a>
            </li>
            <li className="soc_icon">
                <a href="#"><img src={instagram} alt=""/></a>
            </li>
            <li className="soc_icon">
                <a href="#"><img src={twitter} alt=""/></a>
            </li>
        </ul>
    )
}

export default SocIcons;