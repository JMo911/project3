import React, { Component } from "react";
import {Accordion, Card, Container, Row, Col, Button} from "react-bootstrap";
// import ReactDOM from 'react-dom';
import posed from 'react-pose';
// import data from '../login/data/data';
import './styles.css';



class LoginPage extends Component {
    render() {
      return (
        <Container>
            <Row>
                <Col md={9}>
                    <div id="mainArea">
                        <img src="https://via.placeholder.com/600x300.png"/>
                        <p>Welcome to V-STAT!</p>
                    </div>
                    
                </Col>
                <Col md={3}>
                    <div id="loginBox">
                        <Button id="insurerLoginButton">Insurance Agent Login</Button>
                        <Button id="mechanicLoginButton">Mechanic Login</Button>
                        <Button id="customerLoginButton">Customer Login</Button>

                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Click me!
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        Click me!
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        
                    </div>
                </Col>
            </Row>
        </Container>
      )
    }
}
export default LoginPage;









const rootElement = document.getElementById('root');
// ReactDOM.render(<Example />, rootElement);