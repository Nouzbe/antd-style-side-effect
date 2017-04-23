import React from 'react';
import {connect} from 'react-redux';
import actions from './../actions.js';
import RaisedButton from 'material-ui/RaisedButton';

class Filter extends React.Component {
	render() {
		const {children, onClick, active} = this.props;
		return (
			<div 
				style={{
					marginRight: '10px',
					display: 'inline-block'
				}}
			>
				<RaisedButton 
					label={children} 
					primary={active} 
					onClick={onClick}
				/>
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
				dispatch(actions.setFilter(ownProps.filter));
			}
		}
	}
)(Filter);