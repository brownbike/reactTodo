const React = require('react');

const TodoSearch = React.createClass({
  handleSearch: function() {
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function() {
    return (
        <div className="container__footer">
          <div>
            <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch} />
          </div>
          <div>
            <label>
              <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
              Show Completed Todos
            </label>
          </div>
        </div>
    )
  }
});

module.exports = TodoSearch;
