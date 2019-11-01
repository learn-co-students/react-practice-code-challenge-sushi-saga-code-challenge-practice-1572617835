import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {
  
  function renderSushi() {
    return props.sushis.map(sushi => {
      return <Sushi updateMoney={props.updateMoney} money={props.money} sushi={sushi}/>
    }).slice(props.index, props.index+4);
  }


  return (
    <Fragment>
      <div className="belt">
        {
          renderSushi()
        }
        <MoreButton nextFourSushis={props.nextFourSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer