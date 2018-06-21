import React from 'react'

export default class TodoList extends React.Component{
   
    render(){
        console.log('fucking chade??? ', this.props.todos)
        const todos = this.props.todos
        return(
        <div>
            <ul className="list-group">
                {todos.map((todo) =>
                    <li key={todo.task_id} className="list-group-item">
                        {todo.description}
                        <button type="button" className="close right" aria-label="Close"
                                onClick={() => this.props.deleteTodo(todo.task_id)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </li>
                )}
            </ul>
        </div>
        )
    }
}
