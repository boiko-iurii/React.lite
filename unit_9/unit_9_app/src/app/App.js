import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      count: 0
    }
    this.task2 = this.task2.bind(this);
    this.addCount = this.addCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  task1() {
    console.log('button work');
  }
  task2() {
    this.setState({
      text: "button work"
    })
  }
  addCount() {
    let i = this.state.count;
    i++;
    this.setState({
      count: i
    });
  }
  resetCount() {
    this.setState({
      count: 0
    });
  }
  mouseFunc = () => {
    console.log('move');
  }
  render() {
    return (
      <div className="App" >
        <button onClick={this.task1} >click1</button>
        <button onClick={this.task2} >click2</button>
        <button onClick={this.addCount} >Count</button>
        <button onClick={this.resetCount} >ResetCount</button>
        <p>{this.state.text}</p>
        <p>{this.state.count}</p>
        <div onMouseMove={this.mouseFunc} style={{ width: '200px', height: '100px', background: 'green' }}></div>
      </div >
    );
  }
}

export default App;
