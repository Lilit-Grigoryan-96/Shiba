import React from 'react'
import {Row, Col} from 'antd'
import GuestCard from "../../../components/GuestCard"
import img from "../../../assets/img.svg"
import classes from "../Home.module.css"

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
                <Col span={12}>
                    <h2>GOLDEN GUESTS</h2>
                </Col>
                <Col span={12}>
                    <p>The Golden Guests edition by the Billionaire Club are the rarest NFTs. They are all hand drawn and have
                         no element in common.</p>
                         <button>join us to register for presale</button>
                </Col>
            </Row>
            <Row className={classes.guests}>
                {
                    cardInfo.map((el, ind) =>{
                        return (
                            <Col span={4} key={el+'_' + ind}>
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