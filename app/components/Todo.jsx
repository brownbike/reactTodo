const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
  handleToggleTodo: function() {
    const {id} = this.props;
    this.props.onToggle(id);
  },
  render: function() {
    const {text, completed, createdAt, completedAt} = this.props;
    let renderDate = () => {
      let message = 'created: ';
      let timestamp = createdAt;

      if (completed) {
        message = 'completed: ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div onClick={this.handleToggleTodo}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
});

module.exports = Todo;
