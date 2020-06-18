import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import UserValidation from '@dashboard/profile/UserValidation.jsx';

const SideBar = () => {
    return(
        <>
            <UserValidation />
            <Menu>
                <Menu.Item>
                    <Link to='/'>Search</Link>
                </Menu.Item>
            </Menu>
            <Menu>
                <Menu.Item>
                    <Link to='/applied'>App Dash</Link>
                </Menu.Item>
            </Menu>
            <Menu>
                <Menu.Item>
                    <Link to='/profile'>Profile</Link>
                </Menu.Item>
            </Menu>
        </>
    )
}

export default SideBar;