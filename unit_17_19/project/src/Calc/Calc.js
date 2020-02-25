import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }

  calcRate = (e) => {
    e.preventDefault();
    let countCurrency = e.target.elements['count-currency'].value;
    let typeCurrency = e.target.elements['type-currency'].value;
    this.setState({
      result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2)
    });
  }

  render() {
    return (
      <div className="calculator">
        <h3> Калькулятор обмена</h3>
        <div className="block">
          <div>Я хочу</div>
          <div>
            <form onSubmit={this.calcRate}>
              <input name="count-currency" type="number" defaultValue="100" />
              <select name="type-currency">
                {Object.keys(this.props.rate).map((keyName) => (
                  <option key={keyName} value={keyName}>{keyName}</option>
                )
                )}
              </select>
              <input type="submit" value="Calc" />
            </form>
          </div>
          <div>
            <h4>Результат</h4>
            <ul className="calc-res">
              <li>EUR {this.state.result}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
