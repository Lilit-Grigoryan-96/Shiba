import React from 'react'
import {Row, Col} from 'antd'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.svg"
import icon from "../../assets/btn-icon.svg"
import Button from "../../components/Button"
import SocIcons from "../../components/SocIcons"
import "./Footer.css"

const Footer = () =>{

    return (
        <footer>
            <Row>
                <Col lg={12} md={24} sm={24}>
                    <h2>Curious?<br/> Get in touch</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <img className="footer_logo" src={logo} alt=""/>
                    <p className="copy">© 2021 Shiba Social Club. All rights reserved</p>
                </Col>
                <Col lg={6} md={24} sm={24}>
                    <ul className="footer_menu">
                        <li>
                            <Link to="/features">features</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/roadmap">roadmap</Link>
                        </li>
                        <li>
                            <Link to="/faq">faq</Link>
                        </li>
                    </ul>
                </Col>
                <Col lg={6} md={24} sm={24}>
                    <h4>follow us</h4>
                        <SocIcons/>
                        <Button icon={icon} text={'join our discord'}/>
                        <h4>contact us</h4>
                        <a href="mailto:info@shibasocialclub.com">info@shibasocialclub.com</a>
                </Col>
            </Row>
        </footer>
        
    )
};

export default Footer;