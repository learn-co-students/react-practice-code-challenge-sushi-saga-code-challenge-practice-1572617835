import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  // function get4sushi(){
  //   let array = [] 
  //   for(let i = 0; i < 4; i++){
  //     array.push(props.allSushi[(Math.rand)])
  //   }
  // }
  
  return (
    <Fragment>
      <div className="belt">
        <Sushi sushi={props.allSushi[0]}/>
        {
          /* 
             Render Sushi components here!
          */
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer