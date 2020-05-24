import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { CommonGet , CommonPost, CommonUpdateById} from '../../config';
import { browserHistory } from 'react-router';

export default class AlreadyLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status : ''
        }
      }

    componentDidMount() {
        this.setState({
            status : ''
        });

    }

    handleOnClick = (event) =>{
        let id = window.sessionStorage.getItem("UserId");
         let updateUser = {
             "status" : false,
         }

         console.log("Logout User Details: " , updateUser);
         CommonUpdateById("user", id, updateUser)
             .then(res => res.json())
             .then(json => {
             })

         if(this.state.status == false){
            this.props.history.push('/Home');
            window.sessionStorage.setItem("UserId", "NF");
         }
     }

    render() {
        return (
        <>
            <br/>
            <br/>
            <h1>You Have Already Logged In</h1>
            <br/>
            <Button variant="info" style={{width:'30%'}} onClick = {this.handleOnClick}> Logout </Button>

        </>
        );
    }
}

