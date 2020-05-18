import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const LoginForm = () => {
    const history = useHistory();
    const classes = useStyles();
    const login = () => {
        history.push('/dashboard')
    }
    return(
        <div>
            <form className={classes['login-form']}>
                <div className={classes['user-login']}>
                    <input placeholder='username' />
                    <input placeholder='password' />
                    <button onClick={login}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;