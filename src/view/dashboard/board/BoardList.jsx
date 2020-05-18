import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import JobController from '../../../controllers/JobController.js';
import { selectJobList } from '../../../model/state/jobs/selector.js';

import JobList from './JobList';

const BoardList = () => {
    const jobList = useSelector(selectJobList);

    useEffect(() => {
        JobController.fetchJobsList();
    }, []);

    return(
        <div>
            <h2>Latest Jobs</h2>
            {!!(jobList && jobList.length) && jobList.map(job => {
                return <JobList job={job} key={job.id} />
            })}
        </div>
    )
}

export default BoardList;