import React from 'react'

const Button = ({icon, text}) =>{
    return (
        <button className="more_btn">
            {icon && <img src={icon} alt=""/>}  
            {text}
        </button>
    )
}

export default Button;