import React, { Component } from 'react';
import {Card} from "react-bootstrap";
import { CommonGet , CommonPost , CommonDeleteAll ,CommonDeleteById} from '../../config';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import * as list from "react-bootstrap/cjs/ElementChildren";
import checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class shoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            ShoppingcartList: [],
            isLoaded: false,
            total:0
        }
    }


    componentDidMount() {
        CommonGet('shoppingcart','')
            .then(res=>res.json())
            .then(json =>{
                this.setState({
                    isLoaded:true,
                    ShoppingcartList: json
                })
            });
    }

    calcTotal() {
        var totalprice = 0;
        this.state.ShoppingcartList.map((item) => {

            totalprice = totalprice +item.productPrice;
        });
        return parseFloat(totalprice).toFixed(2);

    }

    renderShoppingCart(list) {

            CommonGet('shoppingcart','')
                .then(res=>res.json())
                .then(json =>{
                    this.setState({
                        isLoaded:true,
                        ShoppingcartList: json
                    })
                });



        let tableContent = (list === undefined || list === null || list.length === 0) ? null : (

            list.map((item) => {

                return (
                    <ListGroup.Item variant="success">
                    <Row>
                        <Col xs="7">
                            {item.productName}
                        </Col>
                        <Col xs="4">
                            { parseFloat(item.productPrice).toFixed(2)}
                        </Col>
                        <Col xs="1">
                            <a href="#" className="ml-auto btn btn-danger btn-sm"  onClick={(event) => this.clearCartById(item.cartId,event)}>
                                <span className="fa fa-trash"></span>
                            </a>
                        </Col>
                    </Row>


                </ListGroup.Item>
                );


            }));
        return (

            <ListGroup>
                {tableContent}
            </ListGroup>

        );
    }

    clearCart = (event) => {
        CommonDeleteAll('clearCart',"")
            .then(res =>{
                console.log("res",res);
                this.setState({
                    isLoaded:true,
                })
            });
    };

    clearCartById = (id,event) => {

        CommonDeleteById('clearCartByItem',id)
            .then(res =>{
                console.log("res",res);
                this.setState({
                    isLoaded:true,
                })
            });
    };



    render() {

        let ShoppingCartList = this.renderShoppingCart(this.state.ShoppingcartList);

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <i className="fa fa-shopping-cart"></i> Your Cart
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Item Count - {this.state.ShoppingcartList.length}</label>
                    {ShoppingCartList}
                    <br/>

                    <Row>
                        <Col  xs={10}>
                            <h5>Total = {this.calcTotal()}</h5>
                        </Col>
                        <Col  xs={2}>
                            <Button variant="danger" onClick={(event) => this.clearCart(event)}>Clear Cart</Button>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={this.props.onHide}><Link to='/checkout' class="text-light">Place Order</Link></Button>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>


        );
    }
}

export default shoppingCart;