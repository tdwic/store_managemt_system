import React, {Component, useState} from 'react';
import { Card, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {CommonGet, CommonPost} from "../../config";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
// import StarRatings from 'react-star-ratings';
import empimg from '../../Images/noimg.jpg';
import img1 from '../../Images/img01.jpg';
import img2 from '../../Images/img02.jpg';
import img5 from '../../Images/img00.jpg';
import Carousel from "react-bootstrap/Carousel";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Badge from "react-bootstrap/Badge";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import "react-toastify/dist/ReactToastify.css"
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productSet: [],
            isLoaded: false,
            valuexx:5
        }
    }


    changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        });
      }

    componentDidMount(){

        CommonGet('product','')
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

        toast.success("Successfully Added to Your Cart!");

    };

    addToWishList = (product,event) => {

        let formData=
            {
                "wishListId": "",
                "userId": "",
                "productId": product.productId,
                "productName": product.productName,
                "productPrice": product.productPrice,
                "productDiscount": product.productDiscount,
                "productImageRef":product.productImageRef
            }


        CommonPost('wishListAdd',formData)
            .then(res=>res.json())
            .then(json =>{
                this.setState({
                    isLoaded:true,

                })
            });

        toast.error("Added to WishList!");

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
                                    {/*<input type="number" value="1" min="0" max="1000" step="1"/>*/}
                                    {/*<script src="./src/bootstrap-input-spinner.js"></script>*/}
                                    {/*<script>*/}
                                    {/*    $("input[type='number']").inputSpinner()*/}
                                    {/*</script>*/}
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
                                    {/*<a href="#" className="ml-sm-3 btn btn-danger btn-sm">*/}
                                    {/*    <span className="fa fa-heart-o"></span>*/}
                                    {/*</a>*/}
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
             <Carousel>
                 <Carousel.Item>
                     <img
                         className="d-block w-100 "
                         src={img1}
                         alt="First slide"
                     />
                     <Carousel.Caption>
                         <h3>E-Shopping Center</h3>
                         <p class="text-dark">Shopping From Home, Without Wasting Your Time !</p>
                     </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item>
                     <img
                         className="d-block w-100 "
                         src={img2}
                         alt="Third slide"
                     />

                     <Carousel.Caption>
                         <h3>Fast Delivery Every Where!</h3>
                         <p class="text-dark">24x7 Island Wide Delivery Service! </p>
                     </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item>
                     <img
                         className="d-block w-100"
                         src={img5}
                         alt="Third slide"
                     />

                     <Carousel.Caption>
                         <h3>Quality Products</h3>
                         <p class="text-dark">World Famouse Top Rated Brands!</p>
                     </Carousel.Caption>
                 </Carousel.Item>
             </Carousel>
         <br/>
         <br/>
          {products}
             <ToastContainer
                 position="bottom-right"
                 autoClose={5000}
                 hideProgressBar={false}
                 newestOnTop={false}
                 backgroundColor="red"
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

export default Home;