import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.todo.title,
            completed: this.props.todo.completed
        }
    }

    handleComplete() {
        this.props.actions.completeTodo(this.props.todo.id)

        this.setState({
            checked: !this.state.checked
        })
    }

    handleDelete() {
        this.props.actions.deleteTodo(this.props.todo.id)
    }

    handleEdit() {
        this.props.actions.editTodo(this.props.todo.id)
    }

    handleUpdate() {
        if(this.state.title != ''){
            this.props.actions.updateTodo(this.props.todo.id, this.state.title)
        }
    }

    handleTitleChange(event){
        this.setState({
            title: event.target.value
        })
    }

    handleDescriptionChange(event){
        this.setState({
            description: event.target.value
        })
    }

    handleDueDateChange(event) {
        this.setState({
            dueDate: event
        })
    }

    handleFocusChange(event) {
        this.setState({
            focused: event.focused
        })
    }

    render() {
        return(
            <li className="todo_item">
                <input 
                    type="checkbox"
                    defaultChecked={this.state.completed}
                    required={true}
                    onClick={this.handleComplete.bind(this)}
                />
                <input 
                    type="text"
                    placeholder="title"
                    required={true}
                    value={this.state.title}
                    onChange={this.handleTitleChange.bind(this)}
                />
                <button></button>
            </li>
        )
    }
}

export default TodoItem