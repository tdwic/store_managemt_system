import React, {Component} from 'react';
import {Table, Toast} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {CommonDeleteById, CommonGet, CommonPost} from "../../config";

export default class StoreManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            role: 2 ,
            storeManagers : [],
            users:[],
            isLoaded : false
        }

        // THis is the previous state type which is used in here.
        // But it did not allow setState the generatedPassword.
        // this.state = {
        //     firstname : '',
        //     lastname : '',
        //     email : '',
        //     password : '',
        //     role: 2 ,
        //     storeManagers : [],
        //     users:[],
        //     isLoaded : false
        // }
    }

    componentDidMount() {
        //Works. But have to check with the DB
        this.listStoreManagers();

    }



    generateStoreManagerPassword(genEm){
        let randomNumber = Math.floor(Math.random() * 101);
        let firstPart = genEm.substring(0,4);
        let genPassword = `${firstPart}#pwd#${randomNumber}`;
        return genPassword;

    }

    //Check The working with the backend
    listStoreManagers(){
        CommonGet('user','')
            .then(res=>res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    users : json
                })
                const usersList = this.state.users;
                const storeM = usersList.filter(person => person.role === 2);
                this.setState({
                    storeManagers : storeM
                })

            });
    }

    handleSubmit = (event) =>{
        // let randomNumber = Math.floor(Math.random() * 101);
        // let firstPart = this.state.email.substring(0,4);
        // let genPassword = `${firstPart}#pwd#${randomNumber}`;

        //Password is generated Because we haven't use it in states.
        let val = this.generateStoreManagerPassword(this.state.email);

        console.log("Set Password: ", val);
        console.log("Set Email: ", this.state.email);

        const {firstname , lastname, email , password = val, role } = this.state;
        CommonPost('user' ,{firstname , lastname, email , password, role})
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true
                });
            })
        ;
    };

    handleOnChange = (event) => {
        const state = this.state
        state[event.target.name] = event.target.value;
        this.setState(state);

    }

    handleOnDelete = (id , event) =>{
        CommonDeleteById('user' , id)
            .then(res => {
                console.log("res " , res);
                this.setState({
                    isLoaded:true
                });
                this.componentDidMount();
            })
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
                                    <Form.Control type="text" placeholder="Enter Name" name = "firstname" onChange={this.handleOnChange} value={this.state.firstname}  required/>
                                </Form.Group>
                                <Form.Group controlId="StoreManagerLNameTxt">
                                    <Form.Label style={{float:'left', fontSize:'20px' ,fontFamily:'Square Sans Serif'}}>Last Name :</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" name = "lastname" onChange={this.handleOnChange} value={this.state.lastname} required/>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{float:'left', fontSize:'20px',fontFamily:'Square Sans Serif'}}>Email address :</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name = "email" onChange={this.handleOnChange} value = {this.state.email} />
                                </Form.Group>
                                <Button  variant="success" type="submit">
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
                        {this.state.storeManagers.map((element, index) =>
                            <tr key={element.id}>
                                <td>{index + 1}</td>
                                <td>{element.firstname}</td>
                                <td>{element.lastname}</td>
                                <td>{element.email}</td>
                                <td>{element.password}</td>
                                <td><Button variant="warning">Update</Button></td>
                                <td><Button onClick = {(event) =>this.handleOnDelete(element.id,event)} variant="danger">Delete</Button></td>
                            </tr>
                        )}

                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }

}


