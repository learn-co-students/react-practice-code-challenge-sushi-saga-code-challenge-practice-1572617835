import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {

  const sushiData = props.sushis

  // renderMoreSushi =


  return (
    <Fragment>
      <div className="belt">
          {sushiData.slice(0,4).map(sushi => 
          <div key={sushi.id}>
              <img 
              className="plate"
              src={sushi.img_url} 
              alt=""></img>
            <strong>
              <p>
              {sushi.name} - ${sushi.price}
              </p>
            </strong>
          </div>
          )}
        <MoreButton 
        handleMoreClick={props.handleMoreClick}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer