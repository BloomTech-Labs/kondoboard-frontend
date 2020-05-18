import React from 'react';

import JobController from '../../../controllers/JobController.js';

const JobList = props => {
    const job = props.job;

    return (
        <div>
            <p>{job}</p>
        </div>
    )
}

export default JobList;