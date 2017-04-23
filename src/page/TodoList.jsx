import React from 'react';
import {connect} from 'react-redux';
import Todo from './Todo.jsx';
import constants from './../constants.js';
import actions from './../actions.js';

class TodoList extends React.Component {
	render() {
    const {tabId, visibleTodos, toggle, remove, height} = this.props;
		return (
      <ul
        style={{
          height
        }}
      >
  			{visibleTodos.map(t => 
          <Todo 
            key={t.id}
            todo={t}
            toggle={() => toggle(tabId, t.id)}
            remove={() => remove(tabId, t.id)}/>
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
      tabId: state.selectedTab,
			visibleTodos: applyFilter(state.tabs[state.selectedTab].todos, state.filter)
		}
	},
  (dispatch, ownProps) => {
    return {
      toggle: (tabId, todoId) => {
        return dispatch(actions.toggleTodo(tabId, todoId));
      },
      remove: (tabId, todoId) => {
        return dispatch(actions.removeTodo(tabId, todoId));
      }
    }
  }
)(TodoList);