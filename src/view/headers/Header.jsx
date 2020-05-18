import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/selected'>Saved Jobs</Link>
            <Link to='/'>Log Out</Link>
        </div>
    )
}

export default Header;