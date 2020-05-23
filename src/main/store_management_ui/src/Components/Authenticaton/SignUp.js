import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class SignUp extends Component {
   constructor(props) {
        super(props);
        this.state = {
            firstname : '',
            lastname : '',
            email : '',
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
                  email : ''
              });
              this.listStoreManagers();
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
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email Address" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        </Form>
        </div>

        <br/>
        <Button variant="primary" type="submit">
           CREATE ACCOUNT
        </Button>
        </>
   
    );
  }
}
