import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      i: 0,
      plates: [],
      money: 100
    };
  }

  handleMoreButtonClick = () => {
    this.setState(prevState => {
      return { i: prevState.i + 1 };
    });
  };

  handleEatenClick = id => {
    let sushis = this.state.sushis;
    let sushi = sushis.find(sushi => {
      return sushi.id === id;
    });
    if (sushi.price > this.state.money) {
      return false;
    }
    sushi["eaten"] = true;
    let plates = [...this.state.plates];
    plates.push(sushi);
    this.setState(prevState => {
      return {
        sushis: [...sushis],
        plates: plates,
        money: prevState.money - sushi.price
      };
    });
  };

  setEatenFalseForAllSushis = () => {
    let sushis = this.state.sushis;
    sushis.forEach(sushi => {
      return (sushi["eaten"] = false);
    });
    this.setState({
      sushis: sushis
    });
  };

  fetchSushi = () => {
    fetch(API)
      .then(response => response.json())
      .then(json => {
        this.setState({
          sushis: json
        });
        this.setEatenFalseForAllSushis();
      });
  };

  componentDidMount() {
    this.fetchSushi();
  }
  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis.slice(
            this.state.i * 4,
            (this.state.i + 1) * 4
          )}
          handleMoreButtonClick={this.handleMoreButtonClick}
          handleEatenClick={this.handleEatenClick}
        />
        <Table money={this.state.money} plates={this.state.plates} />
      </div>
    );
  }
}

export default App;
