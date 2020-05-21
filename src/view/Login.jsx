// Core
import React from 'react'
import { useSelector } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react'; 
import { Button } from 'antd';

// Model && Helpers
import LoginController from '../controllers/LoginController';
import { Providers } from '../model/services/LoginService';

const icon = require('../_images/okta.png');

const Login = () => {
    const { authService } = useOktaAuth();
    const login = () => authService.login('/')

    return (

        <div>
            <Button className='okta-button' type="primary" size={72} onClick={login}><img className='okta-logo' src={icon} alt='okta logo'/>Sign in With Okta</Button>
        </div>
    )
}

export default Login
