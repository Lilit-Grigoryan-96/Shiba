import React from 'react'
import "./components.css"
import Button from './Button'

const TextBlock = ({ subTitle, firtTitle, secondTitle, text, btnText}) =>{
    return (
        <div className="text_block">
            <h4>{subTitle}</h4>
            <h2 className="title">{firtTitle}</h2>
            <h2 className="title_second">{secondTitle}</h2>
            <p>{text}</p>
            {btnText && <Button className="text_block_btn" text={btnText}/>}
            
        </div>
    )
}

export default TextBlock;