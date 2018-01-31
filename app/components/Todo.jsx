const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');
const moment = require('moment');

export const Todo = React.createClass({
  handleToggleTodo: function() {
    const {id, dispatch, completed} = this.props;
    dispatch(actions.startToggleTodo(id, !completed));
  },
  render: function() {
    const {text, completed, createdAt, completedAt} = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';
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
      <div className={todoClassName} onClick={this.handleToggleTodo}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(Todo);
