import React from 'react'
import classes from "./FeaturesSection.module.css"
import {Row, Col} from 'antd'
import TextBlock from "../../../../components/TextBlock/TextBlock"


const AboutUsSection = ({ subTitle, firtTitle, secondTitle, text, btnText, imgs, reverse, secId}) =>{
    return (
        <Row className={`${reverse ? classes.reverse_row : ''} info_sec`}>
            <Col lg={12}>
                <TextBlock subTitle={subTitle} firtTitle ={firtTitle} secondTitle = {secondTitle} text={text} btnText={btnText}/>
            </Col>
            <Col lg={12}>
                <div className={imgs.length>1 ? classes.img_gallery:''} id={secId}>
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