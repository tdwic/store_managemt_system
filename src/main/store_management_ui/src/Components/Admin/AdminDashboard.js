import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import {CardDeck} from "react-bootstrap";
import {Media} from "react-bootstrap";
import {Col} from "react-bootstrap";
import { Row } from "react-bootstrap";
import {CardImg} from "react-bootstrap";

export default class AdminDashboard extends Component {
    render() {
        return(
            <div>
                <CardDeck>
                    <Card>
                        <Card.Header as="h5">Number of Categories</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col sm><Card.Title>Image</Card.Title></Col>
                                <Col sm><Card.Title>Count</Card.Title></Col>
                            </Row>
                            {/*<div className='float-left'>*/}
                            {/*    <h5>Image comes here</h5>*/}
                            {/*</div>*/}
                            {/*<div className='float-right'>*/}
                            {/*    <h5>Count comes here</h5>*/}
                            {/*</div>*/}
                            {/*/!*<Card.Title>Special title treatment</Card.Title>*!/*/}
                            {/*/!*<Card.Text>*!/*/}
                            {/*/!*    With supporting text below as a natural lead-in to additional content.*!/*/}
                            {/*/!*</Card.Text>*!/*/}
                            {/*</div>*/}
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header as="h5">Number of Store Managers</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col sm><Card.Title>Image</Card.Title></Col>
                                <Col sm><Card.Title>Count</Card.Title></Col>
                            </Row>
                            {/*<Card.Title>Special title treatment</Card.Title>*/}
                            {/*<Card.Text>*/}
                            {/*    With supporting text below as a natural lead-in to additional content.*/}
                            {/*</Card.Text>*/}
                        </Card.Body>
                    </Card>
                </CardDeck>


            </div>

        );
    }
}
