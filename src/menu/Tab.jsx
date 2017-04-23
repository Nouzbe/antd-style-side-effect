import React from 'react';
import RemoveTab from './RemoveTab.jsx';

class Tab extends React.Component {
	render() {
		const {rename, remove, tab, active, select} = this.props;
		return (
			<div 
				style={{
					float: 'left',
					height: '20px',
					padding: '10px',
					margin: '0 2px 5px 0',
					border: '1px solid #cccccc',
					borderBottom: 'none',
					borderRadius: '5px',
					cursor: 'pointer',
					backgroundColor: active ? '#00bcd4' : '#fff'
				}}
				onClick={select}
			>
				<input 
					value={tab.name} 
					onChange={rename}
					className="soft-input"
					style={{
						width: (tab.name.length + 2) * 6 + 'px',
						backgroundColor: active ? '#00bcd4' : '#fff',
					color: active ? '#fff' : '#000'
					}}
				/>
				{tab.id !== -1 ? <RemoveTab cb={remove}/> : null}
			</div>
		);
	}
}

export default Tab;