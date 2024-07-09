import React, { useState } from "react";
import { Row, Col } from "antd";

import AboutUsSection from "./AboutUsSection";

import img from "../../../../assets/img.svg";

import classes from "./FeaturesSection.module.css";

const FeaturesSection = () => {
  let price = 0.075;
  let [count, setCount] = useState(0);
  let [total, setTotal] = useState(0);
  let dataList = [
    {
      subTitle: "features",
      firtTitle: "An Exclusive",
      secondTitle: "shiba social Club",
      text: `Earlier this year, a mysterious force coming from another galaxy summoned the most influential people on planet Earth.
            They received the geographic coordinates of a secret location for the party : the Shiba Social Club. There, they will 
            have the opportunity to exchange, discuss and collaborate in order to become even bigger than they are. During this 
            party, the host will reveal its identity and the main reason for this invitation.`,
      btnText: "join us",
      imgs: [img],
      reverse: false,
      secId: "features",
    },
    {
      subTitle: "about",
      firtTitle: "Welcome to the",
      secondTitle: "shiba social Club",
      text: `The Shiba Social Club is a private collection of 10 000 billionaire apes NFTs—unique digital collectibles. 
            The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. Reveal on October 20th. \n

            With more than 180+ hand drawn traits, each NFT is unique and comes with a membership to an 
            exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.`,
      imgs: [img, img, img, img],
      reverse: true,
      secId: "about",
    },
  ];

  return (
    <div className={`${classes.features_sec} sec_padding`}>
      <Row className={`sec__container ${classes.form_row}`}>
        <Col className={classes.form__col} lg={12} md={24}>
          <img src={img} alt="" />
        </Col>
        <Col className={classes.form__col} lg={12} md={24}>
          <div className={classes.form_card}>
            <h2>Lorem ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <div className={classes.card_info_container}>
              <img src={img} alt="" />
              <div className={classes.card_info}>
                <p>Prive Per Ape</p>
                <h5>0.075 ETH Each</h5>
                <p>Public sale available 11.10.2021</p>
              </div>
            </div>
            <div className={classes.counter_container}>
              <div className={classes.counter}>
                <button onClick={() => setCount(count < 20 ? ++count : count)}>
                  +
                </button>
                <span>{count}</span>
                <button onClick={() => setCount(count >= 1 ? --count : count)}>
                  -
                </button>
              </div>
              <span>20 max</span>
            </div>
            <div className={classes.total}>
              <span>Total</span>
              <span className={classes.total_price}>{total} ETH</span>
            </div>
            <button
              className={classes.form_card_btn}
              onClick={() => setTotal(price * count)}
            >
              SOLD OUT
            </button>
          </div>
        </Col>
      </Row>
      {dataList.map((el, ind) => {
        return (
          <AboutUsSection
            subTitle={el.subTitle}
            firtTitle={el.firtTitle}
            secondTitle={el.secondTitle}
            text={el.text}
            btnText={el.btnText}
            imgs={el.imgs}
            reverse={el.reverse}
            key={el + "_" + ind}
            secId={el.secId}
          />
        );
      })}
    </div>
  );
};

export default FeaturesSection;
