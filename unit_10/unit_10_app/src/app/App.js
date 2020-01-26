import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      number: 0,
      range: 0,
      textarea: '',
      select: ''
    }
  }
  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.text.name);
    console.log(e.target.text.value);
  }
  handleField = (e) => {
    console.log(e.target.value)
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitForm} id="form">
          <div><input type="text" name="text" onChange={this.handleField} /></div>
          <div><input type="number" name="number" onChange={this.handleField} /></div>
          <div><input type="range" name="range" onChange={this.handleField} /></div>
          <div><textarea rows="5" name="textarea" onChange={this.handleField} /></div>
          <div>
            <select name="select" >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <input type="submit" className="button-primary" />
        </form>
        <div className="table">
          <div className="table-head">
            <div>name</div><div>значение</div>
          </div>
          <div className="table-row">
            <div>{this.state.text}</div><div>{this.state.text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
