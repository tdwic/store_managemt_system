import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CommonGet , CommonPost} from '../../config';


class UserProfile extends Component {

  constructor(props){
    super(props);
      this.state={
          data:"",
          postdata:"",
          isLoaded: false,
    }
  }
 

componentDidMount(){
 
var controller = 'demo';
var val = '1';

CommonGet(controller,val)
      .then(res=>res.json())
      .then(json =>{
        this.setState({
            isLoaded:true,
            data: json
        })
      });

let formData = {
     name:"hi",
     age: 15,
     role:"admin"
}
var postcontroller = 'user'

CommonPost(postcontroller,formData)
    .then(response => response.json())
    .then(data => this.setState({ postdata: data }));

    // fetch('http://localhost:8181/demo/1')
    // .then(res=>res.json())
    // .then(json =>{
    //   this.setState({
    //       isLoaded:true,
    //       data: json
    //   })
    // });
  
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({	
  //       name:"yuvin",
  //       age: 15,
  //       role:"admin" })
  // };
  // fetch('http://localhost:8181/user', requestOptions)
  //     .then(response => response.json())
  //     .then(data => this.setState({ postdata: data }));
}
  render() {
    return (
        
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control type="text" placeholder="username" />
         
        </Form.Group>
      
        <Form.Group controlId="formBasicEmail">
          <Form.Label>age</Form.Label>
          <Form.Control type="text" placeholder="age" />
         
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>role</Form.Label>
          <Form.Control type="text" placeholder="role" />
         
        </Form.Group>
       
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
      
    );
  }
}

export default UserProfile;