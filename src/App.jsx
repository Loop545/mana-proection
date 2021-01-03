import React from 'react';
import { useRoutes } from 'raviger';

//Styles 
import '../src/App.scss'

//Components
import Nav from '../src/components/Nav' 
import Footer from '../src/components/Footer' 

// Routes
import RouteConfig from './utils/routes';

const App = () => {
	const Routes = useRoutes(RouteConfig);
	return (
		<div className='App'>
			<Nav />
			{Routes}
			<Footer/>
		</div>
	);
};
export default App;