import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from './logo/logo_4x.png';
import icon_linkedin from './icon/B-linkedin.svg';
import icon_github   from './icon/B-github.svg';
import './App.css';

function App() {
  return (
      <Jumbotron className="App">
        <header className="App-header">
          <Image src={logo} className="App-logo" alt="logo" />
        </header>
        <Container >
          <Row >
            <Col className="Contact-pad">
              <Button href='http://www.linkedin.com/in/gennadij-yatskov' variant="dark" block>
                <Image src={icon_linkedin} alt="icon-linkedin" className="Contact-icon" />
              </Button></Col>
            <Col className="Contact-pad text-center">
              <Button href='mailto:gennadij@yatskov.de' variant="dark" className="text-center" block >
                <address className="text-center">gennadij@yatskov.de</address>
              </Button>
            </Col>
            <Col className="Contact-pad">
              <Button href='https://github.com/gyatskov' variant="dark" block>
                <Image src={icon_github} alt="icon-github" className="Contact-icon" />
              </Button>
            </Col>
          </Row>
        </Container>
      <footer className="fixed-bottom">
        <Container>
        <Row>
          <Col>Copyright 2020</Col>
        </Row>
        <Row>
          <Col><div class='credits'>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></Col>
        </Row>
        </Container>
      </footer>
      </Jumbotron>
  );
}

export default App;
