import React from "react";
import { Row, Col } from "antd";

import TextBlock from "../../../../components/TextBlock/TextBlock";

import classes from "./FeaturesSection.module.css";

const AboutUsSection = ({
  subTitle,
  firtTitle,
  secondTitle,
  text,
  btnText,
  imgs,
  reverse,
  secId,
}) => {
  return (
    <Row
      className={`${
        reverse ? classes.reverse_row : ""
      } info_sec sec__container`}
    >
      <Col className="form__col" lg={12}>
        <TextBlock
          subTitle={subTitle}
          firtTitle={firtTitle}
          secondTitle={secondTitle}
          text={text}
          btnText={btnText}
        />
      </Col>
      <Col className="form__col" lg={12}>
        <div className={imgs.length > 1 ? classes.img_gallery : ""} id={secId}>
          {imgs.map((el, ind) => {
            return <img src={el} alt="" key={el + "_" + ind} />;
          })}
        </div>
      </Col>
    </Row>
  );
};

export default AboutUsSection;
