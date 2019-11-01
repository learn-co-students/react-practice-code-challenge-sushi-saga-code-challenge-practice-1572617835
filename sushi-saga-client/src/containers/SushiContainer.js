import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  var sushiArray = props.sushi.map(sushi=> <Sushi {...sushi} />)

  function choose4(){
    var [first, second, third, fourth, ...rest] = sushiArray
    sushiArray = rest
    return [first, second, third, fourth]
  } 

  
  
  return (
    <Fragment>
      <div className="belt">
        {choose4()}
        <MoreButton choose4={choose4}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer