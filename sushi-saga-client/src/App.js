import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Thoughts: I proably need to take the info from Json and pass it to sushi container, which can map that info over the sushi component
// To do that, I need to pass the info, probably in an array. The sushi component requests a boolean for "eaten",
// the array and boolean most likely need to be passed as state/props



// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = { 
    sushiArray: []
  }

  componentDidMount = ( ) => {
    fetch(API)
    .then(resp => resp.json())
    .then(data =>{
      const sushiData = data.map(sushi => {
        sushi.eaten = false;
        return sushi
      })
      this.setState({ sushiArray: sushiData})
      })
  }

  eatSushi(){

  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        eatSushi={this.eatSushi.bind(this)}
        sushiArray={this.state.sushiArray} 
        />
        <Table />
      </div>
    );
  }
}

export default App;