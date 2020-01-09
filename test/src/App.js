import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
import Clock from './components/Clock';
import ControlloLogin from './components/ControlloLogin';
*/

import Interruttore from './components/Interruttore';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      login: false,
      user: {
        name: 'Alessandro',
        surname: 'Pericolo',
        age: 29
      }
    }
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </header>

        <Interruttore />
      </div>
    );

  }
}

export default App;
