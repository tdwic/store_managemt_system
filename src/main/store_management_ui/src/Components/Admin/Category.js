import React, {Component} from 'react';
import { Table } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Form} from "react-bootstrap";

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories : [
                {
                    catId : 1,
                    catName:'Meat'
                },
                {
                    catId : 2,
                    catName:'Drinks'
                }]
        }
    }
    render() {
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
                                <Form.Group controlId="StoreManagerNameTxt">
                                    <Form.Label style={{float:'left', fontSize:'20px' ,fontFamily:'Square Sans Serif'}}>Category :</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Category" />
                                </Form.Group>
                                <Button variant="success" type="submit">
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
                        {this.state.categories.map(element =>
                            <tr>
                                <td>{element.catId}</td>
                                <td>{element.catName}</td>
                                <td><Button variant="warning">Update</Button></td>
                                <td><Button variant="danger">Delete</Button></td>
                            </tr>
                        )}

                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}
