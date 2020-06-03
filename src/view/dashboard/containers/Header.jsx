// Core
import React, { useState, useEffect } from 'react'
import { useLocation, Redirect } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd';
import { useSelector } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';

// Model & Helpers
import { selectHistory } from '@state/selectors';



const Header = ( ) => {

    // Data
    const jwt = require('jsonwebtoken');
    const token = window.localStorage.getItem('kondotoken');
    const payload = jwt.decode(token); // decodes ID Token to pull users name

    // Routing
    const location = useLocation();
    const history = useSelector(selectHistory);

    // Resources
    const logo = require('@images/logo.png');
    const default_pic = require('@images/default-profile.png')
    
    // Auth
    const { authState, authService } = useOktaAuth();
    const issuer = 'https://dev-625192.okta.com/oauth2/default';
    const redirectUri = `${window.location.origin}/login`;

    const logout = async () => {
        const idToken = authState.idToken;
        await authService.logout('/');

        window.location.href = `${issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${redirectUri}`
    }

    let handleClick = (action) => { // Handles drop down menu clicks
        switch(action) {
            case 'profile':
                if (location.pathname !== '/profile') {
                    history.push('/profile');
                    history.go();
                }
                break;
            case 'logout':
                logout();
                break;
                default:
                    break;
        }
    }

    const menu = (
        <Menu>
            <Menu.Item key='0'>
                <Button type='secondary' onClick={() => handleClick('profile')}>Profile</Button>
            </Menu.Item>
            
            <Menu.Divider/> {/** Only Logout button should go below this, all other menu options above this line */}
                            {/** Change key numbers accordingly, please.*/}

            <Menu.Item key='1'>
                <Button type='danger' onClick={() => handleClick('logout')}>Logout</Button>
            </Menu.Item>
        </Menu>
    )

    console.log(payload)

    return (
        <div className='header'>
            <div className='logo'>
            <img src={logo} alt='KondoBoard Logo'/>
            <p>KondoBoard</p>
            
            </div>
            {
            location.pathname !== '/login' && payload &&
                <div className='user'>
                    <p>{payload.name}</p>
                    <Dropdown overlay={menu} trigger={['click']}>
                    <img src={default_pic} alt='Profile Pic' onClick={e => e.preventDefault()}/>
                    </Dropdown>
                </div>
            }
        </div>
    )
}

export default Header
