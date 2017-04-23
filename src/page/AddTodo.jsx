import React from 'react';
import {connect} from 'react-redux';
import actions from './../actions.js';
import TextField from 'material-ui/TextField';

class AddTodo extends React.Component {
	constructor(...props) {
		super(...props);
		this.onKeyUp = this.onKeyUp.bind(this);
	}
	onKeyUp(e) {
		if(e.keyCode === 13) {
			this.props.dispatch(
				actions.addTodo(
					this.props.selectedTabId,
					e.target.value
				)
			);
			e.target.value = '';
		}
	}
	render() {
		const {height} = this.props;
		return (
			<div
				style={{
					textAlign: 'center',
					height
				}}
			>
				<TextField
					onKeyUp={this.onKeyUp}
		      hintText="Add Todo"
		    />
			</div>
		);
	}
}

export default connect(
	(state, ownProps) => {
		return {
			active: ownProps.filter === state.filter,
			selectedTabId: state.selectedTab
		}
	}
)(AddTodo);