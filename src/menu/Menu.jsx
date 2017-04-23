import React from 'react';
import Logo from './Logo.jsx';
import Tabs from './Tabs.jsx';
import Links from './Links.jsx';

class Menu extends React.Component {
	render() {
		return (
			<div 
				style={{
					height: '39px',
					padding: '5px',
					borderBottom: '1px solid #cccccc'
				}}
			>
				<Logo/>
				<Tabs/>
				<Links/>
			</div>
		);
	}
}

export default Menu;