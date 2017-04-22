import React from 'react';
import Logo from './Logo.jsx';
import Tabs from './Tabs.jsx';

class Menu extends React.Component {
	render() {
		return (
			<div style={{
				height: '40px',
				padding: '5px',
				backgroundColor: '#76b9ff',
				boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'
			}}>
				<Logo/>
				<Tabs/>
			</div>
		);
	}
}

export default Menu;