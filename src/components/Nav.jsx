import React from 'react';
import { Link } from 'raviger';

//Styles 
import './Nav.scss'



const  Nav = () => {
    
    return (
        <div className='nav-container'>
                        
            <nav className="nav" role="custom-dropdown">
                <div className="logo">
                <h1> Mana Protection </h1>
                </div>
                <input type="checkbox" id="button"/>
                    <label for="button" onclick></label>
                <ul >
                    <li><Link href='/Home'>Home</Link></li>
                    <li><Link href='/About'>About</Link></li>
                    <li><Link href='/Services'>Services</Link></li>
                    <li><Link href='/Contact'>Contact</Link></li>
                    <li><Link href='/Gallary'>Gallary</Link></li>
                </ul>
                {/* <select onchange="if (this.value) window.location.href = this.value;" className="responsiv-nav">
                    <option value="/Home">Home<a href='/Home'>Home</a></option>
                    <option value="/About">About</option>
                    <option value="/Services">Services</option>
                    <option value="#">Contact</option>
                    <option value="#">Gallary</option>
                </select> */}
            </nav>
        </div>
    )
}

export default Nav;
