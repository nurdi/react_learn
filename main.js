import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, IndexRoute, Switch } from 'react-router-dom';

import App from './App.jsx';
import About from './About.js';
import Add from './Add.js';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
		<App>
			<Route path='about' component={About}></Route>
			<Route path='add' component={Add}></Route>
		</App>
		</Switch>
	</BrowserRouter>, 
	document.getElementById('app')
);
