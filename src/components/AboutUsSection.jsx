import React from 'react'
import "./components.css"
import {Row, Col} from 'antd'
import TextBlock from "./TextBlock"


const AboutUsSection = ({ subTitle, firtTitle, secondTitle, text, btnText, imgs, reverse}) =>{
    return (
        <Row className={`${reverse ? 'reverse_row' : ''} info_sec`}>
            <Col lg={12}>
                <TextBlock subTitle={subTitle} firtTitle ={firtTitle} secondTitle = {secondTitle} text={text} btnText={btnText}/>
            </Col>
            <Col lg={12}>
                <div className={imgs.length>1 ? 'img_gallery':''}>
                    {
                        imgs.map((el, ind)=>{
                            return <img src={el} alt="" key = {el+'_'+ind}/>
                        })
                    }
                </div>
            </Col>
        </Row>
    )
}

export default AboutUsSection;