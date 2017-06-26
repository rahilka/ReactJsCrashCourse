import React, { Component } from 'react';

class TodoItem extends Component {
		
  render() {
    return (
      <li className="Todo">
		<strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

TodoItem.propTypes = {
	//eslint-disable-next-line
	todo: React.PropTypes.object
}

export default TodoItem;
