import React from 'react';
import { useRoutes } from 'raviger';

//Styles 
import '../src/App.scss'

//pages
import Contact from './pages/Contact';

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
			<Contact />
			<Footer/>
		</div>
	);
};
export default App;