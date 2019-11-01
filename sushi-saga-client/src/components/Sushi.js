import React, { Fragment, Component } from 'react'

class Sushi extends Component {
  constructor(){
    super();

    this.state = {
      eaten: false
    }
  }

  render() {
      return (
        <div className="sushi">
          <div className="plate" 
              id={this.props.sushi.id}
              onClick={() => this.props.eatSushi(this.props.sushi.id)}>
            { 
              /* Tell me if this sushi has been eaten! */ 
              this.props.sushi.eaten ?
                null
              :
                <img src={this.props.sushi.img_url} width="100%" />
            }
          </div>
          <h4 className="sushi-details">
            {this.props.sushi.name} - ${this.props.sushi.price}
          </h4>
        </div>
      )
  }
}

export default Sushi