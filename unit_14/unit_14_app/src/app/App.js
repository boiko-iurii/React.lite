import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../main/Main';
import About from '../about/About';
import Contacts from '../contacts/Contacts';
import ErrorPage from '../errorpage/ErrorPage';
import Header from '../header/Header';
import Footer from '../footer/Footer';


class App extends React.Component {
  render() {

    // const nav = this.props.nav;

    return (
      <Router>
        <div className="App">
          <Header />
          <ul>
            <li><a href="/">Main page</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contacts">Contacts</a></li>
            {
              // Object.keys(nav).map(elem => {

              //   return <li><a href={nav[elem]}>{elem}</a></li>
              // })
            }
          </ul>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact component={ErrorPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
