import React from 'react';
import img from '../assets/imgs/prof-pic.jpg';
import '../assets/styles/about.css';
const About = () => {
    return (
        <div className='row about-page'>
            <div className='col-md-6'>
                <div className='intro'>
                    <h2>Hello! My name is Ryan, and I would like to tell you a bit about myself.</h2>
                    <p>
                    I have a strong affiliation with science. From a very young age 
                    I have believed that anything in life can be altered or understood 
                    through experimentation and logic. Programming is a field that 
                    allows you to use problem solving in the most practical ways to 
                    find solutions to old problems, and discover new problems that 
                    we were not aware existed.
                    </p>
                </div>
                <div className='row skills-edu'>
                    <div className='col-md-6'>
                        <h3><strong>Skills</strong></h3>
                        <p className='hover'>HTML5/CSS3</p>
                        <p className='hover'>JavaScript</p>
                        <p className='hover'>Node</p>
                        <p className='hover'>Express</p>
                        <p className='hover'>MySQL/SQL</p>
                        <p className='hover'>MongoDB/Mongoose</p>
                        <p className='hover'>React</p>
                        <p className='hover'>Rest API's</p>
                    </div>
                    <div className='col-md-5 edg'>
                    <h3><strong>Education</strong></h3>
                    <p className='edg'>Full stack coding certificate from Case Western</p>
                    <p className='edg'>Associates of science from LakelandCC</p>
                    <p className='edg'>High School Diploma from Madison High School</p>
                    </div>
                </div>
                
            </div>
            <div className='col-md-5'>
                <img className='profile-pic' src={img} alt="Selfie of myself in a car." id="about-image"/>
            </div>
        </div>
    )
}

export default About;