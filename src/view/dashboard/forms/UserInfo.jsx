import React, { useState, useEffect } from 'react'
import { Button } from 'antd';

import ProfileController from '@controllers/ProfileController';
import UserTrack from '@dashboard/profile/UserTrack';
import UserRemote from '@dashboard/profile/UserRemote';
import UserSkills from '@dashboard/profile/UserSkills';
import UserLocations from '@dashboard/profile/UserLocations';
import Spinner from '@helpers/Spinner';

const UserInfo = ({user}) => {

    const [form, setForm] = useState({
        user_track: user.user_track || '',
        display_track: user.display_track || '',
        cities: user.cities || [],
        states: user.states || [],
        skills: user.skills || [],
        remote: user.remote === 1 ? true : false
    });
    const [err, setErr] = useState({
        trackErr: form.user_track === '' ? true : false,
        skillsErr: form.skills.length === 0 ? true : false,
        locationErr: form.cities.length === 0 ? true : false
    });

    useEffect(() => {
        setForm({
            user_track: user.user_track || '',
            display_track: user.display_track || '',
            cities: user.cities || [],
            states: user.states || [],
            skills: user.skills || [],
            remote: user.remote === 1 ? true : false
        });
    }, [user]);

    useEffect(() => {
        setErr({
            trackErr: form.user_track === '' ? true : false,
            skillsErr: form.skills.length === 0 ? true : false,
            locationErr: form.cities.length === 0 ? true : false
        });
    },[form.cities.length, form.skills.length, form.user_track]);


    let submitAll = (e) => {
        e.preventDefault();
        ProfileController.updateUser(form, user.id).catch(err => {
            console.log(err);
        });
    }


    return (
        <>
        {user.first_name === undefined && <Spinner />}
        {user.first_name !== undefined && 
        <div className='user-box'>
        <h1>{user && `${user.first_name} ${user.last_name}`}</h1>

        <div className='user-form'>
        <UserTrack form={form} setForm={setForm} />
        {form.user_track === '' && <p className='err'>Please Select a Track</p>}

        <UserSkills form={form} setForm={setForm} user={user} />
        {form.skills.length === 0 && <p className='err'>Please Add Skills</p>}

        <UserLocations form={form} setForm={setForm} user={user} />
        {form.cities.length === 0 && <p className='err'>Please Add Locations</p>}

        <UserRemote form={form} setForm={setForm} />

        <div className='field-container'>
            <Button className='submit-all' disabled={err.locationErr || err.skillsErr || err.trackErr ? true : false} onClick={submitAll}>Submit</Button>
        </div>

        </div> {/* user-form */}
    </div>} {/* user-box */}
    </>
    )
}

export default UserInfo
