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
import './AdminDashboard.css';
import {CommonGet} from "../../config";
import catImg from '../../Images/2268-512.png';
import storeMImg from '../../Images/managers.png';

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
        CommonGet('category','')
            .then(res=>res.json())
            .then(json =>{
                this.setState({
                    categories: json
                })
            });
    };

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
    };

    getCategoryCount = () =>{
        const  count  = this.state.categories.length;
        return count;
    };


    getStoreManagerCount = () => {
        const  count  = this.state.storeManagers.length;
        return count;

    };
    render() {
        return(
                <div>
                    <CardDeck>
                        <Card className="cat-card-s">
                            <Card.Header as="h4" style = {{color:"white"}}>Category Details</Card.Header>
                            <Card.Body>
                                <div className="card bg-c-green order-card">
                                    <div className="card-block">
                                        <Card.Title style = {{ paddingBottom:'10px'}}><u>Number of Categories</u></Card.Title>
                                        <h2 className="text-right" ><img src ={catImg}
                                            className="cat-icon f-left"/><span>{this.getCategoryCount()}</span></h2>

                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer className = "">
                                <Link to='/Category' style = {{color:"white"}}><Button style = {{color:"white"}} variant="info" size = "lg" >Add Category</Button></Link>
                            </Card.Footer>
                        </Card>

                        <Card className="storeM-card-s">
                            <Card.Header as="h4"  style = {{color:"white"}}>Store Manager Details</Card.Header>
                            <Card.Body>
                                <div className="card bg-c-yellow order-card">
                                    <div className="card-block">
                                        <Card.Title style = {{ paddingBottom:'10px'}}><u>Number of Store Managers</u></Card.Title>
                                        <h2 className="text-right"><img src={storeMImg}
                                            className="storeM-icon f-left"/><span>{this.getStoreManagerCount()}</span></h2>

                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer  className = "">
                                <Link to='/StoreManager'><Button variant="info" size = "lg">Add Store Manager</Button></Link>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </div>
        );
    }
}
