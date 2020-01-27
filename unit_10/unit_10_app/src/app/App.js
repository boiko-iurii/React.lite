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
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    let out =
      <table>
        <tbody><tr>
          <th>Name</th>
          <th>Значение</th>
        </tr>
          <tr>
            <td>text</td>
            <td>{this.state.text}</td>
          </tr>
          <tr>
            <td>number</td>
            <td>{this.state.number}</td>
          </tr>
          <tr>
            <td>range</td>
            <td>{this.state.range}</td>
          </tr>
          <tr>
            <td>textarea</td>
            <td>{this.state.textarea}</td>
          </tr>
          <tr>
            <td>select</td>
            <td>{this.state.select}</td>
          </tr>
        </tbody>
      </table>;

    this.setState({
      out: out
    });

  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitForm} id="form">
          <div><input type="text" name="text" onChange={this.handleField} /></div>
          <div><input type="number" name="number" onChange={this.handleField} /></div>
          <div><input type="range" name="range" min="0" max="21" step="1" value={this.state.range} onChange={this.handleField} /></div>
          <div><textarea rows="5" name="textarea" onChange={this.handleField} /></div>
          <div>
            <select name="select" onChange={this.handleField} >
              <option value=""></option>
              <option value="01">1</option>
              <option value="02">2</option>
              <option value="03">3</option>
              <option value="04">4</option>
              <option value="05">5</option>
            </select>
          </div>
          <input type="submit" className="button-primary" />

          {this.state.out}

        </form>
      </div>
    );
  }
}

export default App;
