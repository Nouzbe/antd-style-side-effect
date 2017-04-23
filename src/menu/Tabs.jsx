import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Tab from './Tab.jsx';
import AddTab from './AddTab.jsx';
import actions from './../actions.js';

class Tabs extends React.Component {
	render() {
		const {tabs, selectedId, fallbackId, select, rename, add, remove} = this.props;
		return (
			<div style={{display: 'inline-block'}}>
				{Object.keys(tabs).map(id =>
					<Tab 
						key={id} 
						tab={tabs[id]} 
						active={id === selectedId}
						select={() => select(id)}
						rename={e => rename(id, e.target.value)}
						remove={() => {remove(id, id === selectedId ? fallbackId : null)}}
					/>
					)}
				<AddTab cb={add}/>
			</div>
		);
	}
}

export default connect(
	(state, ownProps) => {
		const keys = Object.keys(state.tabs);
		const idx = keys.indexOf(state.selectedTab);
		return {
			tabs: state.tabs,
			selectedId: state.selectedTab,
			fallbackId: keys.length > 1 ?
				idx === 0 ? 
					state.tabs[keys[1]].id :
					state.tabs[keys[idx - 1]].id
				: -1
		};
	},
	(dispatch, ownProps) => {
		return {
			add: () => {
				dispatch(actions.addTab());
			},
			select: id => {
				dispatch(actions.selectTab(id));
			},
			remove: (id, fallbackId) => {
				dispatch(actions.removeTab(id, fallbackId));
			},
			rename: (id, name) => {
				dispatch(actions.renameTab(id, name));
			}
		}
	}
)(Tabs);;