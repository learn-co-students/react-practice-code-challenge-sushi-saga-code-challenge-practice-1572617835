import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
  constructor (){
    super();

    this.state = {
      startPoint: 0
    }
  }

  nextPage = () => {
    let newStartPoint = this.state.startPoint + 4;
    console.log(newStartPoint)
    this.setState({startPoint: newStartPoint})
  }


  renderSushis = (sushis) => {
    return sushis.map((sushi, i) => {
      return <Sushi sushi={sushi} key={i} eatSushi={this.props.eatSushi}/>
    })
  }

  render () {
    let currentPage = this.props.sushis.slice(this.state.startPoint, this.state.startPoint + 4)
    let sushiArray = this.renderSushis(currentPage);
    

    return (
      <Fragment>
        <div className="belt">
          {
            sushiArray
          }
          <MoreButton nextPage={this.nextPage}/>
        </div>
      </Fragment>
    )
      }
}

export default SushiContainer