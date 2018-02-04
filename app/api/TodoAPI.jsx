const $ = require('jquery');

module.exports = {
  filterTodos: function(todos, showCompleted, searchText) {
    let filteredTodos = todos;
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.filter((todo) => {
      let todoText = todo.text.toLowerCase();

      return searchText.length === 0 || todoText.indexOf(searchText) > -1;
    });

    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if(a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });
    return filteredTodos;
  }
}
