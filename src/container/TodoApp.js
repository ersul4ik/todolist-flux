import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import TodoAdd from '../components/TodoAdd'
import TodoList from "../components/TodoList";
import TodoStore from '../stores/TodoStore';
import * as TodoAction from '../actions';

let descripton = "";
export default class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getAll()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);


    }

    componentDidMount() { // is performed when the component is loaded
        console.log('this is state', this.state.todos)

    }

    async componentWillMount() { // Слушает не случилось ли изменений.
        await TodoStore.on("change", () => {
            this.setState({
                todos: TodoStore.getAll(),  // Предоставляет текущее данные
            })
        });
        TodoStore.on("deleted", () => {
            this.setState({
                todos: TodoStore.receiveAll(),  // Предоставляет текущее данные
            })
        });
        this.setState = ({
            todos: await TodoStore.receiveAll(),
        });

    }

    handleChange = (event) => { // is change when the client inputing
        descripton = event.target.value;
    };

    handleDeleteTodo(event) { // is remove task 
        event.preventDefault;
        TodoAction.deleteTodo(event);
    }

    handleSubmit(event) { // is sending data to store
        event.preventDefault();
        if (!descripton.length) {
            return 403
        }
        else {
            TodoAction.addTodo(descripton)
        }
    };

    render() {
        const { todos } = this.state
        return (
            <div>
                <TodoAdd addTodo={this.handleSubmit} input_change={this.handleChange} />
                <TodoList todos={todos} deleteTodo={this.handleDeleteTodo} />
            </div>
        );
    }
}
