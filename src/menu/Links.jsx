import React from 'react';
import Link from './Link.jsx';

class Links extends React.Component {
	render() {
		return (
			<div
				style={{
					float: 'right',
					height: '100%',
					width: '300px'
				}}
			>
				{['red', 'green', 'blue'].map(c =>
					<Link key={c} color={c}/>
				)}
			</div>
		);
	}
}

export default Links;