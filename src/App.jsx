import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from './menu/Menu.jsx';
import Page from './page/Page.jsx';
import store from './store.js';
import actions from './actions.js';

const history = createHistory();
history.listen((location, action) => {
  const route = location.pathname.substr(1);
  store.dispatch(actions.goto(route));
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div
          style={{
            height: '100%'
          }}
        >
        	<Menu/>
        	<Page/>
        </div>
      </MuiThemeProvider>
    );
  }
}

class AppContainer extends React.Component {
	render() {
		return (
			<Provider store={store}>
        <Router history={history}>
          <div 
            style={{
              height: '100%'
            }}
          >
            <Route exact path="/" component={App}/>
            <Route path="/:color" component={App}/>
          </div>
        </Router>
			</Provider>
		);
	}
}

export default AppContainer;