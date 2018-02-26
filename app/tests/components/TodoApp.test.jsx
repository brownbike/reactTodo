import React from 'react';
import ReactDOM from'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

const configureStore = require('configureStore');
import TodoList from 'TodoList';
import {TodoApp} from 'TodoApp';


describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render todoList', () => {
    const store = configureStore.configure();
    const provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <TodoApp/>
        </Provider>
    );

    const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    const todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
