import React from 'react';
import logo from './logo.svg';
import './App.css';

function Ciao(props) {
  return <h1>Ciao, {props.nome}</h1>;
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Ciao nome="Ale" />
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
