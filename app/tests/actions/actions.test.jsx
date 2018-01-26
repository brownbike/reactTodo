import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const expect = require('expect');

const actions = require('actions');

const createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: '12345',
        text: 'Do something',
        completed: false,
        createdAt: '123'
      }
    };

    let res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'Todo Item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
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
