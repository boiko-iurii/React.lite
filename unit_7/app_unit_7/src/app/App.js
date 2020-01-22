import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.props.title}</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            {this.props.hero}
          </p>

        </header>
        <Nav nav={this.props.nav} />
        <Footer
          contacts={this.props.contacts}
          address={this.props.address}
          copyrights={this.props.copyrights}
        />
      </div>
    );
  }
}

export default App;
