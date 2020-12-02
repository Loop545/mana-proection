import Recat, { Component } from 'react';
import { Route, NavLink, HashRouter} from "react-router-dom";

//Styles 
import '../src/App.scss'

//Routes
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Services from '../src/pages/Services'
import Contact from '../src/pages/Contact'
import Gallary from '../src/pages/Gallary'

class App extends Component {
  render () {
    return (
      <div className='nav-container'>
          <HashRouter>
              <div>
              
              <ul className="nav">
                  <li><NavLink to='/'>Home</NavLink></li>
                  <li><NavLink to='/About'>About</NavLink></li>
                  <li><NavLink to='/Services'>Services</NavLink></li>
                  <li><NavLink to='/Contact'>Contact</NavLink></li>
                  <li><NavLink to='/Gallary'>Gallary</NavLink></li>
              </ul>
              <div className="path">
                  <Route exact path='/' component={Home}/>
                  <Route path='/About' component={About}/>
                  <Route path='/Services' component={Services}/>
                  <Route path='/Contact' component={Contact}/>
                  <Route path='/Gallary' component={Gallary}/>
              </div>
              </div>
          </HashRouter>
      </div>
   )
  
  }
  
}

export default App;