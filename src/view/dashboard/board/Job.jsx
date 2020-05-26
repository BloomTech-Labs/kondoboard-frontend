import React from 'react';

import JobController from '../../../controllers/JobController';

const Job = props => {
    const job = props.job;

    return(
        <div>
            <p>{job.title}</p>
            <p>{job.description}</p>
            <p>{job.location}</p>
            <p>{job.company}</p>
            <p>{job.estimated_pay}</p>
            <p>{job.post_date}</p>
            <p>{job.skills}</p>
            <p>{job.url}</p>
        </div>
    )
}

export default Job;