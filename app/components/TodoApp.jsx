var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        },
        {
          id: 2,
          text: 'feed the cat'
        },
        {
          id: 3,
          text: 'feed the fish'
        },
        {
          id: 4,
          text: 'walk the fish'
        }
      ]
    }
  },

  handleAddTodo: function(text) {
    console.log('new Todo: ', text);
  },
  handleSearch: function(showCompleted, searchText) {
    this.setStete({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
