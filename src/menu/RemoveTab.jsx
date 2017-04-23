import React from 'react';

class RemoveTab extends React.Component {
	render() {
		const {cb} = this.props;
		return (
			<span 
				style={{
					marginLeft: '10px',
					color: '#cccccc',
					fontSize: '12px'
				}}
				onClick={e => {
					e.stopPropagation();
					cb();
				}}
			>
				x
			</span>
		);
	}
}

export default RemoveTab;