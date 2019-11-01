import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  
  function mapSushi() { 
    props.sushi.map(item => {
        <Sushi item={item} /> 
       })
  }

  return (
    <Fragment>
      <div className="belt">
        {mapSushi()}
        <MoreButton />
      
      </div>
    </Fragment>
  )
}

export default SushiContainer