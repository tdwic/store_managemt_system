import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './ProductManagement.css'
import { CommonGet, CommonDeleteById, CommonPost } from '../../config';


class ProductManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName:'',
            productId:'',
            productCategory:'',
            prodDescription:'',
            productDiscount:'',
            productPrice:'',
            productRating:'',

            categoryList: [],
            productList: [] ,
            isLoaded : false
          };
    }

    componentDidMount(){

        this.setState({
            productName:'',
            productId:'',
            productCategory:'',
            prodDescription:'',
            productDiscount:'',
            productPrice:'',
            productRating:'',
        })

        this.fetchProductList();
        this.fetchCategoryList();
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

    fetchCategoryList(){
        CommonGet('listCategoryDet','')
        .then(res=>res.json())
        .then(resultSet =>{
            this.setState({
                isLoaded:true,
                categoryList: resultSet
            })
            console.log(this.state.categoryList);
        });
    }

    addNewProduct = (event) => {

        let formData={
                "productName":this.state.productName,
                "productPrice":this.state.productPrice,
                "productDiscount":this.state.productDiscount,
                "productImageRef":"this.state.pro",
                "productDescription":this.state.prodDescription,
                "productRating":this.state.productRating,
                "productCategory":this.state.productCategory
        }

        CommonPost('product',formData)
            .then(res=>res.json())
            .then(json =>{
                this.setState({
                    isLoaded : true
                })
                this.componentDidMount();
        });


    }


    handleChange=(event)=>{

        console.log("event.target 1 "+event.target.value);
        this.setState({
            [event.target.name] : event.target.value
        });

        

    }

    handleClick = (eve) => {
        let val = eve.target.value;
         this.setState({productCategory:val},() => {
            console.log(this.state.productCategory)
        })
    };

    
    updateProduct(product){
        this.setState({
            productId:product.productId,
            productName:product.productName,
            productPrice:product.productPrice,
            productDiscount:product.productDiscount,
            productImageRef:product.productImageRef,
            productDescription:product.productDescription,
            productRating:product.productRating,
            productCategory:product.productCategory
        },() => {
            console.log(this.state.productName)
        })
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
                    <Form className="mainForm" onSubmit={this.addNewProduct}>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control name='productName' value={this.state.productName} onChange={this.handleChange} type="text" placeholder="Enter Product Name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}>
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control name='productPrice' value={this.state.productPrice} onChange={this.handleChange} type="text" placeholder="Enter Product Price" />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Product Discount</Form.Label>
                                <Form.Control name='productDiscount' value={this.state.productDiscount} onChange={this.handleChange} type="text" placeholder="Enter Product Discount" />
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col}>
                                <Form.Label>Product Rating</Form.Label>
                                <Form.Control name='productRating' value={this.state.productRating} onChange={this.handleChange} type="text" placeholder="Enter Product Rating" />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Product Category</Form.Label>
                                {/* <Form.Control name='productCategory' value={this.state.productCategory} onChange={this.handleChange} type="text" placeholder="Enter Product Category" /> */}
                                <Form.Control as="select" onChange={this.handleClick} custom>
                                    {this.state.categoryList.map((category) => (
                                        <option key={category.categoryId} value={category.categoryId}>
                                            {category.categoryName}{category.categoryId}
                                        </option>
                                    ))}
                                </Form.Control>
                               
                            </Form.Group>

                            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                
                                <Form.Label>Product Image</Form.Label>
                                {/* <input name='productPrice' value={this.state.productPrice} onChange={this.handleChange} type="file"></input> */}
                            
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Product Description</Form.Label>
                                <Form.Control name='prodDescription' value={this.state.prodDescription} onChange={this.handleChange} className="prodDescription" as="textarea" rows="10" />
                            </Form.Group>

                        </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                    <Button type="submit" variant="success">Add Product</Button>
                                </Form.Group>
                                
                            </Form.Row>

                        </Form>
                </div>
                
                <hr/>
                <br/>

                <div>
                    <Table striped bordered hover>
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
                                            <td>Rs: {element.productPrice}</td>
                                            <td>{element.productDiscount}%</td>
                                            <td>{element.productDescription}</td>
                                            <td>{element.productRating}</td>
                                            <td>{element.productCategory}</td>
                                            <td><Button variant="warning" onClick={(event) => this.updateProduct(element)}>Update</Button></td>
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