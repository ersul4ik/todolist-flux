import React from 'react'

import TodoAdd from './TodoAdd'
import TodoList from './TodoList'
// import TodoStore from '../storage/TodoStorage';
// import * as TodoActions from '../actions/Todoactions';

let descripton = "";
export default class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    handleChange = (event) => {
        descripton = event.target.value;
    };


    render() {
        const todos = this.state.todos;


        return (
            <div>
            < TodoAdd />
            < TodoList/>
            </div>
    )
    }
}
