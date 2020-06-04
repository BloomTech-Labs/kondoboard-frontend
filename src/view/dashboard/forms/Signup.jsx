import React, { useState } from 'react';
import ProfileController from '../../../controllers/ProfileController';

import { useHistory } from 'react-router-dom';

const Signup = () => {
  const token = window.localStorage.getItem('kondotoken');
  const jwt = require('jsonwebtoken');
  const { email } = jwt.decode(token);
  const history = useHistory();

  // @NOTE: doesn't the token also contain their first and last names?  We
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: email,
  });

  const handleChanges = e => {
    setUser({
      ...user, 
      [e.target.name]: e.target.value
    });
  };

  const submitUser = e => {
    e.preventDefault();
    ProfileController.addNewUser(user);
    history.push('/');
  };

  return (
    <div>
      <form onSubmit={submitUser}>
        <input placeholder='first name' value={user.first_name} onChange={handleChanges} />
        <input placeholder='last name' value={user.last_name} onChange={handleChanges} />
        <button type='submit'>Join Kondoboard</button>
      </form>
    </div>
  );
};

export default Signup;
