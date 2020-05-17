import React, { Component } from 'react';
import {CommonGet} from "../../config";

class CategoryRender extends Component {
    constructor()
    {
        super()
        this.state={
            id:0
        }

    }

    componentDidMount(){
       var id=  sessionStorage.getItem("YOLO:");
       console.log("id",id);
    }

    render() {
        return (
            <h1>categories</h1>

        );
    }
}

export default CategoryRender;