import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import axios from 'axios';


class TodoStore extends EventEmitter {

    constructor() {
        super();
        this.todos = []; // от сюда берут данные контейнеры. 
    }

    async createTodo(text) { // создаёт таск, id is autoIncrement
        let current_url = "http://127.0.0.1:4000/todos";
        await axios({
            method: 'post',
            url: current_url,
            params: { description: text },
        }).then(response => {
            return 201
        });
        return "200"
    }

    async deleteTodo(task_id) { // удаляет переданный таск
        let url = "http://127.0.0.1:4000/pop";
        await axios({
            method: 'delete',
            url: url,
            params: { id: task_id },
        })
        window.location.reload();
        return "200"
    }

    async receiveAll() {  // Выдааёт все задачи из БД
        let res = await axios.get("http://127.0.0.1:4000/");
        this.todos = res.data.data;
        this.emit("change");
        return this.todos;
    }

    getAll() { // Отображает данные которые вытащил метод receiveAll()
        return this.todos;
    }


    handleActions(action) { // Ловит action, отправляет в нужный метод
        switch (action.type) {
            case "ADD_TODO": {
                this.createTodo(action.task);
            }
                break;
            case "RECEIVE_TODO": {
                this.receiveAll(action)
            }
                break;
            case "DELETE_TODO": {
                this.deleteTodo(action.task_id)
            }
                break;
            case "GET_TODO": {
                this.getAll()
            }
                break;
        }

    }
}

const todoStore = new TodoStore();

dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
