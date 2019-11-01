import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis/?results=4"

class App extends Component {
constructor(){
  super();
  this.state = {
    sushiArray: []
  };
}

componentDidMount(){
fetch(API)
.then(resp => resp.json())
.then(data => {
//   data.forEach(su => { 
//   if (sushiArray.length < 4){
//     sushiArray.push(su);
//   }
// })
  let sushiArray = data.map((s) => {
    return(
      <div key={s.id}>
        <img src={s.img_url}/>
        <h1>{s.name}</h1>
      </div>
    )
  })
  this.setState({sushiArray: sushiArray});
})
}

  render() {
    return (
      <div className="app">
        <div className='sushi'>
          {this.state.sushiArray}
        </div>
        <SushiContainer  />
        <Table />
      </div>
    );
  }
}

export default App;