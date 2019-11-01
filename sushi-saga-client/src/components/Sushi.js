import React, { Fragment } from 'react'

const Sushi = (props) => {

  handleClick = (props) => { //switches sushiPlateEmpty - T/F
    if(props.sushiPlateEmpty === false) {
      return props.img_url = null // return an empty plate???
    } else {
      return <img src={props.img_url} width="100%" />
    }
  }


  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleClick(props)}>
        {/* { sushiPlateEmpty ?  
          props.img_url = null :
          <img src={props.img_url} width="100%" />
        } */}
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi