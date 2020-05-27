import React from 'react'
import ProfileService from '../../../model/services/ProfileService.js';
import { useSelector } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';


const Profile = ( ) => {

    const issuer = 'https://dev-625192.okta.com/oauth2/default';
    const redirectUri = `${window.location.origin}/login`;

    const { authState, authService } = useOktaAuth();

    const logout = async () => {
        const idToken = authState.idToken;
        await authService.logout('/');

        window.location.href = `${issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${redirectUri}`
    }

    return (
        <div>
            <button onClick={() => logout()}>Sign Out</button>
        </div>
    )
}

export default Profile
