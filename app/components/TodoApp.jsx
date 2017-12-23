const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');

const TodoApp = React.createClass({
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
    const {todos} = this.state;

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
