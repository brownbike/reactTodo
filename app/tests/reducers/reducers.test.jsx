const expect = require('expect');
const reducers = require('reducers');
const df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      let res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      let res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add a new todo', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'walk the dog'
      };

      let res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      let action = {
        type: 'TOGGLE_TODO',
        id: 7
      };

      let todos = [{
        id: 7,
        text: 'Im a todo',
        completed: false,
        createdAt: '123',
        completedAt: undefined
      }];

      let res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toExist();
    });

    it('should add existing todos', () => {
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
      let res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});