import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast, ToastContainer} from "react-toastify";
import {CommonGet, CommonPost} from "../../config";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            password : '',
            cfpassword : '',
            role: 3,
            users:[],

            isLoaded : false,
            displayModel : false
        }
      }

    componentDidMount() {
        this.setState({
            firstname : '',
            lastname : '',
            email : '',
            password : '',
            cfpassword : ''
        });
    }

    handleOnClick = (event) =>{
        event.preventDefault();

        const {firstname , lastname, email , password, cfpassword, role } = this.state;
        if(firstname === ""){
            return toast.error("First Name cannot be Empty");
        }else if(lastname === ""){
            return toast.error("Last Name cannot be Empty");
        }else if(email === ""){
            return toast.error("Email Field cannot be Empty");
        }else if(cfpassword != password) {
            return toast.error("Password Mismatch")
        }

        CommonPost('user' ,{firstname , lastname, email , password, role})
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true
                });
                this.componentDidMount();
            });

        return toast.success("Account Successfully Created");
        };

    handleOnChange = (event) => {
        const state = this.state
        state[event.target.name] = event.target.value;
        this.setState(state);

    }

  render() {

    const myStyle = {
       width: "400px",
    };

    return (
        <>
        <h1>CREATE ACCOUNT</h1>
        <br/>

        <div class="d-flex justify-content-center">
        <Form style={myStyle}>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" name="firstname" value={this.state.firstname} onChange={this.handleOnChange} required/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.handleOnChange} required/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleOnChange} required/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleOnChange} required/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="cfpassword" value={this.state.cfpassword} onChange={this.handleOnChange} required/>
        </Form.Group>

        </Form>
        </div>

        <br/>
        <Button variant="primary" type="submit" onClick = {this.handleOnClick}>
           CREATE ACCOUNT
        </Button>

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
        </>
   
    );
  }
}

