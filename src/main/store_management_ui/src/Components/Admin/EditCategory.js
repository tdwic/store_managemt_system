import React, {Component} from 'react';
import { Table } from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {CommonGet, CommonUpdate, CommonUpdateById} from "../../config";


export default class EditCategory extends Component{
    constructor(props) {
        super(props);
        this.state = {
            categoryId:'',
            categoryName: '',
            categories: '',
            isLoaded : false
        }


    }

    handleSubmit(event) {
        console.log("Inside submit method");
        let id = event.target.categoryId.value;
        let updatedCate = {
            "categoryName": event.target.categoryName.value
        }

        CommonUpdateById("category", id, updatedCate)
            .then(res => res.json())
            .then(json =>{
                this.setState({
                    isLoaded : true

                })
            });
    }

    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    dialogClassName="modal-60w"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Update Categories
                        </Modal.Title>
                    </Modal.Header>
                    <div  style={{textAlign:'center'}}>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit} style={{display:"inline-block"}}>
                            <Form.Group controlId="categoryId" style = {{display : 'none'}}>
                                <Form.Label style={{float:'left', fontSize:'20px' ,fontFamily:'Square Sans Serif'}}>Category ID:</Form.Label>
                                <Form.Control type="text" placeholder="Category ID" name = "categoryId"  defaultValue ={this.props.catid} disabled/>
                            </Form.Group>
                            <Form.Group controlId="categoryName" >
                                <Form.Label style={{float:'left', fontSize:'20px' ,fontFamily:'Square Sans Serif'}}>Category :</Form.Label>
                                <Form.Control type="text" placeholder="Enter Category" name = "categoryName"   defaultValue ={this.props.catname} required />
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
        );
    }
}
