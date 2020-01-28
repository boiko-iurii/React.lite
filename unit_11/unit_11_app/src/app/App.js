import React from 'react';
import App2 from '../app2/App2';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s1: 's1',
      s2: 's2',
      s3: this.s1 * this.s2
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      s1: props.a1,
      s2: props.a2,
    }
  }

  render() {
    return (
      <div className="App">
        <h3>Task 1</h3>
        <p>{this.props.a1}</p>
        <p>{this.props.a2}</p>
        <h3>Task 2</h3>
        <p>{this.state.s1}</p>
        <p>{this.state.s2}</p>
        <h3>Task 3</h3>
        <p>{this.state.s3}</p>
        <h3>Task 4</h3>
        <h3>Task 5</h3>
        <App2 z1={this.props.s3} />
      </div >
    );
  }
}

export default App;
