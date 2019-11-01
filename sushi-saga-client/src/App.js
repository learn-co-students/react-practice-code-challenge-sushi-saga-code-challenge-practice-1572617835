import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor (){
    super();

    this.state = {
      sushis: [],
      money: 100,
      sushisEaten: []
    }
    this.getSushi()
  }

  getSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(data => {console.log(data); this.setState({ sushis: data })})
    .then(console.log(this.state))
  }

  eatSushi = (id) => {
    let newSushis = this.state.sushis.map(sushi => {
      if (sushi.id == id) {
        if (this.state.money - sushi.price >= 0) {
          let newSushisEaten = this.state.sushisEaten.concat(sushi);
          this.setState({money: this.state.money - sushi.price, sushisEaten: newSushisEaten})
          return {...sushi, eaten: true}
        } else {
          return sushi
        }
      } else {
        return sushi
      }
    })

    this.setState({ sushis: newSushis})

  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi}/>
        <Table sushisEaten={this.state.sushisEaten} money={this.state.money}/>
      </div>
    );
  }
}

export default App;