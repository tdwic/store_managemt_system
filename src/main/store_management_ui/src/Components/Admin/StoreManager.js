import React, {Component} from 'react';
import { Table } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Form} from "react-bootstrap";

export default class StoreManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storeMEmail : '',
            storeMFName : '',
            storeMLName : '',
            storeMPwd : '' ,
            storeM : [
                {
                    storeMId : 1,
                    storeMEmail:'IT18146516@my.sliiy.lk',
                    storeMFName:'Dewsara',
                    storeMPwd:'abcd1234'
                },
                {
                    storeMId : 2,
                    storeMEmail:'IT18456871@my.sliiy.lk',
                    storeMFName:'Kamal',
                    storeMPwd:'abcd1234'
                }]
        }
    }

    handleSubmit = (event) =>{

    }

    handleOnChange = (event) => {
        const state = this.state
        state[event.target.name] = event.target.value;
        this.setState(state);

    }

    render(){
        return(
            <div>
                <h3>Store Manager Details</h3>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{margin:0}}>
                        <h4 className="text-center mt-1 mb-1"><u>Add Store Manager</u></h4>
                    </nav>
                    <div className='row'>
                        <div className="col-lg-7" style={{  float: 'none',
                            margin: '10px auto'}}>
                            <Form onSubmit = {this.handleSubmit}>
                                <Form.Group controlId="StoreManagerFNameTxt">
                                    <Form.Label style={{float:'left', fontSize:'20px' ,fontFamily:'Square Sans Serif'}}>First Name :</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" name = "storeMFName" onChange={this.handleOnChange} value={this.state.storeMFName}  required/>
                                </Form.Group>
                                <Form.Group controlId="StoreManagerLNameTxt">
                                    <Form.Label style={{float:'left', fontSize:'20px' ,fontFamily:'Square Sans Serif'}}>Last Name :</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" name = "storeMLName" onChange={this.handleOnChange} value={this.state.storeMLName} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{float:'left', fontSize:'20px',fontFamily:'Square Sans Serif'}}>Email address :</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name = "storeMEmail" onChange={this.handleOnChange} value = {this.state.storeMEmail} required/>
                                </Form.Group>
                                <Button variant="success" type="submit">
                                    Add Store Manager
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <h4 className="text-center mt-1 mb-1"><u>Store Manager List</u></h4>
                    </nav>
                    <Table hover responsive>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.storeM.map(element =>
                            <tr>
                                <td>{element.storeMId}</td>
                                <td>{element.storeMFName}</td>
                                <td>{element.storeMLName}</td>
                                <td>{element.storeMEmail}</td>
                                <td>{element.storeMPwd}</td>
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


