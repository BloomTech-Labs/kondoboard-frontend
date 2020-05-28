import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { selectSavedJob } from '@state/selectors.js';
import { useSelector } from 'react-redux';
import JobController from '../../../controllers/JobController';

const Job = props => {
    const job = props.job;
    const saveJob = useSelector(selectSavedJob);
    const addToSaved = e => {
        e.preventDefault();
        JobController.addSavedJob(saveJob);
    }

    return(
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', width: '150%'}}>
            <p>{job.title}</p>
            <p>{job.company}</p>    
            <p>{job.location_city}</p>  
            <p>{job.date_published}</p>
            <span onClick={addToSaved}><PlusCircleOutlined /></span>
        </div>
    )
}

export default Job;