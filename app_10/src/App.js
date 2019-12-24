import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      age: 0,
    }
  }
  myInput = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  }

  render() {
    let a = '';
    if (this.state.text) {
      a = <p>Your enter text: {this.state.text}</p>;
    }
    else {
      a = '';
    }
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input onChange={this.myInput} name="text" />
          <input onChange={this.myInput} type="number" name="age" />
          <input type="submit" />
          {a}
          <p>Age: {this.state.age}</p>
        </form>
      </div>
    );
  }
}

export default App;
