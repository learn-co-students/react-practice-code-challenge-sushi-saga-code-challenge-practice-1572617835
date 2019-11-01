import React, { Component } from 'react'

class Sushi extends Component {

 handleClick = () => {
  console.log(this.props.eaten)
 //need to pass this id back up to app to change state of eaten within the sushiArray

 }

  
  render(){
    
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.handleClick}>
          { 
            this.props.eaten ?
              null
            :
              <img src={this.props.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    )
  }
  
}

export default Sushi