import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state ={
    allSushi: [],

  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        const sushiData = data.map(sushi => {
          sushi.eaten = false;
          return sushi
        })
        this.setState({ allSushi: sushiData})
      })
  }

  render() {
    return (
      <div className="app">
        {console.log(this.state.allSushi)}
        <SushiContainer allSushi={this.state.allSushi}/>
        <Table />
      </div>
    );
  }
}

export default App;