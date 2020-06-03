import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

import LoginController from '../../../controllers/LoginController.js';
import ProfileController from '../../../controllers/ProfileController.js';

const UserValidation = () => {
    
    const token = window.localStorage.getItem('kondotoken');
    const jwt = require('jsonwebtoken');
    const email = jwt.decode(token).email;
    const name = jwt.decode(token).name;
    const first_name = name.split(' ')[0];
    const last_name = name.split(' ')[1];

    const [user] = useState({
        email: email,
        first_name: first_name,
        last_name: last_name
    })

    let [infoNeeded, setInfoNeeded] = useState(false);

    useEffect(() => {
        LoginController.userVerification();
        if (!user.id) {
            setInfoNeeded(true);
            ProfileController.addNewUser(user);
            setInfoNeeded(false)
        }
    }, [])
    return(
        <div>
            {infoNeeded && <Redirect to='/profile'/> /**Redirect to profile if user info does not exist */}
        </div>
    )
}

export default UserValidation;