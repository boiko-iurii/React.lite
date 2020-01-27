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
      select: '',
      out: ''
    }
  }

  handleField = (e) => {
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.text.value,
      number: e.target.number.value
    });

    console.log(e.target.number.name);
    console.log('submited');
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitForm}>
          <div><input type="text" name="text" /></div>
          {/* <div><input type="number" name="number" onChange={this.handleField} /></div> */}
          <div><input type="number" name="number" /></div>

          <input type="submit" className="button-primary" />
        </form>
        <div className="table">
          <div className="table-head">
            <div>name</div><div>значение</div>
          </div>
          {/* <div className="table-row">
            <div>{this.state.text}</div><div>{this.state.text}</div>
          </div> */}
          {this.state.text}<br />
          {this.state.number}<br />
        </div>
      </div>
    );
  }
}

export default App;
