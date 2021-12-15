import React from 'react'
import {Row, Col} from 'antd'
import classes from "../Home.module.css"
import Countdown from 'react-countdown';


const Heading = () =>{

    return (
            <Row>
                <Col span={24} className={classes.header}>
                    <h1>when dreams come true</h1>
                    <div className={classes.count_container}>
                        <h2>Countdown to public sale</h2>
                       
                        <Countdown
                            date={ Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30}
                            intervalDelay={0}
                            precision={3}
                            renderer={({days, hours, minutes, seconds }) => {
                            return (
                                <ul>
                                    <li>{days} days</li> 
                                    <li>{hours} hrs</li>
                                    <li>{minutes} min</li>
                                    <li>{seconds} sec</li>
                                </ul>
                            )}
                        }
                        />
                    </div>
                </Col>
            </Row>
        
    )
}

export default Heading;