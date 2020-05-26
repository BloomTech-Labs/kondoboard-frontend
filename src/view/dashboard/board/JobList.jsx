import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';

import JobController from '../../../controllers/JobController.js';
import {selectJobList} from '../../../model/state/jobs/selector.js';

import Job from './Job';

const JobList = () => {
    const jobList = useSelector(selectJobList);

    useEffect(() => {
        JobController.fetchJobsList();
    }, [])

    return (
        <div>
            {!!(jobList && jobList.length) && jobList.map(job => {
                return <Job job={job} key={job.id} />
            })}
        </div>
    )
}

export default JobList;