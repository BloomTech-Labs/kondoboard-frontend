import React from 'react';
import SearchTagged from '../jobsearchcomponents/SearchTagged.jsx';

import JobController from '@controllers/JobController.js';

const AppliedJob = props => {
    const job = props.job;
    const users_jobs_id = job.jobs_id;

    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const dragOver = e => {
        JobController.passTarget(users_jobs_id);
        e.stopPropagation();
    }
    return(
        <div className='draggable'
        id={job.id}
        draggable='true'
        onDragStart={dragStart}
        onDragOver={dragOver}
        >
            <SearchTagged job={job} />
        </div>
    )
}

export default AppliedJob;