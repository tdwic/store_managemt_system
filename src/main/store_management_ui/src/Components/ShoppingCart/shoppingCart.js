import React, { Component } from 'react';
import {Card} from "react-bootstrap";
import StarRatings from "react-star-ratings/src";
import { CommonGet , CommonPost} from '../../config';

class shoppingCart extends Component {
    constructor(props){
        super(props);
        this.state={
            productSet:[],
            isLoaded: false,
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
    // renderproducts(productset){
    //     let tableContent = (productset === undefined || productset === null || productset.length === 0) ? null : (
    //         // todoarray.sort(function(a, b){return b.orderId - a.orderId}),
    //
    //         productset.map((todo) => {
    //             return ();
    //         }
    //     return ();
    // }))

    render() {
        let products = this.renderproducts(this.state.productSet);
        return (
            <Card  style={{ width: '18rem' }}>
                <Card.Img variant="top" src='./Images/shoe.jpg' />
                <Card.Body>
                    <Card.Title>Item ABC</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <div class="form-row">
                        <a href="#" class="ml-auto btn btn-info btn-sm">
                            <span class="fa fa-shopping-cart"></span> Add To Cart
                        </a>
                        <a href="#" class="ml-sm-3 btn btn-danger btn-sm">
                            <span class="fa fa-heart-o"></span>
                        </a>
                    </div>
                    <StarRatings
        rating={2.403}
        starDimension="40px"
        starSpacing="15px"
      />
                </Card.Body>
            </Card>


        );
    }
}

export default shoppingCart;