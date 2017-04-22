import React from 'react';
import {Provider} from 'react-redux';
import Menu from './menu/Menu.jsx';
import Page from './page/Page.jsx';
import store from './store.js';

class App extends React.Component {
  render() {
    return (
      <div style={{height: '100%'}}>
      	<Menu/>
      	<Page/>
      </div>
    );
  }
}

class AppContainer extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<App/>
			</Provider>
		);
	}
}


export default AppContainer;