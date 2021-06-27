import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Resources from './pages/resources';
import Profile from './pages/profile';
import Interactions from './pages/interactions';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={Profile} />
					<Route path='/interactions' exact component={Interactions} />
					<Route path='/resources' exact component={Resources} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
