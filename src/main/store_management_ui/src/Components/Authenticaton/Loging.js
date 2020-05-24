import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast, ToastContainer} from "react-toastify";
import {CommonGet, CommonPost} from "../../config";
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dash from '../../App'
import Modal from "react-bootstrap/Modal";

export default class Loging extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            role: 3,
            userList:[],
            currentUserObj:{},
            isLoaded : false,
            displayModel : false
        }

      }

    componentDidMount() {
        this.setState({
            email : '',
            password : ''
        });
            console.log("prop",this.props);
        CommonGet('user','')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    userList:json
                });
                this.checkAlreadyLogedIn();

            });
    }


    checkAlreadyLogedIn(){
        let userId =window.sessionStorage.getItem("UserId")

        if(userId === "NF" || userId === null || userId === "" ){
            this.props.history.push('/Loging');
        }else{
            this.props.history.push('/AlreadyLogin');

        }
    }


    handleOnChange = (event) => {
        const state = this.state
        state[event.target.name] = event.target.value;
        this.setState(state);

    }

    validateUser(name,password){

     var currentUser = {};
     var isFound = false;

         this.state.userList.map((user) => {
            if(user.email == name && user.password == password){
               window.sessionStorage.setItem("UserId",user.id);
               currentUser=user;
               isFound=true
            }
         });

         if(isFound == true){

          currentUser.status = true;
          this.setState({
            currentUserObj: currentUser
          })

          CommonPost('userStatusUpdate',currentUser)
                     .then(res=>res.json())
                     .then(json =>{
                         this.setState({
                             isLoaded:true,

                         })
                     });

          return true;
         }else{
         window.sessionStorage.setItem("UserId","NF");
          return false;
         }
    }

   handleOnClick = (event) =>{
   event.preventDefault();

    var isValid = false;
    isValid = this.validateUser(this.state.email,this.state.password);
    console.log("status",isValid);
    if(isValid == true){

        if(this.state.currentUserObj.role == 1){
            this.props.history.push('/AdminDashboard');
        }
        else if(this.state.currentUserObj.role == 2){
            this.props.history.push('/ProductManagement');
        }
         else if(this.state.currentUserObj.role == 3){
             this.props.history.push('/Home');
         }
    }
    else{
        return toast.error("Incorrect Credentials")
    }

    };
  render() {

  const myStyle = {
     width: "400px",
  };

    return (

        <>
        <h1> LOGIN </h1> <br/>
        <div class="d-flex justify-content-center">
        <Form style={myStyle}>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleOnChange} required/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleOnChange} required/>
        </Form.Group>

        </Form>
        </div>

        <br/>
        <a href='/SignUp'> Not a member? Join Us </a>
        <br/> <br/>

        <Button variant="primary" type="submit" onClick = {this.handleOnClick}>
           LOGIN
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

