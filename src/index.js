import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import TodoApp from './container/TodoApp'


ReactDOM.render(<TodoApp />, document.getElementById('app'));

module.hot.accept();