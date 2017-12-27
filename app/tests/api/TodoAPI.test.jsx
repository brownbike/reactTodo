const expect = require('expect');

const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      let todos =[{
        id: 2,
        text: 'test all files',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      let actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid data', () => {
      let badData = {a: 'b'};
      TodoAPI.setTodos(badData);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return an empty array for bad local storage data', () => {
      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localstorage', () => {
      let todos =[{
        id: 2,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    let todos = [{
        id: 1,
        text: 'first text',
        completed: true
      },
      {
        id: 2,
        text: 'some second text',
        completed: false
      },
      {
        id: 3,
        text: 'some third text',
        completed: true
      }];

    it('should return all items if showCompleted is true', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return uncompleted items if showCompleted is false', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    });

    it('should return all items if searchText is empty', () => {
      let filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});

