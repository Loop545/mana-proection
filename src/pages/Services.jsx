import React from 'react';

//Styles 
import '../pages/Services.scss'

//statics
import Cover from '../statics/services.jpg'



const  Services = () => {
    return (
       <div className='main-container'>
           <img classname="header-image" src={Cover}
           style= {{
                width:'100%',
                height:'550px',
                left:'50%',
                top:'50%',
                objectFit:'cover',
                zIndex:'-1',
             }}>
              
           </img>
       </div>
    )
}
export default Services;