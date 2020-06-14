import React, { useState } from 'react';
import { colors } from '../../../helpers/Colors.js';
import { useSelector } from 'react-redux';

import { selectSavedJob } from '../../../model/state/selectors.js';
import { selectJobTags } from '@state/selectors.js';
import JobController from '../../../controllers/JobController.js';

const AddTag = () => {
    const [name, setName] = useState('');
    const [color, setColor] = useState(null);
    const jobs_id = useSelector(selectSavedJob).jobs_id;
    const existingTags = useSelector(selectJobTags)

    const enterTag = e => {
        setName(e.target.value)
    }

    const tags = {jobs_id, name, color}

    const enterColor = e => {
        setColor(e.target.style.backgroundColor)
    }

    const submitTag = e => {
        e.preventDefault();
        JobController.addTag(tags)
        JobController.getJobTags()
        setName("")
        setColor(null)
    }

    return(
        <>
        <form onSubmit={submitTag}>
            <h2>+ Add new tag</h2>
            {/* <div>
                {tags && tags.map(color => {
                    return <div style={{background: `${color}`, height: '20px', width: '20px'}}></div>
                })}   
            </div> */}
            <h3>Tag name:</h3>
            <input
                placeholder='Add a tag'
                name='name'
                label='name'
                value={name}
                id='name'
                type='text'
                onChange={enterTag}
            />
            <div style={{display: 'flex', flexWrap: 'wrap', width: '40%'}}>
                {colors.map(color => {
                    return <div onClick={enterColor} style={{borderRadius: '50%', margin: '2%', width: '20px', height: '20px', background: `${color}`}}></div>
                })}
            </div>
            <button type='submit' onClick={submitTag}>Save</button>
        </form>
        </>
    )
}

export default AddTag;