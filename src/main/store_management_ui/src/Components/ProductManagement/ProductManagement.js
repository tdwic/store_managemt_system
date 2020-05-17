import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './ProductManagement.css'
import { CommonGet, CommonDeleteById, CommonPost, CommonUpdate } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


class ProductManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName:'',
            productId:'',
            productCategory:'',
            productDescription:'',
            productDiscount:'',
            productPrice:'',
            productRating:'',

            categoryList: [],
            productList: [] ,
            isLoaded : false,

            editEnable:false,
            saved:false,

          };
    }

    componentDidMount(){

        toast.error("ss");
            toast.success("sssgg");
            toast.warn("dfdssf");
            toast.info("ssd");

        this.setState({
            productName:'',
            productId:'',
            productCategory:'',
            productDescription:'',
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
        CommonGet('category','')
        .then(res=>res.json())
        .then(resultSet =>{
            this.setState({
                isLoaded:true,
                categoryList: resultSet
            })
            console.log(this.state.categoryList);
        });
    }

    productCommonFormController = (event) => {

        if(this.state.productId === ''){

            let formData={
                    "productName":this.state.productName,
                    "productPrice":this.state.productPrice,
                    "productDiscount":this.state.productDiscount,
                    "productImageRef":"this.state.pro",
                    "productDescription":this.state.productDescription,
                    "productRating":this.state.productRating,
                    "productCategory":this.state.productCategory
            }

            if( formData.productName !== '' &&  formData.productPrice !== '' && formData.productDiscount !== '' && formData.productImageRef !== '' && formData.productDescription !== '' && formData.productRating !== '' && formData.productCategory !== ''){
                console.log("new Product adding");
                console.log(formData);
                CommonPost('product',formData)
                .then(res=>res.json())
                .then(json =>{
                    
                    this.setState({
                        isLoaded : true
                    })
                    toast.success("Product Added Sucessfully!");
                    this.componentDidMount();
                });
            }else{
                toast.error("Please Fill All the Fields Before Add Product!");
            }

            

        }else{
            console.log("false");

            let productDataToUpdate={
                "productId":this.state.productId,
                "productName":this.state.productName,
                "productPrice":this.state.productPrice,
                "productDiscount":this.state.productDiscount,
                "productImageRef":"this.state.pro",
                "productDescription":this.state.productDescription,
                "productRating":this.state.productRating,
                "productCategory":3
                // "productCategory":this.state.productCategory
            }

            

            if( productDataToUpdate.productId !== '' && productDataToUpdate.productName !== '' && productDataToUpdate.productPrice !== '' && productDataToUpdate.productDiscount !== '' && 
                productDataToUpdate.productImageRef !== '' && 
                productDataToUpdate.productDescription !== '' && 
                productDataToUpdate.productRating !== '' && 
                productDataToUpdate.productCategory !== ''){
                console.log("product updating");
                toast("Successfully Added to Your Cart!");
                    CommonPost('product',productDataToUpdate)
                        .then(res=>res.json())
                        .then(json =>{
                            this.setState({
                                isLoaded : true
                            })
                            this.componentDidMount();
                        });
            }else{
                toast.error("Please Fill All the Fields Before Updating the Product!");
            }  


        }

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

    
    renderDataToForm(product){
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
            console.log(this.state.productName);
            this.setState({
                editEnable:true
            })
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
                    {/* <Form className="mainForm" onSubmit={this.productCommonFormController}> */}
                    <Form className="mainForm">   

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
                                <Form.Control as="select" onChange={this.handleClick} custom>
                                    {this.state.categoryList.map((category) => (
                                        <option key={category.categoryId} value={category.categoryId}>
                                            {category.categoryName}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                
                                <Form.Label>Product Image</Form.Label>
                                <Form.Control as="file"></Form.Control>
                                {/* <input name='productPrice' value={this.state.productPrice} onChange={this.handleChange} type="file"></input> */}
                            
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Product Description</Form.Label>
                                <Form.Control name='productDescription' value={this.state.productDescription} onChange={this.handleChange} className="productDescription" as="textarea" rows="10" />
                            </Form.Group>

                        </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                    {
                                        this.state.editEnable?
                                        <div>
                                            <Button variant="warning" onClick={this.productCommonFormController}>Save Changes</Button>
                                        </div>
                                        :
                                        <div>
                                            <Button variant="success"  onClick={this.productCommonFormController}>Add Product</Button>
                                        </div>
                                    }
                                    
                                    
                                </Form.Group>
                                
                            </Form.Row>

                        </Form>
                </div>
                <ToastContainer
                className="mainToast"
                 position="bottom-right"
                 autoClose={3000}
                 backgroundColor="red"
                 hideProgressBar={true}
                 newestOnTop={false}
                 closeOnClick
                 rtl={false}
                 pauseOnFocusLoss
                 draggable
                 pauseOnHover
                />
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
                                            <td><Button variant="warning" onClick={(event) => this.renderDataToForm(element)}>Update</Button></td>
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