import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
 
const SideBar = () => {

    const history = useHistory();
    const [to, setTo] = useState(null);

    useEffect(() => {
        setTo(null);
    });

    return(
        <div className='side-bar'>
            {to && <Redirect to={to}/>}
            <h6 className={history.location.pathname === '/' ? 'selected' : ''} onClick={() => setTo('/')}>Search</h6>

            <h6 className={history.location.pathname === '/applied' ? 'selected' : ''} onClick={() => setTo('/applied')}>App Dash</h6>

            <h6 className={history.location.pathname === '/profile' ? 'selected' : ''} onClick={() => setTo('/profile')}>Profile</h6>
        </div>
    )
}

export default SideBar;