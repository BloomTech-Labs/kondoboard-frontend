import React from 'react'
import ProfileService from '@services/ProfileService.js';
import { useSelector } from 'react-redux';
import { selectUser } from '@state/selectors';


const Profile = ( ) => {

        let user = useSelector(selectUser);

    return (
        <div>
            {JSON.stringify(user)}
        </div>
    )
}

export default Profile
