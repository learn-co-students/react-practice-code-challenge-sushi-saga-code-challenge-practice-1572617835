import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

// const SushiContainer = (props) => {
  class SushiContainer extends Component {

    constructor(props){
      super(props)
      this.state= {
        sushiArray: [],
        isEaten: false,
        currentSushi: 0,
        emptyPlate: []
      }
    }

     fetch = () => {
      fetch('http://localhost:3000/sushis')
      .then(resp=> resp.json())
      .then(data=> {
        this.setState({
          sushiArray: data
        })
      })
      let sushis = this.state.sushiArray.slice(this.state.currentSushi, this.state.currentSushi+4);
      return sushis.map((sushi,i) => <Sushi name={sushi.name} image={sushi.img_url} price={sushi.price} isEaten={this.state.isEaten} key={i} id={sushi.id} eaten={this.eaten}/>)
    }

    showMoreSushi = () => {
      console.log(this.state.currentSushi+4)
      this.setState({
        currentSushi: this.state.currentSushi + 4
      })
    }

    eaten(price){
      let newPlateArray = this.state.emptyPlate.push(price)
      this.setState({
        emptyPlate:newPlateArray
      })
    }


    render(){
      return (
        <Fragment>
          <div className="belt">
            {
              this.fetch()
            }
            <MoreButton showMoreSushi={this.showMoreSushi}/>
          </div>
        </Fragment>
      )
    }
  }

  

export default SushiContainer