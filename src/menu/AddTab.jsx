import React from 'react';

class AddTab extends React.Component {
	render() {
		const {cb} = this.props;
		return (
			<div 
				style={{
					float: 'left',
					height: '20px',
					padding: '10px 5px',
					margin: '0 0 5px 0',
					border: '1px solid #cccccc',
					borderBottom: 'none',
					borderRadius: '5px',
					cursor: 'pointer'
				}}
				onClick={cb}
			>
				+
			</div>
		);
	}
}

export default AddTab;