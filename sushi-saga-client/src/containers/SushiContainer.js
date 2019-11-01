import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  //this is full array. I want to show only 4.
  //i also want the array shown to change each time btn More Sushi is clicked
  //lets make the function that changes the array provided

  return (
    <Fragment>
      <div className="belt">
        {/* i need to feed an array only of length 4 here */}
        {/* {props.currentSushis.map(sushi => {
          return (
            <Sushi
              key={sushi.id}
              img_url={sushi.img_url}
              name={sushi.name}
              price={sushi.price}
            />
          );
        })} */}
        {console.log(props.currentSushis)}

        <MoreButton onClick={props.handleClick} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
