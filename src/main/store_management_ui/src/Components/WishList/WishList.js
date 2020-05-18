import React, { Component } from 'react';
import ShoppingCart from '../ShoppingCart/shoppingCart';
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Col from "react-bootstrap/Col";
import {Card, Row} from "react-bootstrap";
import empimg from "../../Images/noimg.jpg";
import CardGroup from "react-bootstrap/CardGroup";
import {CommonDeleteById, CommonGet, CommonPost} from "../../config";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

class WishList extends Component {
  constructor(props){
    super(props);
    this.state={

      wishList:[],
      isLoaded: false,
      addModalShow:false
    }
  }
    componentDidMount(){

        CommonGet('getAllWishList','')
            .then(res=>res.json())
            .then(json =>{
                this.setState({
                    isLoaded:true,
                    wishList: json
                })
            });

    }

    renderWishList(wishList) {
        let tableContent = (wishList === undefined || wishList === null || wishList.length === 0) ? null : (

            wishList.map((product) => {
                return (
                    <Col xs="4">
                        <Card>
                            <Card.Img variant="top" src={empimg} rounded />
                            <Card.Body>
                                <Card.Title>{product.productName}</Card.Title>
                                <Card.Text>
                                    <p> This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col  xs={8} md={8}>
                                        <Card.Title>Rs.{product.productPrice}</Card.Title>
                                    </Col>
                                    <Col xs={2} md={1}>
                                        {/*<a href="#" className="ml-auto btn btn-info btn-sm"*/}
                                        {/*   onClick={(event) => this.addToCart(product, event)}*/}
                                        {/*>*/}
                                        {/*    <span className="fa fa-shopping-cart"></span>*/}
                                        {/*</a>*/}

                                        <button
                                            type="button"
                                            className="btn btn-outline-success"
                                            onClick={(event) => this.addToCart(product, event)}
                                        ><i className="fa fa-shopping-cart"></i>

                                        </button>
                                    </Col>
                                    &nbsp; &nbsp; &nbsp;
                                    <Col xs={2} md={1}>

                                        <button
                                            type="button"
                                            className="btn btn-outline-danger"
                                            onClick={(event) => this.clearWishListById(product.wishListId,event)}
                                        ><i className="fa fa-trash"></i>

                                        </button>
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                        <br/>
                    </Col>

                );
            }));
        return (

            <CardGroup>
                {tableContent}
            </CardGroup>

        );
    }

    addToCart = (product,event) => {

        let formData=
            {
                "cartId": "",
                "productId": product.productId,
                "productName": product.productName,
                "productPrice": product.productPrice,
                "productDiscount": product.productDiscount
            }


        CommonPost('shoppingcart',formData)
            .then(res=>res.json())
            .then(json =>{
                this.setState({
                    isLoaded:true,

                })
            });

        toast.success("Successfully Added to Your Cart!");

    };


    clearWishListById = (id,event) => {

        CommonDeleteById('clearWishListItemById',id)
            .then(res =>{
                console.log("res",res);
                this.setState({
                    isLoaded:true,
                })
            }).then=()=>{
            toast.error("Successfully Deleted from Your WishList");

        }
        this.componentDidMount();





    };
    render() {
      let products = this.renderWishList(this.state.wishList);
    return (
        <div>
            {products}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
  }
}

export default WishList;