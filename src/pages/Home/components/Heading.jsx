import React from 'react'
import {Row, Col} from 'antd'
import classes from "../Home.module.css"

const Heading = () =>{
    return (
            <Row>
                <Col span={24} className={classes.header}>
                    <h1>when dreams come true</h1>
                    <div className={classes.count_container}>
                        <h2>Countdown to public sale</h2>
                        <ul>
                            <li>o days</li>
                            <li>o hrs</li>
                            <li>o min</li>
                            <li>o sec</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        
    )
}

export default Heading;