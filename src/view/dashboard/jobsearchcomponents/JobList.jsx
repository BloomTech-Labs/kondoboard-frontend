import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import JobController from '@controllers/JobController.js';
import { selectJobList } from '@state/selectors.js';
import { selectUserQuery } from '@state/selectors.js';

import JobSearch from '@dashboard/forms/JobSearch.jsx';
import SearchTagged from './SearchTagged.jsx';

const JobList = () => {
    const jobList = useSelector(selectJobList);
    const queryList = useSelector(selectUserQuery);

    useEffect(() => {
        JobController.fetchJobsList();
    }, []);

    return(
        <div>
            <Link to='/'>Results</Link><Link to='/saved'> Tagged</Link>
            <JobSearch />
            {queryList && queryList.map(job => {
                return <SearchTagged job={job} key={job.id} />
            })}
            {jobList && jobList.map(job => {
                return <SearchTagged job={job} key={job.id} />
            })}

        </div>
    )
}

export default JobList;