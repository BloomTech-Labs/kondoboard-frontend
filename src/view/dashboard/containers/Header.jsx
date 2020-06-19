/ Core
import React from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd';
import { useLogout } from '@helpers/utils/useLogout';
// Model & Helpers




const Header = ( ) => {

    // Data
    const jwt = require('jsonwebtoken');
    const token = window.localStorage.getItem('kondotoken');
    const payload = jwt.decode(token); // decodes ID Token to pull users name

    // Routing
    const location = useLocation();
    const history = useHistory();

    // Resources
    const logo = require('@images/logo.png');
    const default_pic = require('@images/default-profile.png')
    const logout = useLogout();


    let handleClick = (action) => { // Handles drop down menu clicks
        switch(action) {
            case 'profile':
                if (location.pathname !== '/profile') {
                    history.push('/profile');
                    history.go();
                }
                break;
            case 'home':
                if (location.pathname !=='/') {
                    history.push('/');
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
                <Button type='secondary' onClick={() => handleClick('home')}>Home</Button>
            </Menu.Item>

            <Menu.Item key='1'>
                <Button type='secondary' onClick={() => handleClick('profile')}>Profile</Button>
            </Menu.Item>

            <Menu.Divider/> {/** Only Logout button should go below this, all other menu options above this line */}
                            {/** Change key numbers accordingly, please.*/}

            <Menu.Item key='2'>
                <Button type='danger' onClick={() => handleClick('logout')}>Logout</Button>
            </Menu.Item>
        </Menu>
    )


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