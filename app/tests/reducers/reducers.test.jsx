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
        todo: {
          id: '12345',
          text: 'Do something',
          completed: false,
          createdAt: '123'
        }
      };

      let res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      let todos = [{
        id: 7,
        text: 'Im a todo',
        completed: true,
        createdAt: '123',
        completedAt: 123
      }];

      let updates = {
        completed: false,
        completedAt: null
      }

      let action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      let res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
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

    it('should clear todos on logout', () => {
      const todos = [{
        id: '123',
        text: 'something',
        completed: false,
        completedAt: undefined,
        createdAt: '123'
      }];

      const action = {
        type: 'CLEAR_TODOS'
      };

      let res = reducers.todosReducer(df(todos), df(action));
      expect(res.length).toEqual(0);
    });
  });

  describe('authReducer', () => {
    it('should set the uid on login', () => {
      const action = {
        type: 'LOGIN',
        uid: '123'
      };

      const res = reducers.authReducer(undefined, df(action));
      expect(res.uid).toEqual(action.uid);
    });

    it('should clear the uid on logout', () => {
      const action = {
        type: 'LOGOUT'
      };

      const authData = {
        uid: '123'
      };

      const res = reducers.authReducer(df(authData), df(action));
      expect(res).toEqual({});
    });
  });
});
