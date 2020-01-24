import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      count: 0,
      input: "",
      warning: ""
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
  getAttr = (event) => {
    console.log(event.target.getAttribute('data'));
  }
  func7 = (event) => {
    if (event.target.value.length < 6) {
      this.setState({
        input: event.target.value,
        warning: 'Предупреждение! Длина меньше 6!'
      });
    }
    else {
      this.setState({
        input: event.target.value,
        warning: ''
      });
    }
  }
  func9 = (event) => {
    if (event.target.checked) console.log('checked')
    else console.log('unchecked')
  }
  render() {
    return (
      <div className="App" >
        <div className="buttons-wrapper">
          <h4>Task 1</h4>
          <button onClick={this.task1} >click1</button>
          <h4>Task 2</h4>
          <button onClick={this.task2} >click2</button>
          <p>{this.state.text}</p>
          <h4>Task 3</h4>
          <button onClick={this.addCount} >Count</button>
          <p>{this.state.count}</p>
          <h4>Task 4</h4>
          <button onClick={this.resetCount} >ResetCount</button>
          <h4>Task 5</h4>
          <div className="mouse-container" onMouseMove={this.mouseFunc} ></div>
          <h4>Task 6</h4>
          <button onClick={this.getAttr} data="atr-1">atr1</button>
          <button onClick={this.getAttr} data="atr-2">atr2</button>
          <h4>Task 7</h4>
          <input type="text" onInput={this.func7} defaultValue="" /><span style={{ color: "red", fontSize: "12px" }}>{this.state.warning}</span>
          <p>{this.state.input}</p>
          <h4>Task 8</h4>
          <h4>Task 9</h4>
          <label htmlFor="ch9"><input type="checkbox" onChange={this.func9} id="ch9" />Checkbox</label>
          <h4>Task 10</h4>
          <label htmlFor="rb1"><input type="radio" name="rbt10" onChange={this.func9} id="rb1" />radio1</label>
          <label htmlFor="rb2"><input type="radio" name="rbt10" onChange={this.func9} id="rb2" />radio1</label>
          <label htmlFor="rb3"><input type="radio" name="rbt10" onChange={this.func9} id="rb3" />radio1</label>

          <h4>Task 11</h4>
          <h4>Task 12</h4>
          <h4>Task 13</h4>
          <h4>Task 14</h4>
        </div>
      </div >
    );
  }
}

export default App;
