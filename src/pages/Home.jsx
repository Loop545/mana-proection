import React from 'react';
import { Link } from 'raviger';

//Styles 
import '../pages/Home.scss'


const  Home = () => {
    return (
        <>
            <header className='header-container'>
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
            </header>
                <div className='title-container'>
                    <p className='border-text'>
                        Dakuwaqa <br></br> Services
                    </p>
                    <p className='service-text'> Safety | Logistics | Protection </p>
                </div>
                <div className='services-container'>
                    <title className='services-title'>
                        Our Services
                    </title>
                </div>
            
         
        </>
    )

}
export default Home;