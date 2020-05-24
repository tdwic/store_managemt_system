import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { CommonGet , CommonPost, CommonUpdateById} from '../../config';
import {toast, ToastContainer} from "react-toastify";


export default class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            password : '',
            cfpassword : '',
            users:[],

            validUserFirstName:'',
            validUserLastName:'',
            validUserPassword:'',
            validUserEmail: '',

            inEditMode : false,
            updated : false,
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
        this.listUserDetails();
    }

    handleOnClick = (event) =>{

        this.setState({
            inEditMode : true
        });
     }

     handleSubmit(event){


         console.log("Inside Update Method");
         let id = window.sessionStorage.getItem("UserId");

         let updateUser = {
             "firstname" : event.target.firstname.value,
             "lastname" : event.target.lastname.value,
             "email" : event.target.email.value,
             "password" : event.target.password.value
         }

         console.log("Updated User Details: " , updateUser);
         CommonUpdateById("user", id, updateUser)
             .then(res => res.json())
             .then(json => {
                this.setState({
                    updated: true
                });
             })

        if(this.state.updated == true){
            return toast.success("Account Successfully Updated")
        }
        this.setState({
            inEditMode : false
        });
     }

    handleOnChange = (event) => {
        const state = this.state
        state[event.target.name] = event.target.value;
        this.setState(state);

    }

      listUserDetails(){

        var uid = '';

        CommonGet('user','')
            .then(res=>res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    users : json
                })

               uid = window.sessionStorage.getItem("UserId");
               const usersList = this.state.users;

               this.state.users.map((element => {
                    if(element.id ===  uid){

                        this.setState({
                            validUserFirstName: element.firstname,
                            validUserLastName: element.lastname,
                            validUserPassword:element.password,
                            validUserEmail: element.email,
                        });

                    }
                }))


            });
      }

  render() {

    const myStyle = {
       width: "400px",
    };

    return (
        
        <>
        <h1>USER PROFILE</h1>
        <br/>
        <div class="d-flex justify-content-center">
        <Form onSubmit={this.handleSubmit} style={myStyle} >


        <Form.Group controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstname" defaultValue={this.state.validUserFirstName} onChange={this.handleOnChange} required readOnly={!this.state.inEditMode}/>
        </Form.Group>

        <Form.Group controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastname" defaultValue={this.state.validUserLastName} onChange={this.handleOnChange} required readOnly={!this.state.inEditMode}/>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" name="email" defaultValue={this.state.validUserEmail} onChange={this.handleOnChange} required readOnly={!this.state.inEditMode}/>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" defaultValue={this.state.validUserPassword} onChange={this.handleOnChange} required readOnly={!this.state.inEditMode}/>
        </Form.Group>

        <br/>
        <Button variant="info" style={{width:'30%', marginRight:'30px'}} onClick = {this.handleOnClick}>Edit</Button>
        <Button type="submit" style={{width:'30%'}} variant="success">Save</Button>

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
        </Form>
        </div>
        <br/>
        </>

      
    );
  }
}
