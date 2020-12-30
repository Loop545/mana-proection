import React from 'react';
import { Link } from 'raviger';

//Styles 
import '../pages/Home.scss'

//Statics
import first from '../statics/img1.jpg'
import second from '../statics/img2.png'
import third from '../statics/img3.jpg'


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
            <div className='services-container'>
                <h1 className='title'>
                    Our Services
                </h1>

                <div className='services-content'>
                    <div className='content'>
                        <div className='image'>
                            <img src={first} alt='private protection'></img>
                        </div>
                        <div className='description'>
                            <h1 className='description-title'>Private Protection</h1>
                            <p> We specalize on giving our customers the feeling of being secure and able to trust us.<br/>
                                Our agents are highly trained and specilised in providing close personal protection.
                            </p>
                            
                            <Link href='/Services'>
                                <button  label='More' >
                                More</button>
                            </Link>

                        </div> 
                    </div>
                    <div className='content'>
                        
                        <div className='description'>
                            <h1 className='description-title'>Personal Driver</h1>
                            <p> We specalize on giving our customers the feeling of being secure and able to trust us.
                                <br/>Our agents are highly trained and specilised in providing close personal protection.
                            </p>
                                <Link href='/Services'>
                                    <button  label='More' >
                                    More</button>
                                </Link>
                        </div> 
                        <div className='image'>
                            <img src={second} alt='personal driver'></img>
                        </div>
                        
                    </div>
                    <div className='content'>
                        <div className='image'>
                            <img src={third} alt='event security'></img>
                        </div>
                        <div className='description'>
                            <h1 className='description-title'>Event Security</h1>
                            <p> We specalize on giving our customers the feeling of being secure and able to trust us.<br/>
                                Our agents are highly trained and specilised in providing close personal protection.</p>
                                    <Link href='/Services'>
                                    <button  label='More' >
                                    More</button>
                                </Link>
                        </div> 
                        
                    </div>
                </div>
            </div>
            
        </>
    )

}
export default Home;