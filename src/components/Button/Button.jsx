import React from 'react'
import './Button.css'

const Button = ({icon, text}) =>{
    return (
        <button className="more_btn">
            {icon && <img src={icon} alt=""/>}  
            {text}
        </button>
    )
}

export default Button;