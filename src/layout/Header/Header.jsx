import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.svg"
import iconOne from "../../assets/icon-1.svg"
import linkdin from "../../assets/icon-2.svg"
import instagram from "../../assets/icon-3.svg"
import twitter from "../../assets/icon-4.svg"
import icon from "../../assets/btn-icon.svg"
import "./Header.css"

const Header = () =>{
    return (
        <nav className="navbar navbar-expand-lg header_menu">
            <Link to="/" className="navbar-brand"><img src={logo} alt=""/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav menu_list">
                    <li className="nav-item">
                        <Link to="/features" className="nav-link">features</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">roadmap</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">faq</a>
                    </li>
                </ul>
                <ul className="navbar-nav">
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
            </div>
        </nav>
    )
};

export default Header;