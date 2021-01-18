import React from 'react';
import SocialFollow from "./SocialFollow"

//Styles 
import './Footer.scss'

const Nav = () => {
    return (
        <footer>
            <SocialFollow />
        <div className='footer-container'>
            <p>© Mana Protection Pty Ltd 2020</p>
			<p>Terms &amp; Conditions</p>
        </div>
        </footer>

    )

}
export default Nav