import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi.js";

const SushiContainer = props => {
  const makeSushis = props => {
    return props.sushis.map(sushi => {
      return (
        <Sushi
          id={sushi.id}
          name={sushi.name}
          img_url={sushi.img_url}
          price={sushi.price}
          eaten={sushi.eaten}
          handleEatenClick={props.handleEatenClick}
        />
      );
    });
  };
  return (
    <Fragment>
      <div className="belt">
        {makeSushis(props)}
        <MoreButton handleMoreButtonClick={props.handleMoreButtonClick} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
