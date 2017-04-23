import React from 'react';
import {connect} from 'react-redux';
import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';

const colors = {
	blue: '#3333ff',
	green: '#00b300',
	red: '#ff3333'
};

class Page extends React.Component {
	render() {
		const {color} = this.props;
		return (
			<div
				style={{
					height: 'calc(100% - 50px)',
					backgroundColor: colors[color] ? colors[color] : '#f2f2f2'
				}}
			>
				<div
					style={{
						width: '1000px',
						height: 'calc(100% - 20px)',
						marginLeft: '50%',
						transform: 'translateX(-50%)',
						backgroundColor: '#fff',
						padding: '10px'
					}}
				>
					<AddTodo height="100px"/>
		      <TodoList height="calc(100% - 232px)"/>
		      <Footer height="100px"/>
				</div>
			</div>
		);
	}
}

export default connect(
	(state, ownProps) => {
		return {
			color: state.route
		};
	}
)(Page);