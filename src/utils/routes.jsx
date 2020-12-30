// Externals
import React from 'react';

//Routes
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Gallary from '../pages/Gallary'

// Routes
const Routes = {
	'/': () => <Home />,
	'/home': () => <Home />,
	'/about': () => <About />,
	'/services': () => <Services />,
	'/contact': () => <Contact />,
	'/gallary': () => <Gallary />,
};

// Export
export default Routes;