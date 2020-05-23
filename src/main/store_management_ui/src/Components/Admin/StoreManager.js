import React, {Component} from 'react';
import {Table, Toast} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Form} from "react-bootstrap";
import EditStoreManager from "./EditStoreManager";
import {CommonDeleteById, CommonGet, CommonPost} from "../../config";
import {toast, ToastContainer} from "react-toastify";

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

            isLoaded : false,
            displayModel : false
        }

    }

    componentDidMount() {
        this.setState({
            firstname : '',
            lastname : '',
            email : ''
        });
        this.listStoreManagers();
    }

    generateStoreManagerPassword(genEm){
        let randomNumber = Math.floor(Math.random() * 101);
        let firstPart = genEm.substring(0,4);
        let genPassword = `${firstPart}#pwd#${randomNumber}`;
        return genPassword;

    }

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

    handleOnClick = (event) =>{
        event.preventDefault();

        let val = this.generateStoreManagerPassword(this.state.email);
        const {firstname , lastname, email , password = val, role } = this.state;

        if(firstname === ""){
            return toast.error("First Name cannot be Empty");
        }else if(lastname === ""){
            return toast.error("Last Name cannot be Empty");
        }else if(email === ""){
            return toast.error("Email Field cannot be Empty");
        }else if(!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            return toast.error("Invalid Email Type");
        }

        for(let i = 0 ; i < this.state.storeManagers.length ; i++  ){
            if(this.state.storeManagers[i].email.toLowerCase() === email.toString().toLocaleLowerCase()){
                return toast.error("Email already Exists");
            }
        }

        CommonPost('user' ,{firstname , lastname, email , password, role})
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true
                });
                this.componentDidMount();
            });

        return toast.success("New Store Manager has been added");

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
        const {usid, usfname, uslname, usemail} = this.state;
        let closeModel = () => this.setState({
            displayModel:false
        });
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
                            <Form>
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
                                    <Form.Control type="email" placeholder="Enter email" name = "email" onChange={this.handleOnChange} value = {this.state.email} required/>
                                </Form.Group>
                                <Button  onClick = {this.handleOnClick} variant="success" type="submit">
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
                                <td><Button onClick={() => this.setState({displayModel:true, usid:element.id, usfname:element.firstname, uslname:element.lastname, usemail:element.email})} variant="warning">Update</Button>
                                <EditStoreManager
                                    show = {this.state.displayModel}
                                    onHide = {closeModel}
                                    usid = {usid}
                                    usfname = {usfname}
                                    uslname = {uslname}
                                    usemail = {usemail}/>
                                </td>
                                <td><Button onClick = {(event) =>this.handleOnDelete(element.id,event)} variant="danger">Delete</Button></td>
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


