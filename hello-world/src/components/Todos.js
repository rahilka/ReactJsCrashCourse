import React, { Component } from 'react';
import TodoItem from './ProjectItem';

class Todos extends Component {
	
  render() {
	
	let todoItems;
	
	if(this.props.todos) {
		todoItems = this.props.todos.map(todo => {
			//console.log(project);
			return(
				<TodoItem key={todo.title} todo={todo} />
			)
		});
	}
	
	
    return (
      <div className="Todos">
	  <h3>Todo List</h3>
		{todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
	//eslint-disable-next-line
	todos: React.PropTypes.array
}

export default Todos;
