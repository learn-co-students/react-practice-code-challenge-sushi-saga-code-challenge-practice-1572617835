import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sushiList: [],
      numberEaten: 0,
      money: 300,
      page: 0
    }
  }

  componentDidMount(){
  fetch(API)
  .then(res => res.json())
  .then(data => {
    const sushiArr = data.map(sushi => {
      sushi.eaten = false;
      return sushi
    })
    this.setState({sushiList: sushiArr})
  })
  }

  eatSushi = (id) => {
   const targetSushiIndex = this.state.sushiList.findIndex(sushi => sushi.id === id)
   const updatedSushiList = this.state.sushiList
   updatedSushiList[targetSushiIndex].eaten = true
    this.setState({
      sushiList: updatedSushiList,
      money:  this.state.money - this.state.sushiList[targetSushiIndex].price,
      numberEaten: this.state.numberEaten + 1,
    })
  }
  
  changePage = () => {
    this.setState({page: this.state.page + 1})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  
        sushiList={this.state.sushiList}
        page={this.state.page}
        eatSushi={(id) => this.eatSushi(id)}
        changePage={this.changePage}/>
        <Table 
        money={this.state.money}
        numberEaten={this.state.numberEaten}
        />
      </div>
    );
  }
}

export default App;