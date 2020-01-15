import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-12 text-center">
          <h1>First React APP</h1>
          <img src="https://cdn0.iconfinder.com/data/icons/flat-round-system/512/reactos-256.png" alt="" />
          <p>my first react app</p>
          <button className="button-primary">Default</button>
        </div>
      </div>
    </div>
  );
}

export default App;
