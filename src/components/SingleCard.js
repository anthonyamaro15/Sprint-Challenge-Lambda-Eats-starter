import React from "react";

const SingleCard = () => {
  return (
    <div className="pizza">
      <div className="bg-image"></div>
      <div className="details">
        <p>pizza</p>
        <span className="description">fast Food Pizza</span>
        <span className="time">20-30 Min</span>
        <span className="fee">$ 5.99 Delivery Fee</span>
      </div>
    </div>
  );
};

export default SingleCard;
