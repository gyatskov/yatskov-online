import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './logo/logo_4x.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <header className="App-header">
          <Image src={logo} className="App-logo" alt="logo" />
        </header>
        <Container className="Contact-row">
          <Row>
            <Col className="Contact-pad"><Button href='http://www.linkedin.com/in/gennadij-yatskov' variant="dark" block>LinkedIn</Button></Col>
            <Col className="Contact-pad"><Button href='mailto:vokstay@gmx.de' variant="dark" block>E-Mail</Button></Col>
            <Col className="Contact-pad"><Button href='https://github.com/gyatskov' variant="dark" block>Github</Button></Col>
          </Row>
        </Container>
      </Jumbotron>
      <footer>
        <Container>
        <Row>
          <Col>Copyright 2020</Col>
        </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
