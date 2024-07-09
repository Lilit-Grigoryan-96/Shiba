import { React, useState } from "react";

import { MenuOutlined } from "@ant-design/icons";

import logo from "../../../../assets/logo.svg";
import icon from "../../../../assets/btn-icon.svg";

import Button from "../../../../components/Button/Button";
import SocIcons from "../../../../components/SocIcons/SocIcons";
import MenuList from "../../../../components/MenuList/MenuList";

import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="header__menu">
      <div className="header__menu__logo">
        <img className="logo" src={logo} alt="Shiba" />
      </div>

      <MenuOutlined
        className="navbar__toggler"
        onClick={() => setToggle(!toggle)}
      />

      <div className={`header__menu__collapse ${toggle ? "d_flex" : "d_none"}`}>
        <MenuList />
        <SocIcons />
        <Button icon={icon} text={"join our discord"} />
      </div>
    </nav>
  );
};

export default Navbar;
