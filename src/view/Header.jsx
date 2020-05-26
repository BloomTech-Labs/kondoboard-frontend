import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const jwt = require('jsonwebtoken');

const Header = ( ) => {
    const token = window.localStorage.getItem('kondotoken');
    const payload = jwt.decode(token);
    const location = useLocation();
    const icon = require('../_images/logo.png');

    console.log(payload)

    return (
        <div className='header'>
            <div className='logo'>
            <img src={icon} alt='KondoBoard Logo'/>
            <p>KondoBoard</p>
            </div>
            {
            location.pathname !== '/login' && payload &&
                <div className='user'>
                    <p>{payload.name}</p>
                </div>
            }
        </div>
    )
}

export default Header
