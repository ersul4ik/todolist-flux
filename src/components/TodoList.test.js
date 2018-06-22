import React from 'react'
import { shallow } from 'enzyme'
import TodoList from './TodoList'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Check components, description tasks', () => {
    const todos = [{id:1, description: 'first task'}, {id:2, description: 'second task'}]
    const component = shallow(<TodoList todos={todos} />)
    expect(component.contains('first task')).toBe(true)
    
})