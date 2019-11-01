import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sushiArray: [],
      tablePlates: [],
      dollarsLeft: 100,
      sushiPlateEmpty: false 
    }
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushiData => {
        this.setState({
        sushiArray: sushiData
      })
    });
    // console.log(this.sushiArray)
  }

  render() {
    const { sushiArray, tablePlates, dollarsLeft, sushiPlateEmpty } = this.state
    // console.log(this.state)
    return (
      <div className="app">
        <SushiContainer sushiArray={sushiArray} sushiPlateEmpty={sushiPlateEmpty}/>
        <Table tablePlates={tablePlates} dollarsLeft={dollarsLeft}/>
      </div>
    );
  }
}

export default App;