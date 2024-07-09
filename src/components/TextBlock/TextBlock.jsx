import React from "react";

import Button from "../Button/Button";

import "./TextBlock.css";

const TextBlock = ({ subTitle, firtTitle, secondTitle, text, btnText }) => {
  return (
    <div className="text__block">
      <div className="text__block__heading">
        <h4>{subTitle}</h4>
        <h2 className="title">{firtTitle}</h2>
        <h2 className="title_second">{secondTitle}</h2>
      </div>
      <div className="text__block__desc">
        <p>{text}</p>
      </div>
      {btnText && <Button className="text_block_btn" text={btnText} />}
    </div>
  );
};

export default TextBlock;
