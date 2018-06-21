import TodoDispatcher     from '../dispatcher';
import axios              from 'axios';

const ADD_TODO = 'ADD_TODO';
const GET_TODO = 'GET_TODO';
const DELETE_TODO = 'DELETE_TODO';

export function addTask(text) {
    console.log('in action ADD', text)
    return (dispatch) => {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:4000/todos',
        params: text,
      }).then(() => {
        TodoDispatcher.dispatch({ type: ADD_TODO, task_description: text })
      })
    }
  }

  export function deleteTodo(task_id) {
    console.log('in action DELETE', task_id)
    return dispatch =>
      axios({
        method: 'post',
        url: 'http://127.0.0.1:4000/pop',
        params: { id: task_id },
      })
        .then(TodoDispatcher.dispatch({ type: DELETE_TODO, tasks: task_id }))
  }

  export function fetchTodos() {
    return dispatch =>
      axios.get('http://127.0.0.1:4000/')
        .then((response) => {
            TodoDispatcher.dispatch({ type: SELECT_ALL_TODO, task_id: response.data.data })
        })
  }