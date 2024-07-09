import React from "react";
import "./Button.css";

const Button = ({ icon, text }) => {
  return (
    <a href="#" className="btn">
      {icon && <img src={icon} alt="icon" />}
      {text}
    </a>
  );
};

export default Button;
