import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: []
  }

  fetchSushi = () => {
    fetch(API).then(resp => resp.json()).then(response => this.setState({sushi: response}))
  }

  sushi =  this.fetchSushi()
  
 

  render() {
   
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} />
        <Table />
      </div>
    );
  }
}

export default App;