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



class InsurerLogin extends Component {
    render() {
        return (
            <div class="user-login-area" id="insurance-login-area">
            <Card.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Insurance Company" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Insurance Employee ID #" />
                        </Col>
                        <Col>
                            <Button id="insurer-login-button">Insurance Agent Login</Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
            </div>
        )
    }
}
export default InsurerLogin;