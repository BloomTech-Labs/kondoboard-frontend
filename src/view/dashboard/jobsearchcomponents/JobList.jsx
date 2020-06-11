import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import JobController from '@controllers/JobController.js';
import { selectJobList } from '@state/selectors.js';
import { selectUserQuery } from '@state/selectors.js';

import JobSearch from '../forms/JobSearch.jsx';


import Job from './Job.jsx';

const JobList = () => {
    const jobList = useSelector(selectJobList);
    const queryList = useSelector(selectUserQuery);

    console.log('flag',jobList)
    useEffect(() => {
        JobController.fetchJobsList();
    }, []);

    return(
        <div>
            <h2 style={{display: 'flex', justifyContent: 'space-between'}}>Latest Jobs <JobSearch /></h2> 
            {jobList && jobList.map(job => {
                return <Job job={job} key={job.id} />
            })}
            {queryList && queryList.map(job => {
                return <Job job={job} key={job.id} />
            })}

        </div>
    )
}

export default JobList;