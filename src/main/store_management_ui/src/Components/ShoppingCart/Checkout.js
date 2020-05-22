import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import {CommonDeleteById, CommonGet} from "../../config";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import {faAlignCenter} from "@fortawesome/free-solid-svg-icons";

class Checkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            ShoppingcartList: [],
            isLoaded: false,
            total:0,
            isPayareaHidden:true
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

    clearCartById = (id,event) => {

        CommonDeleteById('clearCartByItem',id)
            .then(res =>{
                console.log("res",res);
                this.setState({
                    isLoaded:true,
                })
            });
    };


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
                    <tr>
                        <td>{item.productName}</td>
                        <td>{ parseFloat(item.productPrice).toFixed(2)}</td>
                        <td>{item.productDiscount}</td>
                        <td>Table cell</td>
                        <td>{ parseFloat(item.productPrice-(item.productPrice * item.productDiscount/100)).toFixed(2)}</td>
                        <td>
                            <a href="#" className="ml-auto btn btn-danger btn-sm"  onClick={(event) => this.clearCartById(item.cartId,event)}>
                                <span className="fa fa-trash"></span>
                            </a>
                        </td>

                    </tr>
                );


            }));
        return (

            <tbody>
            {tableContent}
            </tbody>
        );
    }



    calcTotal() {
        var totalprice = 0;
        this.state.ShoppingcartList.map((item) => {

            totalprice = totalprice +item.productPrice;
        });
        return parseFloat(totalprice).toFixed(2);

    }
    handleAppear(){
        this.setState({
            isPayareaHidden:false
        });
    }

    render() {
        let ShoppingCartList = this.renderShoppingCart(this.state.ShoppingcartList);
        return (
            <div>
            <Table responsive>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>UnitPrice</th>
                    <th>Discount</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>

                </tr>
                </thead>
                {ShoppingCartList}
            </Table>
                <Row>
                    <Col  xs={10}>
                        <h5>Total = {this.calcTotal()}</h5>
                    </Col>
                    <Col  xs={2}>
                        <Button variant="success"  onClick={(event) => this.handleAppear(event)} >Checkout</Button>
                    </Col>
                </Row>
                <div hidden={this.state.isPayareaHidden}>
                    <br/><br/>
                     <Card style={{ alignContent:'center'}}  >
                     <Card.Header>Delivery Information</Card.Header>
                    <br/>
                    <br/>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            {/*<Form.Group as={Col} controlId="formGridPassword">*/}
                            {/*    <Form.Label>Password</Form.Label>*/}
                            {/*    <Form.Control type="password" placeholder="Password" />*/}
                            {/*</Form.Group>*/}
                        </Form.Row>
                        <Form.Row>
                            <Form.Group  as={Col} controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group  as={Col} controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            {/*<Form.Group as={Col} controlId="formGridState">*/}
                            {/*    <Form.Label>State</Form.Label>*/}
                            {/*    <Form.Control as="select" value="Choose...">*/}
                            {/*        <option>Choose...</option>*/}
                            {/*        <option>...</option>*/}
                            {/*    </Form.Control>*/}
                            {/*</Form.Group>*/}

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>
<br/><br/>
                        <h5>Payment Details</h5>
                        <Form.Row>
                        <div className="radio" >
                            <label>
                                <Form.Group as={Col} >
                                <input type="radio" value="option1" checked={false} />
                                Credit Card
                                </Form.Group>
                                <Form.Group as={Col} >
                                <input type="radio" value="option1" checked={false} />
                                Debit Card
                                </Form.Group>
                                <Form.Group as={Col} >
                                <input type="radio" value="option1" checked={false} />
                                Cash On Delivery
                                </Form.Group>
                            </label>
                        </div>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>CardNo</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>CVV</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Expiration</Form.Label>
                                <Form.Control />
                            </Form.Group>

                        </Form.Row>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
    </Card>


                </div>



            </div>



        );
    }
}

export default Checkout;