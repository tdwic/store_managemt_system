import React, {Component} from 'react';
import { Table } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Form} from "react-bootstrap";
import EditCategory from "./EditCategory";
import {CommonDeleteById, CommonGet, CommonPost} from "../../config";
import { ToastContainer, toast } from 'react-toastify';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryName: '',
            categories: [] ,
            updateCategories : [],
            isLoaded : false,
            displayModel : false
        }
    }

    componentDidMount() {
        this.setState({
            categoryName:''
        });
        this.listCategoryItem();
    }

    listCategoryItem(){
        CommonGet('category','')
            .then(res=>res.json())
            .then(json =>{
                this.setState({
                    isLoaded:true,
                    categories: json
                })
                console.log(this.state.categories);
            });
    }


    handleOnClick = (event) => {
        event.preventDefault();
        const { categoryName} = this.state;

        if(categoryName === ""){
            return toast.error("Category Name cannot be Empty");
        }

        for(let i = 0 ; i < this.state.categories.length ; i++  ){
            if(this.state.categories[i].categoryName.toLowerCase() === categoryName.toString().toLocaleLowerCase()){
                return toast.error("Category Name already Exists");
            }
        }

        CommonPost('category',{categoryName})
            .then(res=>res.json())
            .then(json =>{
                this.setState({
                    isLoaded : true

                })
                this.componentDidMount();
            });

        return toast.success("New Category has been added");
    }

    handleOnChange = (event) => {
        this.setState({
            categoryName : event.target.value
        })
    }

    handleOnDelete =(id,event) =>{
        CommonDeleteById('category', id)
            .then(res => {
                console.log("res", res);
                this.setState({
                    isLoaded: true,
                })
                toast.success("Category has been Deleted");
                this.componentDidMount();
            })
    }
    idVal ;
    render() {
        const {catid, catname} = this.state;
        let closeModel = () => this.setState({
            displayModel:false
        });
        return(

            <div>
                <h3>Category Details</h3>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{margin:0}}>
                        <h4 className="text-center mt-1 mb-1"><u>Add Categories</u></h4>
                    </nav>
                    <div className='row'>
                        <div className="col-lg-7" style={{  float: 'none',
                            margin: '10px auto'}}>
                            <Form>
                                <Form.Group controlId="categoryNameTxt">
                                    <Form.Label style={{float:'left', fontSize:'20px' ,fontFamily:'Square Sans Serif'}}>Category :</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Category" name = "categoryName" onChange = {this.handleOnChange} value = {this.state.categoryName} required/>
                                </Form.Group>
                                <Button  onClick={this.handleOnClick} variant="success" type="submit" >
                                    Add Category
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <h4 className="text-center mt-1 mb-1"><u>Category List</u></h4>
                    </nav>
                    <Table hover responsive>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Category Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.categories.map((element, index) =>
                            <tr key={element.categoryId}>
                                <td>{this.idVal = index + 1}</td>
                                <td>{element.categoryName}</td>
                                <td><Button onClick={() => this.setState({displayModel : true, catid:element.categoryId, catname : element.categoryName})} variant="warning">Update</Button>
                                <EditCategory
                                show = {this.state.displayModel}
                                onHide ={closeModel}
                                catid = {catid}
                                catname = {catname}/>
                                </td>
                                <td><Button onClick={(event) => this.handleOnDelete(element.categoryId,event)} variant="danger">Delete</Button></td>
                            </tr>
                        )}

                        </tbody>
                    </Table>
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
            </div>
        );
    }
}
