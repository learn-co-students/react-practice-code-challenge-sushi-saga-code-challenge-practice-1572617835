import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis/?results=4"



class App extends Component {
  constructor(){
    super()
      this.state = {
        allSushi: []
      }
}


componentDidMount() {fetch(API)
    .then(resp => resp.json())
    .then(sushi => {
      let allSushi = sushi.map((sushi) => {
        return (
          
          <div key={sushi.id}> {console.log(sushi)}
          {sushi.name}
          <img src={sushi.image_url}
          alt={sushi.name} />
          </div>
         
        )
      })
      this.setState({
        allSushi: allSushi
      })
    })
  }

  render() {
    return (
      <div className="app">  
        <SushiContainer sushi={this.state.allSushi}/>
        <Table />
      </div>
    );
  }
}

export default App;