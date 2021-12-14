import React from 'react'
import {Row, Col} from 'antd'
import classes from "../Home.module.css"
import img from "../../../assets/img.svg"
import TextBlock from "../../../components/TextBlock"

const FeaturesSection = () =>{

    return (
        <div className={classes.features_sec}>
            <Row>
                <Col span={12}>
                    <img src={img} alt=""/>
                </Col>
                <Col span={12}>
                    <div className={classes.form_card}>
                        <h2>Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <div className={classes.card_info_container}>
                            <img src={img} alt=""/>
                            <div className={classes.card_info}>
                                <p>Prive Per Ape</p>
                                <h5>0.075 ETH Each</h5>
                                <p>Public sale available 11.10.2021</p>
                            </div>
                        </div>
                        <div className={classes.counter_container}>
                            <div className={classes.counter}>
                                <button>+</button>
                                <span>0</span>
                                <button>-</button>
                            </div>
                            <span>20 max</span>
                        </div>
                        <div className={classes.total}>
                            <span>Total</span>
                            <span className={classes.total_price}>0 ETH</span>
                        </div>
                        <button className={classes.form_card_btn}>SOLD OUT</button>
                    </div>
                </Col>
            </Row>
            <Row className={classes.info_sec}>
                <Col span={12}>
                    <TextBlock subTitle={'features'} firtTitle ={'An Exclusive'} secondTitle = {'shiba social Club'}
                    text={`Earlier this year, a mysterious force coming from another galaxy summoned the most influential people on planet Earth.
                    They received the geographic coordinates of a secret location for the party : the Shiba Social Club. There, they will 
                    have the opportunity to exchange, discuss and collaborate in order to become even bigger than they are. During this 
                    party, the host will reveal its identity and the main reason for this invitation.`} btnText={'join us'}/>
                </Col>
                <Col span={12}>
                    <img src={img} alt=""/>
                </Col>
            </Row>
            <Row className={classes.info_sec}>
                <Col span={12}>
                    <img src={img} alt=""/>
                   
                </Col>
                <Col span={12}>
                     <TextBlock subTitle={'about'} firtTitle ={'Welcome to the'} secondTitle = {'shiba social Club'}
                    text={`The Shiba Social Club is a private collection of 10 000 billionaire apes NFTs—unique digital collectibles. 
                    The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. Reveal on October 20th. 

                    With more than 180+ hand drawn traits, each NFT is unique and comes with a membership to an 
                    exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.`} 
                    />
                </Col>
            </Row>
        </div>
        
    )

}


export default FeaturesSection;