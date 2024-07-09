import React from "react";
import { Row, Col } from "antd";

import MenuList from "../../../../components/MenuList/MenuList";

import logo from "../../../../assets/logo.svg";
import icon from "../../../../assets/btn-icon.svg";
import Button from "../../../../components/Button/Button";
import SocIcons from "../../../../components/SocIcons/SocIcons";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="sec__container">
        <Col className="footer__info" lg={12} md={24} sm={24}>
          <h2>
            Curious?
            <br /> Get in touch
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <img className="footer_logo" src={logo} alt="" />
          <p className="copy">© 2021 Shiba Social Club. All rights reserved</p>
        </Col>
        <Col className="footer__menu" lg={6} md={24} sm={24}>
          {/* <ul className="footer_menu">
            <li>
              <a href="#features">features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#roadmap">roadmap</a>
            </li>
            <li>
              <a href="#faq">faq</a>
            </li>
          </ul> */}
          <MenuList />
        </Col>
        <Col className="footer__join" lg={6} md={24} sm={24}>
          <h4>follow us</h4>
          <SocIcons />
          <Button icon={icon} text={"join our discord"} />
          <h4>contact us</h4>
          <a href="mailto:info@shibasocialclub.com">info@shibasocialclub.com</a>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
