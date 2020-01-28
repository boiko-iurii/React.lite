import React from 'react';
import './App2.css';

class App2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      y1: ''
    }
  }
  static getDerivedStateFromProps(props, state) {
    return {
      y1: props.z1,
    }
  }
  render() {
    return (
      <div className="App2">
        <p>{this.props.z1}</p>
        <p>{this.state.y1 * 10}</p>
      </div >
    );
  }
}

export default App2;
