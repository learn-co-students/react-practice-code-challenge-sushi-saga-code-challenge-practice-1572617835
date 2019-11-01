import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {

  // console.log(props)
  return (
    props.sushiArray.map(sushi => (
      <Fragment key={sushi.id}>
      <div className="belt">
        <Sushi sushiObj={sushi} sushiPlateEmpty={sushiPlateEmpty}/>
        {/* <MoreButton /> this creates a million buttons */}
      </div>
    </Fragment>
    ))
  )
}

export default SushiContainer