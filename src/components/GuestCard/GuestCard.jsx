import React from "react";

import "./GuestCard.css";

const GuestCard = ({ img, name }) => {
  return (
    <div className="guest__card">
      <img className="guest__card__img" src={img} alt={name} />
      <h4 className="guest__card__title">{name}</h4>
    </div>
  );
};

export default GuestCard;
