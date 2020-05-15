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
            storeManagers:[]
        }
    }

    componentDidMount() {
        this.listAllCategories();
        //this.listAllStoreManagers();
        //this.getCategoryCount();

    }


    listAllCategories = () =>{
        CommonGet('listCategoryDet','')
            .then(res=>res.json())
            .then(json =>{
                this.setState({
                    categories: json
                })
                console.log(this.state.categories);
            });
    }

    // listAllStoreManagers = () =>{
    //     CommonGet('user','')
    //         .then(res => res.json())
    //         .then(json =>{
    //             this.setState({
    //                 storeManagers : json
    //             })
    //             console.log(this.state.storeManagers);
    //         })
    // }

    getCategoryCount = () =>{
        let count = 0 ;
        const  categories  = this.state.categories;
        categories.forEach(element => {
            count += 1;
        });
        return count;
    }


    // getStoreManagerCount = () => {
    //     let count = 0 ;
    //     const  storeManagers  = this.state.storeManagers;
    //     storeManagers.forEach(element => {
    //         count += 1;
    //     });
    //     return count;
    //
    // }
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
                                    <Col sm><Card.Title>count</Card.Title></Col>
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
