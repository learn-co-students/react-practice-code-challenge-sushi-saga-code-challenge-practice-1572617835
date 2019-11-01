import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    beltStart: 0,
    beltEnd: 3,
    currentSushis: []
  };
  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis =>
        this.setState({
          sushis: sushis
        })
      );
    // .then(console.log(prevState.sushis));
    // .then(
    //   this.setState(prevState => ({
    //     currentSushis: prevState.sushis.slice(0, 3)
    //   }))
    // )
    // .then(console.log(this.state.currentSushis));
  }

  //this needs to be connected to button
  handleMoreSushiClick = event => {
    this.setState(prevState => ({
      beltStart: prevState.beltStart + 1,
      beltEnd: prevState.beltEnd + 1
    }));
    let currentSushis = this.state.sushis.slice(
      this.state.beltStart,
      this.state.beltEnd
    );

    this.setState({
      currentSushis: currentSushis
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          currentSushis={this.state.currentSushis}
          beltStart={this.state.beltStart}
          beltEnd={this.state.beltEnd}
          handleClick={this.handleMoreSushiClick}
        />
        <Table />
      </div>
    );
  }
}

export default App;
