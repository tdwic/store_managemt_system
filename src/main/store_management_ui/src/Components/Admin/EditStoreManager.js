import React , { Component } from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {CommonUpdateById} from "../../config";


export default class EditStoreManager extends Component{
    constructor(props) {
        super(props);
        this.state= {
            id:'',
            firstname : '',
            lastname : '',
            email : '',
            storeManagers : [],
            users:[],
            isLoaded : false
        }
    }

    handleSubmit(event){
        let id = event.target.id.value;

        let updateUser = {
            "firstname" : event.target.firstname.value,
            "lastname" : event.target.lastname.value,
            "email" : event.target.email.value,
        }

        console.log("Update User Det: " , updateUser)

        CommonUpdateById("user", id, updateUser)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded :true
                })
            })

    }

    render() {
        return(
            <div>
                <Modal
                    {...this.props}
                    dialogClassName="modal-60w"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Update Store Manager Details
                        </Modal.Title>
                    </Modal.Header>
                    <div  style={{textAlign:'center'}}>
                    <Modal.Body>
                        <Form onSubmit = {this.handleSubmit} style={{display:"inline-block"}}>
                            <Form.Group controlId="id" style={{display:"none"}}>
                                <Form.Label style={{float:'left', fontSize:'20px' ,fontFamily:'Square Sans Serif'}}>User Id :</Form.Label>
                                <Form.Control type="text" placeholder="Enter id" name = "id" defaultValue ={this.props.usid}  required/>
                            </Form.Group>
                            <Form.Group controlId="firstname">
                                <Form.Label style={{float:'left', fontSize:'20px' ,fontFamily:'Square Sans Serif'}}>First Name :</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name = "firstname" defaultValue ={this.props.usfname}  required/>
                            </Form.Group>
                            <Form.Group controlId="lastname">
                                <Form.Label style={{float:'left', fontSize:'20px' ,fontFamily:'Square Sans Serif'}}>Last Name :</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name = "lastname" defaultValue ={this.props.uslname} required/>
                            </Form.Group>
                            <Form.Group controlId="email" >
                                <Form.Label style={{float:'left', fontSize:'20px',fontFamily:'Square Sans Serif'}}>Email address :</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name = "email" defaultValue ={this.props.usemail} required/>
                            </Form.Group>

                            <div style={{textAlign:'center',width:'100%'}}>
                                <Button className = "mr-2" style={{width:'30%'}} variant="success" type="submit">Save</Button>
                                <Button className = "ml-2" style={{width:'30%'}} variant="danger" onClick={this.props.onHide}>Close</Button>
                            </div>

                        </Form>
                    </Modal.Body>
                    </div>
                </Modal>
            </div>

        )
    }


}
