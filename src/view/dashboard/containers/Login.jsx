// Core
import React from 'react'
import { useOktaAuth } from '@okta/okta-react'; 
import { Button } from 'antd';

const icon = require('@images/okta.png');

const Login = () => {
  const { authService } = useOktaAuth();
  const login = () => authService.login('/');

  return (
    <div>
      <Button 
        className='okta-button' 
        type="primary" 
        size={72} 
        onClick={login}
      >
        <img className='okta-logo' src={icon} alt='okta logo'/>
        Sign in With Okta
      </Button>
    </div>
  );
};

export default Login;
