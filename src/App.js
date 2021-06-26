import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import About from './pages/about';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' exact component={About} />
					<Route path='/profile' exact component={Profile} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
