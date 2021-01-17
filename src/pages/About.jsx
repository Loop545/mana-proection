import React from 'react';
import Sharkclip from '../components/video/shark.mp4'

//Styles 
import '../pages/About.scss'



const  About = () => {
    return (
       <div className="about-container">
          <div className="about-content">
              <div className="text-area">
              <h1>About us</h1>
              <p>In Fijian mythology, Dakuwaqa (Dakuwanga) is a shark-god.[1] He was greatly respected by fishermen[2] because he protected them from any danger at sea[3] and sometimes protected them from evil denizens of the sea.[4]
                He was once going inland to conquer Kadavu Island[5] through the river when another goddess[6] challenged him in the form of an octopus.[7] After a great battle, the octopus won by pulling out his teeth with her 8 arms which enabled her to hold off the massive attack of Dakuwaqa, forcing Dakuwaqa to promise to never attack Kadavu again. That is how Dakuwaqa became the god and protector of Kadavu. Dakuwaqa can also change shape into anything, but his real form is that of a muscular Fijian man with the upper torso of a shark.[8]</p>
                </div>
          </div>
           <video autoPlay loop muted
           style={{
                //position:'absolute',
                width:'100%',
                left:'50%',
                top:'50%',
                objectFit:'cover',
                //transform:'translate(-50%, -50%)',
                zIndex:'-1',

           }}
           >
                <source src={Sharkclip} type='video/mp4'/>
           </video>
           
          
       </div>
    )
}
export default About;

   

