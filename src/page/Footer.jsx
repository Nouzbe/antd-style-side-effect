import React from 'react';
import Filter from './Filter.jsx';
import constants from './../constants.js';

class Footer extends React.Component {
	render() {
		const {height} = this.props;
		return (
			<div 
				style={{
					textAlign: 'center',
					height
				}}
			>
        <Filter filter={constants.filters.all}>All</Filter>
        <Filter filter={constants.filters.completed}>Completed</Filter>
        <Filter filter={constants.filters.remaining}>Remaining</Filter>
      </div>
		);
	}
}

export default Footer;