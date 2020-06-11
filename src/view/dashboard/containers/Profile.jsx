import React from 'react'
import UserInfo from '../forms/UserInfo';
import { useSelector } from 'react-redux';
import { selectUser } from '@state/selectors';

const Profile = ( ) => {

    const user = useSelector(selectUser);
    return (
        <div className='profile'>
           <UserInfo user={user}/>
        </div>
    )
}

export default Profile
