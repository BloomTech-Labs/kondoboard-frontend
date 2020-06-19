import React from 'react';
import { useHistory } from 'react-router-dom';

import LoginController from '@controllers/LoginController.js';
import ProfileController from '@controllers/ProfileController.js';

const UserValidation = () => {

    const history = useHistory();
    const jwt = require('jsonwebtoken');

    const token = jwt.decode(window.localStorage.getItem('kondotoken'));
    
    if (token !== null) {
    const newUser = {
      email: token.email,
      first_name: token.name.split(' ')[0],
      last_name: token.name.split(' ')[1]
    };

    LoginController.userVerification(token.email).then(data => {
      if (!data.location || !data.skills) {
        if (history.location.pathname !== '/profile') {
            // history.push('/profile');
            // history.go();
        }
      }
    }).catch(() => {
      ProfileController.addNewUser(newUser);
    });
    }

    return(null)
}

export default UserValidation;