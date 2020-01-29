import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'ttt'
    }
  }
  render() {

    return (
      <div className="tic-tac-toe">
        {this.state.test}
      </div>
    );
  }
}

export default App;
