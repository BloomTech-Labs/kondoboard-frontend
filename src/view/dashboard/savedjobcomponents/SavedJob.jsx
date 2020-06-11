import React from 'react';

import JobController from '@controllers/JobController.js';

const SavedJob = props => {
    const job = props.job;

    const selectJob = e => {
        e.preventDefault();
        JobController.selectJob(job)
    }
    return(
        <div onClick={selectJob} style={{ background: 'pink', borderRadius: '5%'}}>
            <p>{job.title}</p>
            <p>Company: {job.company}</p>    
            <p>Location: {job.location_city}, {job.location_state}</p> 
            <p>Date Posted: {job.date_published}</p>
        </div>
    )
} 

export default SavedJob;
