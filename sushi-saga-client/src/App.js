import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:4000/sushis"

class App extends Component {

  state = { 
    sushi: []
  }

  componentDidMount() { 
   fetch(API) 
      .then(resp => resp.json())
      .then(resp => this.setState({
          sushi: resp
      }))
  }

  render() {
    return (
      <div className="app">
        <Table />
        <SushiContainer sushi={this.state.sushi} /> 
      </div>
    );
  }
}

export default App;