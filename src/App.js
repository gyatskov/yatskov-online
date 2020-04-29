import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import logo from './logo/logo_4x.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />
        <p>yatskov.online</p>
    <div class="site-wrapper">
      <div class="site-wrapper-inner">
        <div class="cover-container">
          <div class="row">
            <div class="col-md-3 pad">
              <span class='socicon-linkedin icon'></span>
            </div>
            <div class="col-md-3 pad">
              <span class='socicon-github icon'></span>
            </div>
            <div class="col-md-3 pad">
              <span class='socicon-facebook icon'></span>
            </div>
            <div class="col-md-3 pad">
            </div>
          </div>
        </div>
      </div>
    </div>
      </header>
  </div>
  );
}

export default App;
