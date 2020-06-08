import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

import LoginController from '../../../controllers/LoginController.js';
import ProfileController from '../../../controllers/ProfileController.js';

const UserValidation = () => {
    
    const token = window.localStorage.getItem('kondotoken');
    const jwt = require('jsonwebtoken');
    const {email, name} = jwt.decode(token);
    const nameArr = name.split(' ');


    const [user] = useState({
        email: email,
        first_name: nameArr[0],
        last_name: nameArr[1]
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