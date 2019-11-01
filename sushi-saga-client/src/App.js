import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      sushis: [],
      money: 100,
      index: 0
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then (sushisArray => { 
        this.setState({sushis: sushisArray})
      })
  }

  nextFourSushis = () => {
    // this.setState(previousState => {
    //   return {index: previousState+4}
    // });
    this.setState({index: this.state.index+4});
  }
  
  updateMoney = (sushiPrice) => {
    console.log("WOROKING");
    if(this.state.money - sushiPrice > 0) {
      this.setState({money: this.state.money - sushiPrice});
      return true;
    }
    return false;
  }

  render() {
    console.log(this.state.sushis);
    console.log(this.state.index);
    console.log(this.state.money);
    return (
      <div className="app">
        <SushiContainer updateMoney={this.updateMoney} money={this.state.money} nextFourSushis={this.nextFourSushis} index={this.state.index} sushis={this.state.sushis}/>
        <Table money={this.state.money}/>
      </div>
    );
  }
}

export default App;