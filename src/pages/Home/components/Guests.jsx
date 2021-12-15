import React from 'react'
import {Row, Col} from 'antd'
import GuestCard from "../../../components/GuestCard"
import img from "../../../assets/img.svg"
import classes from "../Home.module.css"
import Button from "../../../components/Button"

let cardInfo = [
    {img:img, name: 'Lorem Ipsum'},
    {img:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', name: 'Lorem Ipsum 2'},
    {img:img, name: 'Lorem Ipsum'},
    {img:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', name: 'Lorem Ipsum 2'},
    {img:img, name: 'Lorem Ipsum'},
    {img:'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', name: 'Lorem Ipsum 2'},
    
]


const Guests = () =>{
    return (
        <div className={classes.guests_sec}>
            <Row className={classes.guests_sec_info}>
                <Col lg={12}>
                    <h2>GOLDEN GUESTS</h2>
                </Col>
                <Col lg={12}>
                    <p>The Golden Guests edition by the Billionaire Club are the rarest NFTs. They are all hand drawn and have
                         no element in common.</p>
                         <Button text={'join us to register for presale'}/>
                </Col>
            </Row>
            <Row className={classes.guests}>
                {
                    cardInfo.map((el, ind) =>{
                        return (
                            <Col lg={4} md={24} sm={24} key={el+'_' + ind}>
                                <GuestCard img={el.img} name={el.name}/>
                            </Col>
                        )
                    })
                }
               
            </Row>
        
        </div>
    )
}

export default Guests;