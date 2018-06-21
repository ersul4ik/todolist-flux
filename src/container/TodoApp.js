import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import TodoAdd from '../components/TodoAdd'
import TodoList from "../components/TodoList";
// import TodoStore from '../storage/TodoStorage';
import * as TodoAction from '../../actions/';

let descripton = "";
export default class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {task_id:1, description: 'first'},
                {task_id:2, description: 'second'},

            ],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);


    }

    handleChange = (event) => {
        descripton = event.target.value;
    };

    handleDeleteTodo(event) {
        TodoActions.deleteTodo(event);
    }

    handleSubmit(event) {
        event.preventDefault();
        TodoAction.addTask(event)
    };

  render(){
    return (
      <div>
        <TodoAdd addTodo={this.handleSubmit} input_change={this.handleChange}/>
        <TodoList todos={this.state.todos} deleteTodo={this.handleDeleteTodo} />
      </div>
    );
  }
}
