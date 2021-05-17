import React from 'react';
import todo from '../assets/imgs/webSc.png';
import quiz from '../assets/imgs/quiz.png';
import cat from '../assets/imgs/project1.png';
import movie from '../assets/imgs/moviemadness.gif';
import weather from '../assets/imgs/jan14.png';
import employee from '../assets/imgs/employee.png';
import '../assets/styles/portfolio.css';

const Portfolio = () => {
    return (
        <div className='port-page'>
            <h2 className='pro-title'>Projects</h2>
            <p className='row'>This has Changed</p>
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='projects col-md-5'>
                    <button className='git-link'><a className='git-link' target='_blank' href='https://github.com/RryanWilsonW/Movie_Madness'>Github Repository</a></button>
                    <button className='git-link'><a className='git-link' target='_blank' href='https://protected-depths-82462.herokuapp.com/login'>Deployed Website</a></button>
                    <img className='project' src={movie} alt='Jiff of Movie Madness application.'/>
                    <p className='hide'>
                        Movie Madness is an application designed to help
                        users find movie trailers with ease. The user is able to 
                        login to the application for a personalized experience.
                        <br/>
                        Languages/Technologies: React, Express, Node, HTML5, CSS3, Bcrypt, Body-Parser, Cors, Handlebars, Passport, Sequelize.
                    </p>
                </div>

                <div className='projects col-md-5'>
                    <button className='git-link'><a className='git-link' target='_blank' href='https://github.com/RryanWilsonW/Exhibiting_Employees'>Github Repository</a></button>
                    <button className='git-link'><a className='git-link' target='_blank' href='https://rryanwilsonw.github.io/Exhibiting_Employees/'>Deployed Website</a></button>
                    <img className='project' src={employee} alt='Screenshot of Exhibing Employees application.'/>
                    <p className='hide'>
                        Exhibiting Employees is a user friendly way of sorting through an employee directory. The application allows the user to
                        either search by name or sort alphabetically. 
                        <br/>
                        Laguages/Technologies: HTML5, CSS3, JavaScript, Axios, Bootstrap, React, React-Router.
                    </p>
                </div>
            </div>

            <div className='row'>
            <div className='col-md-1'></div>
                <div className='projects col-md-5'>
                    <button className='git-link'><a className='git-link' target='_blank' href='https://github.com/hughesthatgirl/adoptable-cats'>Github Repository</a></button>
                    <button className='git-link'><a className='git-link' target='_blank' href='https://hughesthatgirl.github.io/adoptable-/'>Deployed Website</a></button>
                    <img className='project' src={cat} alt='Screenshot of Cat Tinder applicaiton'/>
                    <p className='hide'>
                        Cat Tinder is designed to help users find the cat of their dreams. The application will hive the user choices of cats in their area, 
                        and find compatablity based on the name of the user and cat.
                        <br/>
                        Languages/Technologies: HTML5, CSS3, JavaScript, Jquery, Pet Finder API, Love Calculator API.
                    </p>
                </div>

                <div className='projects col-md-5'>
                    <button className='git-link'><a className='git-link' target='_blank' href='https://github.com/RryanWilsonW/raining-api'>Github Repository</a></button>
                    <button className='git-link'><a className='git-link' target='_blank' href='https://rryanwilsonw.github.io/raining-api/'>Deployed Website</a></button>
                    <img className='project' src={weather} alt='Screenshot of weather application.'/>
                    <p className='hide'>
                    Raining API is a weather app designed to get the current and future weather information of a specific city. 
                    When the user searches for a city, its current weather information is displayed on top of the forecast information. 
                        <br/>
                        Languages/Technologies: HTML5, CSS3, Moment.js, Weather API. 
                    </p>
                </div>
            </div>

            <div className='row'>
            <div className='col-md-1'></div>
                <div className='projects col-md-5'>
                    <button className='git-link'><a className='git-link' target='_blank' href='https://github.com/RryanWilsonW/finding_the_weakest_link'>Github Repository</a></button>
                    <button className='git-link'><a className='git-link' target='_blank' href='https://rryanwilsonw.github.io/finding_the_weakest_link/'>Deployed Website</a></button>
                    <img className='project' src={quiz} alt='Screenshot of coding quiz application.'/>
                    <p className='hide'>
                    Coding Quiz presents the user with a quiz to test their knowledge of computer programming. 
                        <br/>
                        Languages/Technologies: HTML5, CSS3, JavaScript.
                    </p>
                </div>
                <div className='projects col-md-5'>
                    <button className='git-link'><a className='git-link' target='_blank' href='https://github.com/RryanWilsonW/workFlow'>Github Repository</a></button>
                    <button className='git-link'><a className='git-link' target='_blank' href='https://rryanwilsonw.github.io/workFlow/'>Deployed Website</a></button>
                    <img className='project' src={todo} alt='Screenshot of turtle page'/>
                    <p className='hide'>
                    Workflow is an application for the average nine to five employee. With todo planning for your entire workday, this app can help any person become more organized and efficent. 
                        <br/>
                        Languages/Technologies: HTML5, CSS3, JavaScript.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Portfolio;