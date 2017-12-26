const React = require('react');

const Todo = React.createClass({
  handleToggleTodo: function() {
    const {id} = this.props;
    this.props.onToggle(id);
  },
  render: function() {
    const {text, completed} = this.props;

    return (
      <div onClick={this.handleToggleTodo}>
        <p><input type="checkbox" checked={completed}/>{text}</p>
      </div>
    )
  }
});

module.exports = Todo;
