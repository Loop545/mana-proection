import React from 'react';
import { Link } from 'raviger';

//Styles 
import '../pages/Home.scss'


const  Home = () => {
    return (
        <>
            <header className='header-container'>
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
            </header>  
        </>
    )

}
export default Home;