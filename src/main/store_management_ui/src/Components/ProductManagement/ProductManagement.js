import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';
import './ProductManagement.css'
import { CommonGet, CommonDeleteById, CommonPost, CommonUpdate } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import empimg from '../../Images/noimg.jpg';
import FileBase64 from 'react-file-base64';



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

            productImage:'',

            selected:'',
            files: [],
            categoryList: [],
            productList: [] ,
            filteredProductList:[],
            isLoaded : true,

            editEnable:false,
            saved:false,
            userList:[]
          };

          this.myDivToFocus = React.createRef()

    }

    componentDidMount(){

        this.setState({
            productName:'',
            productId:'',
            productCategory:'',
            productDescription:'',
            productDiscount:'',
            productPrice:'',
            productRating:'',
            productImage:empimg,
            editEnable:false,
        });

        this.fetchProductList();
        this.fetchCategoryList();
        CommonGet('user','')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    userList:json
                });

            }).then(()=>{ this.checkProductManagerAccess();});


    }

    checkProductManagerAccess(){
        let userId =window.sessionStorage.getItem("UserId")
        let adminfound = false;
        if(userId === "NF"){
            this.props.history.push('/Loging');
        }else{
            this.state.userList.map((user) => {
                if(user.id == userId && user.role == 2){
                    adminfound = true;

                }
            });
            if(adminfound == true){
                this.props.history.push('/ProductManagement');

            }else{
                this.props.history.push('/Loging');
            }
        }
    }

    resetFormFields = (event) =>{
        this.componentDidMount();
    }
        
    getFiles(files){
        this.setState({ files: files });
        this.setState({
            productImage:this.state.files.base64
        });
        console.log(files.base64);
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
                    "productImageRef":this.state.files.base64,
                    "productDescription":this.state.productDescription,
                    "productRating":this.state.productRating,
                    "productCategory":this.state.productCategory
            }

            if( formData.productName !== '' &&  formData.productPrice !== '' && formData.productDiscount !== '' && formData.productImageRef !== '' && formData.productDescription !== '' && formData.productRating !== '' && formData.productCategory !== ''){
                console.log("new Product adding");
                console.log(formData);
                this.setState({
                    isLoaded:true
                })
                CommonPost('product',formData)
                .then(res=>res.json())
                .then(json =>{
                    
                    this.setState({
                        isLoaded : true
                    })
                    this.componentDidMount();
                    // this.setState({
                    //     isLoaded:false
                    // })
                    toast.success("Product Added Sucessfully!");
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
                "productImageRef":this.state.productImage,
                "productDescription":this.state.productDescription,
                "productRating":this.state.productRating,
                "productCategory":this.state.productCategory
            };

            console.log("update===>  " + productDataToUpdate.productImageRef);
            

            if( productDataToUpdate.productId !== '' && productDataToUpdate.productName !== '' && productDataToUpdate.productPrice !== '' && productDataToUpdate.productDiscount !== '' && 
                productDataToUpdate.productImageRef !== '' && 
                productDataToUpdate.productDescription !== '' && 
                productDataToUpdate.productRating !== '' && 
                productDataToUpdate.productCategory !== ''){
                console.log("product updating");
                
                    CommonPost('product',productDataToUpdate)
                        .then(res=>res.json())
                        .then(json =>{
                            this.setState({
                                isLoaded : true
                            })
                            this.componentDidMount();
                            toast.success("Product Sucessfully Updated!");
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
            productCategory:product.productCategory,
            productImage:product.productImageRef,
            selected:product.productCategory,
            files:product.productImageRef

        },() => {
            console.log(this.state.productImageRef);
            this.setState({
                editEnable:true
            })
        });


        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }

    }

    removeProductById(productId){
        CommonDeleteById('product',productId)
        .then(res => {
            console.log("product Removed");
            this.componentDidMount();
            toast.success("Product Removed Sucessfully!");
        })
        
    }


    render() {
        return (
            <div className="mainDiv">
                <div ref={this.myDivToFocus}>
                    {/* <Form className="mainForm" onSubmit={this.productCommonFormController}> */}
                    <Form className="mainForm">   

                        <Form.Row>

                            <Form.Group as={Col}>

                                <Form.Label>Product Name</Form.Label>
                                <Form.Control name='productName' value={this.state.productName} onChange={this.handleChange} type="text" placeholder="Enter Product Name" />
                
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control name='productPrice' value={this.state.productPrice} onChange={this.handleChange} type="text" placeholder="Enter Product Price" />

                                <Form.Label>Product Discount</Form.Label>
                                <Form.Control name='productDiscount' value={this.state.productDiscount} onChange={this.handleChange} type="text" placeholder="Enter Product Discount" />

                                <Form.Label>Product Rating (1-5)</Form.Label>
                                <Form.Control name='productRating' value={this.state.productRating} onChange={this.handleChange} type="text" placeholder="Enter Product Rating" />
                            
                                <Form.Label>Product Category</Form.Label>
                                <Form.Control as="select" defaultValue={"sdsd"} onChange={this.handleClick} custom>
                                    {this.state.categoryList.map((category) => (
                                        // <option key={category.categoryId}>Select a category</option>
                                        <option selected={this.state.selected === category.categoryId} key={category.categoryId} value={category.categoryId}>
                                            {category.categoryName}
                                        </option>
                                    ))}
                                </Form.Control>

                                <Form.Label>Product Description</Form.Label>
                                <Form.Control name='productDescription' value={this.state.productDescription} onChange={this.handleChange} className="productDescription" as="textarea" rows="10" />
                         
                            </Form.Group>

                            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                
                                <Form.Label>Product Image</Form.Label><br/>
                                <div class="productImageContainer">
                                    <div class="imageContainer">
                                        <img class="productImage" src={this.state.productImage}></img>
                                    </div>

                                    <div class="buttonContainer">
                                        <FileBase64 multiple={ false } onDone={ this.getFiles.bind(this) } />
                                    </div>
                                    
                                </div>
                                            
                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            

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
                                            {
                                                this.state.isLoaded?
                                                <div>
                                                   
                                                </div>
                                                :
                                                <div>
                                                     <Spinner animation="border" />
                                                </div>
                                            }
                                            
                                            <Button variant="success"  onClick={this.productCommonFormController}>Add Product</Button>
                                        </div>
                                    }
                                    
                                </Form.Group>

                                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                    <div>
                                        <Button variant="info" onClick={this.resetFormFields}>Cancel</Button>
                                    </div>
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
                                            <td>
                                                {
                                                    this.state.categoryList.map((cat,index)=>{
                                                        if(element.productCategory === cat.categoryId){
                                                            return cat.categoryName;
                                                        }
                                                    })
                                                }
                                            </td>
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