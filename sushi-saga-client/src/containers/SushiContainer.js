import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

class SushiContainer extends Component {


  generateSushi = () => {
    return this.props.sushiArray.map((sushiItem, index) => <Sushi key={index}{...sushiItem}/>)
  }

  render(){
    return (
      <Fragment>
        <div className="belt">
          {this.generateSushi()}
          <MoreButton />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer