import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Loging extends Component {

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
          <Form.Control type="text" placeholder="Email Address" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        </Form>
        </div>

        <br/>
        <a href='/SignUp'> Not a member? Join Us </a>
        <br/> <br/>

        <Button variant="primary" type="submit">
           LOGIN
        </Button>

        </>

    );
  }
}

export default Loging;