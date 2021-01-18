// Externals
import React, { useRef, useState, useEffect } from 'react';

// Handle the email
import { postMessage } from '../utils/async';

// Styles
import './Contact.scss';

// Contact component
const Contact = () => {
	const [emailSent, setEmailSent] = useState(false);
	const [formHeight, setFormHeight] = useState(null);
	const contactForm = useRef(null);

	useEffect(() => {
		setFormHeight(contactForm.current.offsetHeight);
	}, []);

	const handleFormSubmit = e => {
		const params = {
			firstname: contactForm.current.firstname.value,
			lastname: contactForm.current.lastname.value,
			email: contactForm.current.email.value,
			message: contactForm.current.message.value,
		};

		postMessage(params, (result) => {
			setEmailSent(result === true);
		});

		e.preventDefault();
	};

	return (
			<div id='contact' className='contact'>

				<form ref={contactForm} className="contact-form" style={{ height: formHeight || 'auto' }} noValidate>

					<h2>Contact</h2>

					{emailSent ? (<div className="contact-form-thankyou">
						<h3><strong>Thank you for your enquiry.</strong></h3>
						<h3>If urgent, please call <a href='tel:+61 452510182'>+61 452 510 182</a></h3>
					</div>) :
						(<>
							<h3><strong>Let's chat. </strong>Call <a href='tel:+61 452 510 182'>+61 452 510 182</a></h3>
							<input type="text" name="firstname" placeholder="First name" />
							<br />
							<input type="text" name="lastname" placeholder="Last name" />
							<br />
							<input type="email" name="email" placeholder="Email" />
							<br />
							<textarea rows="5" name="message" placeholder="Message" />
							<br />
							<br />
							<input type="submit" value="Send" onClick={handleFormSubmit} />
						</>)}

				</form>

				<div className='contact-details'>

					<div className='contact-address-block'>

						<div>

							<h2>Address</h2>
							<p>Suite 11, 207 Great North Road<br />Five Dock<br />Sydney, NSW 2046</p>
							<br />

							<h2>Opening Hours</h2>
							<p>Monday to Sunday<br />10am - 7pm</p>
							<br />

							<h2>Phone</h2>
							<p>+61 2 9712 3309</p>

						</div>

					</div>


				</div>
			</div>
		
	);
};

export default Contact;
