import React, { useState, useEffect } from 'react';
import { colors } from '../../../helpers/Colors.js';
import { CaretDownFilled } from '@ant-design/icons';
import { Select } from 'antd';

import { useSelector } from 'react-redux';

import { selectSavedJobList } from '@state/selectors.js';
import { selectJobTags } from '@state/selectors.js';
import { selectUserId } from '@state/selectors.js';

import JobController from '../../../controllers/JobController.js';

import JobHelpers from '../../../helpers/Job.js';
import IdHelpers from '../../../helpers/SavedJobId.js';
import ArrHelpers from '../../../helpers/FilterOutTag.js';
import DupHelpers from '../../../helpers/TagDuplicateChecker.js';

import TagsDisplay from '../savedjobcomponents/TagsDisplay.jsx';

const AddTag = props => {
    const [tag_name, setTag_Name] = useState('');
    const [color, setColor] = useState(null);
    const saved = useSelector(selectSavedJobList)
    const id = useSelector(selectUserId);
    const job = props.job;
    const job_id = job.ds_id || job.id;
    const saved_job = JobHelpers.formatSavedJob(job);
    const savedIds = IdHelpers.filterJobIds(saved)
    const tags = useSelector(selectJobTags);
    const list = DupHelpers.removeDuplicates(tags)
    const notTagged = ArrHelpers.filterOutTag(list, job_id);
    const { Option } = Select;

    function handleValueChange(value) {
        console.log(value)
    }

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
        JobController.addTag(tag_name, id, color, job_id)
        JobController.getJobTags(id)
        setTag_Name("")
        setColor(null)
    }

    return(
        <>
        <form onSubmit={submitTag}>
            <Select defaultValue="+ Add new tag" onChange={handleValueChange}> <CaretDownFilled /> 
                {notTagged && notTagged.map(tag => {
                    return <Option style={{color: `${tag.color}`}} value={tag.tag_name}>{tag.tag_name}</Option>
                })}
            </Select>
            <div>
                <TagsDisplay job={job} />   
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