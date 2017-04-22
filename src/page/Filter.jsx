import React from 'react';
import {connect} from 'react-redux';
import actions from './../actions.js';

class Filter extends React.Component {
	render() {
		return (
			<div style={{marginRight: '10px', display: 'inline-block'}}>
				{
					this.props.active ?
					<span>{this.props.children}</span> :
						<a 
							href="#"
							onClick={this.props.onClick}
						>
							{this.props.children}
						</a>
					}
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