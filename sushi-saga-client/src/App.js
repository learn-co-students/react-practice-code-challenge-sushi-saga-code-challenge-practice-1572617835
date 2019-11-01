import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!

/// sushi being eaten should be here somewhere so that it can be passed down to table.js

const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    startSushi: 0,
    endSushi: 4,
    eatenSushi: [],
    money: 500
  }

  componentDidMount(){
    fetch(API, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allSushi: [...data]
      })
    })
  }

  eatSushi = (price) => {
    return price <= this.state.money ?
      this.setState(prevState => ({
        money: (prevState.money - price)
      }))
      :
      null
  }

  sushiWasEaten = (index) => {
    this.setState(prevState => ({
      eatenSushi: [...prevState, (index - 1) ]
    }))
  }

  moreSushiButton = () => {
    this.setState(prevState => ({
      startSushi: (prevState.startSushi + 4),
      endSushi: (prevState.endSushi + 4),
      eatenSushi: []
    }))
  }
  
  render() {
    return (
      <div className="app">
        <SushiContainer allSushi={this.state.allSushi.slice(this.state.startSushi,this.state.endSushi)} moreSushiButton={this.moreSushiButton} eatSushi={this.eatSushi} />
        <Table money={this.state.money} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;