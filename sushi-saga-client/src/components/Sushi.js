import React, { Fragment, Component } from 'react'

class Sushi extends Component{

  constructor(props){
    super(props)
    this.state={
      sushiIsEaten: props.isEaten
    }
  }

  eaten = () => {
    this.setState({
      sushiIsEaten: true
    })
  }


  render(){

    return (
      <div className="sushi">
        <div className="plate" 
             onClick={()=>this.eaten()}>
          { 
            this.state.sushiIsEaten? null :<img src={this.props.image} width="100%" />
          }
  
        </div>
        <h4 className="sushi-details">
          {this.props.name}({this.props.id}) - ${this.props.price}

        </h4>
      </div>
    )
  }
}

export default Sushi