import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Container, Row, Col, Button} from "react-bootstrap";
import LoginPage from "./components/login/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Row>
            <Col md={9}>
              <div id="mainArea">
                <Route exact path="/" component={LoginPage} />
              </div>
            </Col>
            <Col md={3}>
              {/* <LoginPage /> */}
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
