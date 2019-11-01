import React, { Fragment } from "react";

const Sushi = props => {
  const handleClick = id => {
    props.handleEatenClick(id);
  };

  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={() => {
          handleClick(props.id);
        }}
      >
        {props.eaten ? null : (
          <img src={props.img_url} width="100%" alt={props.name} />
        )}
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  );
};

export default Sushi;
