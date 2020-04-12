import React, { Component } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import StarRatings from 'react-star-ratings';

class Home extends Component {
state={
    rating:0
}

    changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        });
      }

  render() {
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
        {/* <StarRatings
        rating={2.403}
        starDimension="40px"
        starSpacing="15px"
      /> */}
        </Card.Body>
    </Card>

   
    );
  }
}

export default Home;