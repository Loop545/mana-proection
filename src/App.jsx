import React, { Component } from 'react';
import { useRoutes } from 'raviger';

//Styles 
import '../src/App.scss'

// Routes
import RouteConfig from './utils/routes';

const App = () => {
	const Routes = useRoutes(RouteConfig);
	return (
		<div className='App'>
			{Routes}
		</div>
	);
};

// class App extends Component {
//   render () {
//     return (
//       <header className='header-container'>
//         <div className='nav-container'>
//             <HashRouter>
//                 <nav className="nav">
//                   <div className="logo">
//                   <h1> Mana Protection </h1>
//                   </div>
                
//                 <ul >
//                     <li><NavLink to='/Home'>Home</NavLink></li>
//                     <li><NavLink to='/About'>About</NavLink></li>
//                     <li><NavLink to='/Services'>Services</NavLink></li>
//                     <li><NavLink to='/Contact'>Contact</NavLink></li>
//                     <li><NavLink to='/Gallary'>Gallary</NavLink></li>
//                 </ul>
//                 <div className="path">
//                     <Route exact path='/Home' component={Home}/>
//                     <Route path='/About' component={About}/>
//                     <Route path='/Services' component={Services}/>
//                     <Route path='/Contact' component={Contact}/>
//                     <Route path='/Gallary' component={Gallary}/>
//                 </div>
//                 </nav>
//             </HashRouter>
//         </div>
//         </header>
//    )
  
//   }
  
// }

export default App;