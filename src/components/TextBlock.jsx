import React from 'react'
import "./components.css"

const TextBlock = ({ subTitle, firtTitle, secondTitle, text, btnText}) =>{
    return (
        <div className="text_block">
            <h4>{subTitle}</h4>
            <h2 className="title">{firtTitle}</h2>
            <h2 className="title_second">{secondTitle}</h2>
            <p>{text}</p>
            {btnText && <button className="text_block_btn">{btnText}</button>}
            
        </div>
    )
}

export default TextBlock;