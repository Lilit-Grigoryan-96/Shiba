import {React, useState} from 'react'
import logo from "../../../../assets/logo.svg"
import icon from "../../../../assets/btn-icon.svg"
import { MenuOutlined } from '@ant-design/icons';
import Button from "../../../../components/Button/Button"
import SocIcons from "../../../../components/SocIcons/SocIcons"
import "./Navbar.css"



const Navbar = () =>{
    
    const [toggle, setToggle] = useState(false)

    return (
        <nav className="header_menu">
            <img className="logo" src={logo} alt=""/>
            <MenuOutlined  className="menu_bar" onClick={() => setToggle(!toggle)}/>
            <div className={`collapse_menu ${toggle ? 'd_flex' : 'd_none'}`}>
                <ul className="menu_list">
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
                </ul>
                <SocIcons/>
                <Button icon={icon} text={'join our discord'}/>
            </div>
        </nav>
      
    )
};

export default Navbar;