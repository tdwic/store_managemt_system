import React, { Component } from 'react';

var api = 'http://localhost:8181';


    export const CommonGet = (controller, queryString) => {

       return fetch(api+'/'+controller+'/'+queryString);
        
    }

    export const CommonPost =  (controller,requestbody)=> {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestbody)
        };

        return fetch(api+'/'+controller,requestOptions);
       
    }

