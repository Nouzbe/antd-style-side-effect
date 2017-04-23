import React from 'react';

class RemoveTodo extends React.Component {
	render() {
		const {cb} = this.props;
		return (
			<span
				style={{
					marginLeft: '30px',
					color: '#cccccc',
					fontSize: '12px',
					cursor: 'pointer'
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

export default RemoveTodo;