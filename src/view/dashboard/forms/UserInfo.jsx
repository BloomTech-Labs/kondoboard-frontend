import React, { useState, useEffect } from 'react'
import { Button } from 'antd';

import ProfileController from '@controllers/ProfileController';
import UserTrack from '@dashboard/profile/UserTrack';

const UserInfo = ({user}) => {


    const [editting, setEditting] = useState('');
    const [form, setForm] = useState({
        user_track: user.user_track || '',
        locations: user.locations || [],
        skills: user.skills || [],
        remote: user.remote === 1 ? true : false
    });

    useEffect(() => {
        setForm({
            user_track: user.updateUser || '',
            locations: user.locations || [],
            skills: user.skills || [],
            remote: user.remote === 1 ? true : false
        })
    }, [user]);


    let addLocation = (e) => {
        e.preventDefault();
        let duplicate = false;
        form.locations.forEach(location => {
            if (location === e.target[0].value) {
                duplicate = true;
            }
        });
        duplicate === false ?
        setForm({...form, locations: [...form.locations, e.target[0].value]})
        :
        window.alert(`${e.target[0].value} Already Added`);
        e.target.reset();
    }

    let removeLocation = (e) => {
        e.preventDefault();
        let newLocations = form.locations.filter(loc => {
            return loc !== e.target.value;
        });
        setForm({...form, locations: newLocations});
    }

    let addSkill = (e) => {
        e.preventDefault();
        let duplicate = false;
        form.skills.forEach(skill => {
            if (skill === e.target[0].value) {
                duplicate = true;
            }
        });
        duplicate === false ?
        setForm({...form, skills: [...form.skills, e.target[0].value]})
        :
        window.alert(`${e.target[0].value} Already Added`);
        e.target.reset();
    }

    let removeSkill = (e) => {
        e.preventDefault();
        let newSkills = form.skills.filter(skill => {
            return skill !== e.target.value;
        });
        setForm({...form, skills: newSkills});
    }

    let toggleRemote = (e) => {
        setForm({...form, remote: !form.remote});
    }
    let submitAll = (e) => {
        e.preventDefault();
        ProfileController.updateUser(form, user.id).catch(err => {
            console.log(err);
        });
    }


    return (
    <div className='user-box'>
        <h1>{user && `${user.first_name} ${user.last_name}`}</h1>

        <div className='user-form'>
            {JSON.stringify(user)}<br/>
            {JSON.stringify(form)}<br/><br/>

        <UserTrack form={form} setForm={setForm} />

            <div className='field-container'>
                <span>Locations: </span>
                    <Button className='add' type='primary' size='small' disabled={editting === 'locations'} onClick={() => setEditting('locations')}>Add</Button>
                    {form.locations && form.locations.map(location => (
                    <div key={location}>
                        <p>{location}<button value={location} onClick={removeLocation}>X</button></p>
                    </div>
                    ))}
                    
                {form.locations.length === 0 && <p className='err'>Please Add Locations. i.e: Austin, TX</p>}

                {editting === 'locations' && 
                    <form onSubmit={addLocation}>
                        <input required={true} type='text' placeholder='Austin, Tx'/>
                        <button className='confirm' type='submit'>Confirm</button>
                        <button className='done' onClick={() => setEditting('')}>Done</button>
                    </form>
                }
            </div>

        <div className='field-container'>
            <span>Skills: </span>
                <Button className='add' type='primary' size='small' disabled={editting === 'skills'} onClick={() => setEditting('skills')}>Add</Button>
                {form.skills && form.skills.map(skill => (
                <div key={skill}>
                    <p>{skill}<button value={skill} onClick={removeSkill}>X</button></p>
                </div>
                ))}

            {form.skills.length === 0 && <p className='err'>Please Add Skills. i.e: Javascript</p>}

            {editting === 'skills' && 
                <form onSubmit={addSkill}>
                    <input required={true} type='text' placeholder='Javascript'/>
                    <button className='confirm' type='submit'>Confirm</button>
                    <button className='done' onClick={() => setEditting('')}>Done</button>
                </form>
            }
        </div>



            <p>willing to work Remote?</p>
            <input type='radio' name='yes' value='Yes' checked={form.remote} onChange={toggleRemote}/>
            <label htmlFor='yes'>Yes</label>
            <input type='radio' name='No' value='No' checked={!form.remote} onChange={toggleRemote}/>
            <label htmlFor='no'>No</label>

        </div> {/* user-form */}

    </div> /* user-box */
    )
}

export default UserInfo
