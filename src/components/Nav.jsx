import React from 'react';
import { Link } from 'raviger';

//Styles 
import './Nav.scss'


const  Nav = () => {
    return (
        <div className='nav-container'>
                        
            <nav className="nav">
                <div className="logo">
                <h1> Mana Protection </h1>
                </div>
            
                <ul >
                    <li><Link href='/Home'>Home</Link></li>
                    <li><Link href='/About'>About</Link></li>
                    <li><Link href='/Services'>Services</Link></li>
                    <li><Link href='/Contact'>Contact</Link></li>
                    <li><Link href='/Gallary'>Gallary</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
