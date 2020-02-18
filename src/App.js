import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const { CalculatorClient } = require('./calculator_grpc_web_pb');
const calculator = require('./calculator_pb');


const client = new CalculatorClient('http://localhost:9090', null, null);


class App extends Component {
  
  squareRootValue = () => {
    const num = new calculator.Number()
    num.setValue(16)

    client.squareRoot(num, {}, (err, response) => {
      if (response == null) {
        console.log(err)
      }else {
        console.log(response.getValue())
      }
    });
  }

  addValues = () => {
    let nums = new calculator.Numbers()
    const numsArray = [1, 2, 3, 4]
    const tempArray = []
    numsArray.forEach(e => {
      let temp = new calculator.Number()
      temp.setValue(e) 
      tempArray.push(temp)
    })

    nums.setValuesList(tempArray)

    console.log(nums)

    client.add(nums, {}, (err, response) => {
      if (response == null) {
        console.log(err)
      }else {
        console.log(response.getValue())
      }
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button style={{padding:10}} onClick={this.squareRootValue}>Click for grpc request</button>
          <button style={{padding:10}} onClick={this.addValues}>Click to Addt</button>
        </header>
      </div>
    );
  }
}


export default App;
