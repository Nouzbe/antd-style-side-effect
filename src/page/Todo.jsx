import React from 'react';
import RemoveTodo from './RemoveTodo.jsx';

class Todo extends React.Component {
	render() {
		const {todo, toggle, remove} = this.props;
		return (
			<li>
        <span
          onClick={toggle}
          style={{
            textDecoration: todo.completed ? 'line-through': 'none',
            cursor: 'default'
          }}
        >
          {todo.text}
        </span>
        <RemoveTodo cb={remove}/>
      </li>
		);
	}
}

export default Todo;