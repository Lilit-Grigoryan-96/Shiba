import React from "react";
import { Row, Col } from "antd";

import GuestCard from "../../../../components/GuestCard/GuestCard";
import Button from "../../../../components/Button/Button";

import img from "../../../../assets/img.svg";

import classes from "./Guests.module.css";

let cardInfo = [
  { img: img, name: "Lorem Ipsum" },
  {
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    name: "Lorem Ipsum 2",
  },
  { img: img, name: "Lorem Ipsum" },
  {
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    name: "Lorem Ipsum 2",
  },
  { img: img, name: "Lorem Ipsum" },
  {
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    name: "Lorem Ipsum 2",
  },
];

const Guests = () => {
  return (
    <div className={classes.guests_sec}>
      <Row className={`sec__container ${classes.guests_sec_info}`}>
        <Col lg={12}>
          <h2>GOLDEN GUESTS</h2>
        </Col>
        <Col lg={12}>
          <p>
            The Golden Guests edition by the Billionaire Club are the rarest
            NFTs. They are all hand drawn and have no element in common.
          </p>
          <Button text={"join us to register for presale"} />
        </Col>
      </Row>
      <Row className={`sec__container ${classes.guests}`}>
        {cardInfo.map((el, ind) => {
          return <GuestCard img={el.img} name={el.name} key={el + "_" + ind} />;
        })}
      </Row>
    </div>
  );
};

export default Guests;
