import React from 'react';

class Logo extends React.Component {
	render() {
		return (
			<div style={{
				float: 'left'
			}}>
				<svg style={{
					height: '40px',
					cursor: 'pointer'
				}}>
					<text 
						x="10px" 
						y="30px" 
						style={{
							fontSize: '24px', 
							fill: '#676767'
						}}
					>
						MY
					</text>
					<text 
						x="52px" 
						y="30px" 
						style={{
							fontSize: '24px', 
							fill: '#dedede'
						}}
					>
						REACT
					</text>
					<text 
						x="140px" 
						y="30px" 
						style={{
							fontSize: '24px', 
							fill: '#676767'
						}}
					>
						STARTER
					</text>
				</svg>
			</div>
		);
	}
}

export default Logo;