import React, { Fragment } from 'react'

class Sushi extends React.Component{
  
  state = {
    beenEaten: false
  }  

  eatMe = () =>{
    !this.state.beenEaten && this.props.updateMoney(this.props.sushi.price) ? this.setState({beenEaten: true}) : null // returns true if enough money is left and false if not enough money 
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.eatMe}>
          { 
            this.state.beenEaten ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${[this.props.sushi.price]}
        </h4>
      </div>
    );
  }
}

export default Sushi