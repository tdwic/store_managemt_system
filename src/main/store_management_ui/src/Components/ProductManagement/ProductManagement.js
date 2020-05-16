import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './ProductManagement.css'
import { CommonGet, CommonDeleteById } from '../../config';

class ProductManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productList: [] ,
            isLoaded : false
          };
    }

    componentDidMount(){
        this.fetchProductList();
    }

    fetchProductList(){
        CommonGet('product','')
        .then(res=>res.json())
        .then(resultSet => {
            this.setState({
                isLoaded:true,
                productList:resultSet
            })
            console.log(this.state.productList);
        });
    }

    removeProductById(productId){
        CommonDeleteById('product',productId)
        .then(res => {
            console.log("product Removed");
        })
        this.componentDidMount();
    }


    render() {
        return (
            <div className="mainDiv">
                <div>
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

                            <Form.Row>
                                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                    <Button variant="success">Add Product</Button>
                                </Form.Group>
                            </Form.Row>

                        </Form>
                </div>
                
                <hr/>
                <br/>
                
                <div>
                    <Table hover responsive>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Product Discount</th>
                                <th>Product Description</th>
                                <th>Product Rating</th>
                                <th>Product Category</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.productList.map((element, index) => 
                                        <tr key={element.productId}>
                                            <td>{index + 1}</td>
                                            <td>{element.productName}</td>
                                            <td>Rs:{element.productPrice}</td>
                                            <td>{element.productDiscount}%</td>
                                            <td>{element.productDescription}</td>
                                            <td>{element.productRating}</td>
                                            <td>{element.productCategory}</td>
                                            <td><Button variant="warning">Update</Button></td>
                                            <td><Button variant="danger" onClick={(event) => this.removeProductById(element.productId)}>Delete</Button></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                </div>
            </div>
        );
    }
}

export default ProductManagement;