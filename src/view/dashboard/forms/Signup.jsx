import React, {useState} from 'react';
import LoginController from '../../../controllers/LoginController';
import ProfileController from '../../../controllers/ProfileController';

import { useHistory } from 'react-router-dom';

const Signup = () => {
    const token = window.localStorage.getItem('kondotoken');
    const jwt = require('jsonwebtoken');
    const history = useHistory();

    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: jwt.decode(token).email
    })

    const handleChanges = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submitUser = e => {
        e.preventDefault();
        ProfileController.addNewUser(user);
        history.push('/');
    }
    return(
        <div>
            <form onSubmit={submitUser}>
                <input placeholder='first name' value={user.first_name} onChange={handleChanges} />
                <input placeholder='last name' value={user.last_name} onChange={handleChanges} />
                <button type='submit'>Join Kondoboard</button>
            </form>
        </div>
    )
}

export default Signup;