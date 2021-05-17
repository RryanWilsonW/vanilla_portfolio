import React from 'react';
import '../assets/styles/contact.css';
import linkedin from '../assets/imgs/linkedin4.png';
import github from '../assets/imgs/github4.png';
import twitter from '../assets/imgs/twitter4.png';

const Contact = () => {
    return (
        <div className='contact-page'>
            <h2>Contact Information</h2>
            <div className='row'>
                <p className='col-md-3 icons'></p>
                <a href = 'https://www.linkedin.com/in/ryan-wilson-9287bb1b6/' target='_blank' className='col-md-2'><img className='icons' src={linkedin}/></a>
                <a href = 'https://github.com/RryanWilsonW' target='_blank' className='col-md-2'><img className='icons' src={github}/></a>
                <a href = 'https://twitter.com/ryan79168795' target='_blank' className='col-md-2'><img className='icons' src={twitter}/></a>
            </div>

            <div className='row info'>
                <p className='col-md-12'><strong>Email me at : </strong><a href='mailto:RryanWilsonW@gmal.com'>RryanWilsonW@gmail.com</a></p>
                <p className='col-md-12'>or</p>
                <p className='col-md-12'><strong>Call me at : </strong>(216)-210-7624</p>
            </div>
        </div>
    )
}

export default Contact;