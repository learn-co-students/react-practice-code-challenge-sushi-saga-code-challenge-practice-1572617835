import React, { Component } from 'react'

// prob wrong -> app.js needs to know that the sushi was eaten so it can be passed down to table.js

class Sushi extends Component{ 
  
  state = {
    eaten: false
  }
  
  sushiAte = (price) => {
    this.setState({
      eaten: true
    })
    this.props.eatSushi(price)
  }

  render(){
    return (
      <div className="sushi">

        {this.state.eaten ? 
          <div className='empty-plate' ></div> :
          
          <div>
            <div className="plate" onClick={() => this.sushiAte(this.props.sushi.price)}>
              { <img src={this.props.sushi.img_url} width="100%" alt='n/a'/> }
            </div>
            <h4 className="sushi-details">
              <p>{this.props.sushi.name} - ${this.props.sushi.price} </p>
            </h4>
          </div>
        }
        
      </div>
    )
  }
}

// const Sushi = (props) => {
//   return (
//     <div className="sushi">
//       <div className="plate" 
//            onClick={() => props.eatSushi(props.sushi.price)}>
//         { <img src={props.sushi.img_url} width="100%" alt='n/a'/>
//           /* Tell me if this sushi has been eaten! */ 
//           // // true ?
//           // //   null
//           // // :
//         }
//       </div>
//       <h4 className="sushi-details">
//       <p>{props.sushi.name} - ${props.sushi.price} </p>
        
//       </h4>
//     </div>
//   )
// }

export default Sushi