import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from './../actions.js';

class MyLink extends React.Component {
	render() {
		const {color, onClick} = this.props;
		return (
			<div
				style={{
					float: 'right',
					margin: '10px 20px 0 0'
				}}
			>
				<Link to={`/${color}`}>
          {color}
        </Link>
			</div>
		);
	}
}

export default MyLink;