import React from "react";

import iconOne from "../../assets/icon-1.svg";
import linkdin from "../../assets/icon-2.svg";
import instagram from "../../assets/icon-3.svg";
import twitter from "../../assets/icon-4.svg";

import "./SocIcons.css";

const SocIcons = () => {
  return (
    <ul className="icons">
      <li className="icons__item">
        <a className="icons__item__link" href="#">
          <img src={iconOne} alt="" />
        </a>
      </li>
      <li className="icons__item">
        <a className="icons__item__link" href="#">
          <img src={linkdin} alt="" />
        </a>
      </li>
      <li className="icons__item">
        <a className="icons__item__link" href="#">
          <img src={instagram} alt="" />
        </a>
      </li>
      <li className="icons__item">
        <a className="icons__item__link" href="#">
          <img src={twitter} alt="" />
        </a>
      </li>
    </ul>
  );
};

export default SocIcons;
