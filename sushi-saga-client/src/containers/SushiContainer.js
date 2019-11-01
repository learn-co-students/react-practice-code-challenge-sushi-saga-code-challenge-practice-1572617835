import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
const start = props.page 

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiList.slice(start, start + 4).map(sushi => {
            return  <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} />
          })
        }
        <MoreButton changePage={props.changePage}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer