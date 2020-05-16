import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './ProductManagement.css'

class ProductManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="mainDiv">
                <Form className="mainForm">

                    <Form.Row>
                        <Form.Group as={Col} controlId="productName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>

                        <Form.Group as={Col}>
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Price" />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Product Discount</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Discount" />
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>

                        <Form.Group as={Col}>
                            <Form.Label>Product Rating</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Rating" />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Product Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Category" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">

                            <Form.Label>Product Description</Form.Label>
                          
                                <input type="file"></input>
                            
                            
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>

                        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control className="prodDescription" as="textarea" rows="10" />
                        </Form.Group>

                    </Form.Row>

                </Form>
            </div>
        );
    }
}

export default ProductManagement;