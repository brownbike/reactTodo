const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
  it('Should generate searchText action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'something'
    };

    let res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate addTodo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'go running'
    };

    let res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });

  it('should generate addTodos action object', () => {
    const todos = [{
      id: '123',
      text: 'something',
      completed: false,
      completedAt: undefined,
      createdAt: '123'
    }];

    const action = {
      type: 'ADD_TODOS',
      todos
    };

    let res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: '2'
    };

    let res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });

  it('should generate toggle completed action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    let res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });
});