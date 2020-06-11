import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import JobController from '@controllers/JobController.js';
import {selectJobList} from '@state/selectors.js';

import Job from './Job.jsx';

const JobList = () => {
    const jobList = useSelector(selectJobList);

    useEffect(() => {
        JobController.fetchJobsList();
    }, []);

    return(
        <div>
            <h2>Latest Jobs</h2>
            {jobList && jobList.map(job => {
                if (JSON.stringify(job) === '{}') {} // empty obj, prevents key mapping error
                 else {
                return <Job key={job.id} job={job} />
                }
            })}
        </div>
    )
}

export default JobList;