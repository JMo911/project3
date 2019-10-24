import React, { Component } from "react";
import {
    // Accordion, 
    Button,
    Card,
    Col,  
    // Container,
    Form,
    // Control, 
    Row
    } from "react-bootstrap";
import './styles.css';



class MechanicLogin extends Component {
    render() {
        return (
            <div class="user-login-area" id="mechanic-login-area">
            <Card.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Automotive Body Shop" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Automotive Body Shop Password" />
                        </Col>
                        <Col>
                            <Button id="mechanic-login-button">Mechanic Login</Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
            </div>
        )
    }
}
export default MechanicLogin;