import React, { Component } from 'react';
import {CommonGet, CommonPost} from "../../config";
import {toast, ToastContainer} from "react-toastify";
import Col from "react-bootstrap/Col";
import {Card, Row} from "react-bootstrap";
import empimg from "../../Images/noimg.jpg";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Images/img01.jpg";
import img2 from "../../Images/img02.jpg";
import img5 from "../../Images/img00.jpg";
import Navbar from "react-bootstrap/Navbar";

class CategoryRender extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            id:0,
            productSet:[]

        }


    }

    componentDidMount(){
       let id=  sessionStorage.getItem("CatId:");

        CommonGet('productByCategoryId',id)
            .then(res=>res.json())
            .then(json =>{
                this.setState({
                    isLoaded:true,
                    productSet: json
                })
            });



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

        toast("Successfully Added to Your Cart!");

    };

    addToWishList = (product,event) => {

        let formData=
            {
                "wishListId": "",
                "userId": "",
                "productId": product.productId,
                "productName": product.productName,
                "productPrice": product.productPrice,
                "productDiscount": product.productDiscount
            }


        CommonPost('wishListAdd',formData)
            .then(res=>res.json())
            .then(json =>{
                this.setState({
                    isLoaded:true,

                })
            });

        toast("Added to WishList!");

    };
    renderproducts(productset) {
        let tableContent = (productset === undefined || productset === null || productset.length === 0) ? null : (

            productset.map((product) => {
                return (
                    <Col xs="4">
                        <Card id="productCard" key={product.productId}>
                            <Card.Img id="productCardImage" variant="top" src={product.productImageRef} rounded />
                            <Card.Body>
                                <Card.Title>{product.productName}</Card.Title>
                                <Card.Text>
                                    <p> {product.productDescription}</p>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Col  xs={8} md={8}>
                                        <Card.Title>Rs. {parseFloat(product.productPrice).toFixed(2)}</Card.Title>
                                    </Col>
                                    <Col xs={2} md={1}>

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
                                            onClick={(event) => this.addToWishList(product, event)}
                                        ><i className="fa fa-heart-o"></i>

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


    render() {
        let products = this.renderproducts(this.state.productSet);

        return (

            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                      Category
                    </Navbar.Brand>
                </Navbar>
                <br/>
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
                {/* Same as */}

            </div>



        );
    }
}

export default CategoryRender;