import React from 'react'
import { Component } from 'react'

class TodoInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: ''
        }
    }
    //event handlers goes here
    handleTitleChange(event){
        this.setState({
            title: event.target.value
        })
    }

    handleSubmit(event){
        //prevents default action of submit//
        event.preventDefault()

        if (this.state.title != ''){
            this.props.addTodo(this.state.title)
            this.setState({
                title: ''
            })
        }
    }

    render() {
        return(
        <div className="todo_input">
            <div>
                <input 
                    type="text"
                    placeholder="title"
                    required={true}
                    value={this.state.title}
                    onChange={this.handleTitleChange.bind(this)}
                />
            </div>
            <div className="submitButton">
                <button onClick={this.handleSubmit.bind(this)}>Add</button>
            </div>
        </div>

        )
    }
}

export default TodoInput