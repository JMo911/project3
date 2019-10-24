import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
// import {BrowserRouter, Route, Link} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import LoginPage from "./components/login/index";
import LoginBox from "./components/login/loginbox";

class App extends Component {
  render() {
    return (
        <Container>
          <Row>
            <Col md={8}>
              <div id="mainArea">
                <LoginPage />
              </div>
            </Col>
            <Col md={3}>
              <LoginBox />
            </Col>
          </Row>
        </Container>
    );
  }
}

export default App;
