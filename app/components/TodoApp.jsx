var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
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

  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
