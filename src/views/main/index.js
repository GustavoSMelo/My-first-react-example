"use strict";

import React, {Component} from 'react';
import api from '../../services/api';

export default class Main extends Component{
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async() =>{
        const response = await api.get();
    }

    render(){
        return <h1>Hello, I am a body main</h1>
    }
}
