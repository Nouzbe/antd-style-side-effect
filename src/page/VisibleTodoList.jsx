import React from 'react';
import {connect} from 'react-redux';
import constants from './../constants.js';
import actions from './../actions.js';

class VisibleTodoList extends React.Component {
	render() {
		return (
			<ul>
        {this.props.visibleTodos.map(todo => 
          <li 
            key={todo.id}
            onClick={() => this.props.onClick(todo.id)}
            style={{textDecoration: todo.completed ? 'line-through': 'none'}}
          >
            {todo.text}
          </li>
        )}
      </ul>
		);
	}
}

const applyFilter = (todos, filter) => {
  switch(filter) {
    case constants.filters.all:
      return todos;
    case constants.filters.completed:
      return todos.filter(t => t.completed);
    case constants.filters.remaining:
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

export default connect(
	(state, ownProps) => {
		return {
			visibleTodos: applyFilter(state.todos, state.filter)
		}
	},
	(dispatch, ownProps) => {
		return {
			onClick: id => {
				dispatch(actions.toggleTodo(id));
			}
		}
	}
)(VisibleTodoList);