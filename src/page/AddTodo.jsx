import React from 'react';
import {connect} from 'react-redux';
import actions from './../actions.js';

let input;

class AddTodo extends React.Component {
	render() {
		return (
			<div>
				<input ref={node => input = node}/>
	      <button onClick={this.props.onClick}>
	        Add Todo
	      </button>
			</div>
		);
	}
}

export default connect(
	(state, ownProps) => {
		return {
			active: ownProps.filter === state.filter
		}
	},
	(dispatch, ownProps) => {
		return {
			onClick: () => {
				dispatch(actions.addTodo(input.value));
				input.value = '';
				input.focus();
			}
		}
	}
)(AddTodo);