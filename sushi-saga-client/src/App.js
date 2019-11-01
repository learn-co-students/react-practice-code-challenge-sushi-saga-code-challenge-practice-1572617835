import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      sushis: [],
      money: 100,
    }
  }

  // sushis = this.state.sushis

  // sliceSushi = ()=>{
  //   let sushis = [...this.state.sushis]
  //   sushis.slice(0,3)
  // }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushiData => 
    // sushiData is an array of sushis
    // ((sushiData)=> {
    //   sus
    // })
      this.setState({
        sushis: sushiData
      },()=>{
        console.log(this.state.sushis)
      })
    )
  }

  // change state of how many sushis are on the screen


  // change state of money when user clicks on sushi


  handleMoreClick(event){
    // if(event.target)
    console.log('i was clicked')
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
        sushis={this.state.sushis}
        handleMoreClick={this.handleMoreClick()}
        // need to pass prop to the more button
        />
        <Table
        money={this.state.money}
        />
      </div>
    );
  }
}

export default App;