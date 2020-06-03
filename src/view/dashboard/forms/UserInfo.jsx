import React, { useState, useEffect } from 'react'

import ProfileController from '@controllers/ProfileController';

const UserInfo = ({user}) => {

    let [form, setForm] = useState({
        user_track:  user.user_track === null ? '' : user.user_track,
        locations: user.locations === null ? [] : user.locations,
        skills: user.skills === null ? [] : user.skills,
        remote: user.remote === 1 ? true : false

    });

    let handleChange = (e) => {
        setForm({...form, user_track: e.target.value});
    }

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
        <div>
            <form onSubmit={submitAll}>
                <input type='text' placeholder={form.user_track === null ? 'Track' : form.user_track} id='track' onChange={handleChange}/>
                <button type='submit'>Submit</button>
            </form>
            <form onSubmit={addLocation}>
                <input required={true} type='text' placeholder='Locations' id='locations'/>
                <button type='submit'>Add Location</button>
                <div>
                {form.locations && form.locations.map(location => (
                <div key={location}>
                <p>{location}<button value={location} onClick={removeLocation}>X</button></p>
                </div>
            ))}</div>
            </form>
            <form onSubmit={addSkill}>
                <input required={true} type='text' placeholder='skills' id='skills'/>
                <button type='submit'>Add Skill</button>
                {form.skills && form.skills.map(skill => (
                    <div key={skill}>
                    <p>{skill}<button value={skill} onClick={removeSkill}>X</button></p>
                    </div>
                ))}
            </form>
            <p>willing to work Remote?</p>
            <input type='radio' name='yes' value='Yes' checked={form.remote} onChange={toggleRemote}/>
            <label for='yes'>Yes</label>
            <input type='radio' name='No' value='No' checked={!form.remote} onChange={toggleRemote}/>
            <label for='no'>No</label>

        </div>
    )
}

export default UserInfo
