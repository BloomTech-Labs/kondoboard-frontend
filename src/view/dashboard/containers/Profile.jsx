import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '@state/selectors';
import UserInfo from '../forms/UserInfo';


const Profile = ( ) => {

        const user = useSelector(selectUser);

    return (
        <div>
           <UserInfo user={user}/>
        </div>
    )
}

export default Profile
