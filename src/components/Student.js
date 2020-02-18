import React, { Component } from 'react';
import axios from 'axios';

class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: ' ',
            username:' ',
            section:' ',
            Branch:'',
            addres:' ',

        }
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })


    }
    render() {
        const { userId,username,section ,Branch,addres} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <hr/>
                    <label>StudentId:</label>
                    <input type="text" name="userId" value={userId} onChange={this.changeHandler} /><br/>
                    <label>SName:</label>
                    <input type="text" name="username" value={username} onChange={this.changeHandler}></input><br/>
                    <label>Branch:</label>
                    <input type="text" name="Branch" value={Branch} onChange={this.changeHandler}></input><br/>
                    <label>section:</label>
                    <input type="text" name="section" value={section} onChange={this.changeHandler}></input><br/>
                    <label>addres:</label>
                    <input type="text" name="addres" value={addres} onChange={this.changeHandler}></input><br/>
                    <hr />
                    <button type="submit"> submit</button>
                </form>

            </div>

        )
    }

}

export default Student