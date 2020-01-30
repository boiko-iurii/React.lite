import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
      countX: 0,
      countO: 0,
      sign: 0
    }
    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    this.winner = false;

  }
  isWinner = () => {
    let s = (this.state.count % 2 === 0) ? 'X' : 'O';
    let currentCountX = (s === 'X') ? 1 : 0;
    let currentCountO = (s === 'O') ? 1 : 0;

    for (let i = 0; i < 8; i++) {
      let line = this.winnerLine[i];
      if (this.state.squares[line[0]] === s
        && this.state.squares[line[1]] === s
        && this.state.squares[line[2]] === s) {
        this.winner = true;
        this.setState({
          countX: this.state.countX + currentCountX,
          countO: this.state.countO + currentCountO
        })
        alert(s + ' winner');
      }
    }
  }
  isDraw = () => {
    if (this.state.squares.indexOf(null) === -1
      && this.winner === false)
      alert('is draw');
  }
  clickHandler = event => {
    let data = event.target.getAttribute('data');
    let currentSquares = this.state.squares;
    if (currentSquares[data] === null) {
      currentSquares[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
      this.setState({
        squares: currentSquares,
        count: this.state.count + 1
      });
    }
    this.isWinner();
    this.isDraw();
  }
  newGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      count: this.state.sign
    })
    this.winner = false;
  }
  firstSign = (event) => {
    let sign = +event.target.getAttribute('data-sign');
    this.setState({
      sign: sign,
      count: sign
    });
  }
  render() {
    return (
      <div className="tic-tac-toe">
        <div className="ttt-grid" onClick={this.clickHandler} data="0">{this.state.squares[0]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="1">{this.state.squares[1]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="2">{this.state.squares[2]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="3">{this.state.squares[3]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="4">{this.state.squares[4]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="5">{this.state.squares[5]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="6">{this.state.squares[6]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="7">{this.state.squares[7]}</div>
        <div className="ttt-grid" onClick={this.clickHandler} data="8">{this.state.squares[8]}</div>
        <button className="new-game" onClick={this.newGame}>Новая игра</button>
        <div className="score">
          <h5>Количество побед</h5>
          <div>X:<b>{this.state.countX}</b></div><div>O:<b>{this.state.countO}</b></div>
        </div>
        <div className="first-sign">
          <h5>Право первого хода:</h5>
          <button className="first-sign-btn" data-sign="0" onClick={this.firstSign}>X</button>
          <button className="first-sign-btn" data-sign="1" onClick={this.firstSign}>O</button>
        </div>
      </div>
    );
  }
}

export default App;
