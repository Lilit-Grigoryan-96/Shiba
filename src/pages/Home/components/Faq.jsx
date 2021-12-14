import React from 'react'
import {Row, Col} from 'antd'
import classes from "../Home.module.css"
import FaqListItem from "../../../components/FaqListItem"


const Faq = () =>{
    return (
        <div className={classes.faq_sec}>
            <Row>
                <Col span={24}>
                    <h2>FREQUENTLY ASKED QUESTIONS</h2>
                </Col>
            </Row>
        </div>
    )
}

export default Faq;