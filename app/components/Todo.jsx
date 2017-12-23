const React = require('react');

const Todo = React.createClass({
  render: function() {
    let {text, id} = this.props;

    return (
      <div>
        <p>{id}. {text}</p>
      </div>
    )
  }
});

module.exports = Todo;
