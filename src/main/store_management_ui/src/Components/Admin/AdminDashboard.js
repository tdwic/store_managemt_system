import React, {Component} from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import {CardDeck} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Media} from "react-bootstrap";
import {Col} from "react-bootstrap";
import { Row } from "react-bootstrap";
import {CardImg} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Category from "./Category";
import {CommonGet} from "../../config";

export default class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories:[],
            users:[],
            storeManagers:[]
        }
    }

    componentDidMount() {
        this.listAllCategories();
        this.listAllStoreManagers();
    }


    listAllCategories = () =>{
        CommonGet('listCategoryDet','')
            .then(res=>res.json())
            .then(json =>{
                this.setState({
                    categories: json
                })
            });
    }

    listAllStoreManagers = () =>{
        CommonGet('user','')
            .then(res => res.json())
            .then(json =>{
                this.setState({
                    users : json
                })
                const usersList = this.state.users;
                const storeM = usersList.filter(person => person.role === 2);
                this.setState({
                    storeManagers : storeM
                })
            })
    }

    getCategoryCount = () =>{
        const  count  = this.state.categories.length;
        return count;
    }


    getStoreManagerCount = () => {
        const  count  = this.state.storeManagers.length;
        return count;

    }
    render() {
        return(
                <div>
                    <CardDeck>
                        <Card>
                            <Card.Header as="h5">Category Details</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col sm><Card.Title>Image</Card.Title></Col>
                                    <Col sm><Card.Title>{this.getCategoryCount()}</Card.Title></Col>
                                </Row>
                                <Row>
                                    <Col lg><Button style = {{color:"white"}}variant="info" size = "lg" ><Link to='/Category' style = {{fontColor:"white"}}>Add Category</Link></Button></Col>
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
                            <Card.Header as="h5">Store Manager Details</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col sm><Card.Title>Image</Card.Title></Col>
                                    <Col sm><Card.Title>{this.getStoreManagerCount()}</Card.Title></Col>
                                </Row>
                                <Row>
                                    <Col lg><Button variant="info" size = "lg"><Link to='/StoreManager'>Add Store Manager</Link></Button></Col>
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
