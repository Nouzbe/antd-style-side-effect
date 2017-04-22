import React from 'react';
import AddTodo from './AddTodo.jsx';
import VisibleTodoList from './VisibleTodoList.jsx';
import Footer from './Footer.jsx';

class Page extends React.Component {
	render() {
		return (
			<div style={{
				height: 'calc(100% - 70px)',
				padding: '10px'
			}}>
				<AddTodo/>
	      <VisibleTodoList/>
	      <Footer/>
			</div>
		);
	}
}

export default Page;