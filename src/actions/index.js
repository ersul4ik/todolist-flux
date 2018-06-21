import axios from 'axios';

import dispatcher from '../dispatcher/'

const ADD_TODO = 'ADD_TODO'
const GET_TODO = 'GET_TODO'
const DELETE_TODO = 'DELETE_TODO'


export function addTodo(text) {
  dispatcher.dispatch({
    type: ADD_TODO,
    task: text,
  });
}

export function getApiTodos() {
  dispatcher.dispatch({
    type: GET_TODO,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: DELETE_TODO,
    task_id: id,
  });
}