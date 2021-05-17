import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/header.css';

const Header = () => {
    return (
        <header className='header row'>
            <h1 className='col-md-6 name'>Ryan Wilson</h1>
            <Link className='link col-md-2' to='/'>
                <button className='link'>About</button>
            </Link>
            <Link className='link col-md-2' to='/portfolio'>
                <button className='link'>Portfolio</button>
            </Link>
            <Link className='link col-md-2' to='/contact'>
                <button className='link'>Contact</button>
            </Link>

        </header>
    )
}

export default Header;