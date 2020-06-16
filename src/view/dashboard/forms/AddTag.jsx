import React, { useState, useEffect } from 'react';
import { colors } from '../../../helpers/Colors.js';
import { useSelector } from 'react-redux';

import { selectSavedJobList } from '@state/selectors.js';

import { selectUserId } from '@state/selectors.js';

import JobController from '../../../controllers/JobController.js';

import JobHelpers from '../../../helpers/Job.js';
import IdHelpers from '../../../helpers/SavedJobId.js';

const AddTag = props => {
    const [tag_name, setTag_Name] = useState('');
    const [color, setColor] = useState(null);
    const saved = useSelector(selectSavedJobList)
    const id = useSelector(selectUserId);
    const job = props.job;
    const saved_job = JobHelpers.formatSavedJob(job);
    const savedIds = IdHelpers.filterJobIds(saved)

    const enterTag = e => {
        setTag_Name(e.target.value)
    }

    const enterColor = e => {
        setColor(e.target.style.backgroundColor)
    }

    useEffect(() => {
        JobController.fetchSavedJobList(id);
    }, [])

    const submitTag = e => {
        e.preventDefault();
        {savedIds.includes(job.ds_id || job.id) ? JobController.getJobTags() : JobController.addSavedJob(id, saved_job)}
        JobController.addTag(tag_name, id, color)
        JobController.getJobTags(id)
        setTag_Name("")
        setColor(null)
    }

    return(
        <>
        <form onSubmit={submitTag}>
            <h2>+ Add new tag</h2>
            <div>
                {/* {tags && tags.map(color => {
                    return <div style={{background: `${color}`, height: '20px', width: '20px'}}></div>
                })}    */}
            </div>
            <h3>Tag name:</h3>
            <input
                placeholder='Add a tag'
                name='tag_name'
                label='tag_name'
                value={tag_name}
                id='tag_name'
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