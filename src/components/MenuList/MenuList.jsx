import React from "react";
import "./MenuList.css";

const MenuList = () => {
  return (
    <ul className="menu__list">
      <li className="menu__list__item">
        <a className="menu__link" href="#features">
          features
        </a>
      </li>
      <li className="menu__list__item">
        <a className="menu__link" href="#about">
          About
        </a>
      </li>
      <li className="menu__list__item">
        <a className="menu__link" href="#roadmap">
          roadmap
        </a>
      </li>
      <li className="menu__list__item">
        <a className="menu__link" href="#faq">
          faq
        </a>
      </li>
    </ul>
  );
};

export default MenuList;
