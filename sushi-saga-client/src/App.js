import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushiArray: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let pictures = data.map(pic => {
          return (
            <div key={pic.results}>
              <img src={pic.picture} />
            </div>
          );
        });
        this.setState({ pictures: pictures });
        console.log("state", this.state.pictures);
      });
  }

  render() {
    return (
      <div className="app">
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

export default App;
