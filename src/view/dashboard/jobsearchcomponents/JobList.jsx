import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import JobController from '@controllers/JobController.js';
import { selectJobList } from '@state/selectors.js';
import { selectUserQuery } from '@state/selectors.js';

import JobSearch from '@dashboard/forms/JobSearch.jsx';
import SearchTagged from './SearchTagged.jsx';

const JobList = ({ currentJob, setCurrentJob }) => {
    const jobList = useSelector(selectJobList);
    const queryList = useSelector(selectUserQuery);

    useEffect(() => {
        JobController.fetchJobsList();
    }, []);

    return(
        <div className='job-list'>
            <JobSearch />

            {queryList && queryList.map(job => {
                return <SearchTagged job={job} key={job.id} currentJob={currentJob} setCurrentJob={setCurrentJob} />
            })}
            {jobList && jobList.map(job => {
                return <SearchTagged job={job} key={job.id} currentJob={currentJob} setCurrentJob={setCurrentJob} />
            })}

        </div>
    )
}

export default JobList;