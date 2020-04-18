import React from 'react';
import Image from 'react-bootstrap/Image'
import logo from './logo.svg';
import background from './background/20180517_123646.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>yatskov.online</p>
      </header>
    </div>
  );
}

export default App;
