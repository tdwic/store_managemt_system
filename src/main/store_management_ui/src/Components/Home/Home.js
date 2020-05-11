import React, { Component } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {CommonGet} from "../../config";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
// import StarRatings from 'react-star-ratings';

class Home extends Component {

        state={
            productSet:[],
            isLoaded: false,
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
 renderproducts(productset) {
     let tableContent = (productset === undefined || productset === null || productset.length === 0) ? null : (

            productset.map((product) => {
                return (
                    <Col xs="4">
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>{product.productName}</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Title>Rs.{product.productPrice}</Card.Title>
                            <a href="#" className="ml-auto btn btn-info btn-sm">
                                 <span className="fa fa-shopping-cart"></span> Add To Cart
                                 </a>
                             <a href="#" className="ml-sm-3 btn btn-danger btn-sm">
                             <span className="fa fa-heart-o"></span>
                             </a>
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

        <div>{products} </div>

    );
  }
}

export default Home;