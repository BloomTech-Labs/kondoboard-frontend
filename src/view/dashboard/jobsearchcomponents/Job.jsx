import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';

import { selectUserId } from '@state/selectors.js';
import { useSelector } from 'react-redux';
import JobController from '@controllers/JobController';
import JobHelpers from '../../../helpers/Job.js';

const Job = props => {
    const job = props.job;
    const saved_job = JobHelpers.formatSavedJob(job);
    const status = 'favorite';
    const id = useSelector(selectUserId)
    
    const addToSaved = e => {
        e.preventDefault();
        JobController.addSavedJob(id, saved_job, status);
        JobController.fetchSavedJobList(id);
    }

    return(
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)'}}>
            <p>{job.title}</p>
            <p>{job.company}</p>    
            <p>{job.location_city}</p>  
            <p>{job.date_published}</p>
            {/* {(job.id === saved_job.ds_id) ? <CheckOutlined /> : <span onClick={addToSaved}><PlusCircleOutlined /></span>} */}
            <span onClick={addToSaved}><PlusCircleOutlined /></span>
        </div>
    )
}

export default Job;