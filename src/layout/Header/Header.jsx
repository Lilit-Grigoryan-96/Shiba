import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.svg"
import icon from "../../assets/btn-icon.svg"
import { MenuOutlined } from '@ant-design/icons';
import Button from "../../components/Button"
import SocIcons from "../../components/SocIcons"
import "./Header.css"



const Header = () =>{
    
    const [toggle, setToggle] = useState(false)

    return (
        <nav className="header_menu">
            <Link to="/"><img className="logo" src={logo} alt=""/></Link>
            <MenuOutlined  className="menu_bar" onClick={() => setToggle(!toggle)}/>
            <div className={`collapse_menu ${toggle ? 'd_flex' : 'd_none'}`}>
                
        
                <ul className="menu_list">
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
                <SocIcons/>
                <Button icon={icon} text={'join our discord'}/>
            </div>
        </nav>
      
    )
};

export default Header;