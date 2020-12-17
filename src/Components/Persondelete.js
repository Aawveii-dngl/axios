import React, { Component } from 'react';
import axios from 'axios';

export default class Persondelete extends Component {
    state= {
        id:'0'
    };

    handleSubmit = e =>{
        e.preventDefault();
        
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`).then(res=>{
            console.log(res);
            console.log(res.data);
    });
    }

    handleChange = e =>{
        this.setState({id:e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Id:
                        <input type = 'text' name = 'id' onChange = {this.handleChange}/>
                    </label>
                    <button type = 'submit'>Delete</button>
                </form>
            </div>
        )
    }
}
