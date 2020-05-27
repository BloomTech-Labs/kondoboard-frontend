import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import JobController from '../../../controllers/JobController.js';
import {selectJobList} from '../../../model/state/selectors.js';

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
                return <Job job={job} key={job.id} />
            })}
        </div>
    )
}

export default JobList;