import React from 'react'
import logo from "../../assets/logo.svg"
import iconOne from "../../assets/icon-1.svg"
import linkdin from "../../assets/icon-2.svg"
import instagram from "../../assets/icon-3.svg"
import twitter from "../../assets/icon-4.svg"
import icon from "../../assets/btn-icon.svg"
import "./Footer.css"

const Footer = () =>{
    return (
        <footer>
            <div className="container">
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>Curious?<br/> Get in touch</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <img className="footer_logo" src={logo} alt=""/>
                        <p className="copy">© 2021 Shiba Social Club. All rights reserved</p>
                    </div>
                    <div className='col-md-3'>
                        <ul className="footer_menu">
                            <li>features</li>
                            <li>About</li>
                            <li>roadmap</li>
                            <li>faq</li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <h4>follow us</h4>
                        <ul className="soc_icons d-flex">
                            <li className="soc_icon">
                                <a href="#"><img src={iconOne} alt=""/></a>
                            </li>
                            <li class="soc_icon">
                                <a href="#"><img src={linkdin} alt=""/></a>
                            </li>
                            <li className="soc_icon">
                                <a href="#"><img src={instagram} alt=""/></a>
                            </li>
                            <li className="soc_icon">
                                <a href="#"><img src={twitter} alt=""/></a>
                            </li>
                        </ul>
                        <a className="menu_btn"><img src={icon} alt=""/> join our discord</a>
                        <h4>contact us</h4>
                        <a>info@shibasocialclub.com</a>
                    </div>
                </div>
            </div>
        </footer>
        
    )
};

export default Footer;