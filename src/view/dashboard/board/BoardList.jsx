import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import JobController from '../../../controllers/JobController.js';
import { selectJobList } from '../../../model/state/jobs/selector.js';

import List from './List';
import BoardView from './BoardContainer.jsx';

const BoardList = () => {
    const jobList = useSelector(selectJobList);

    useEffect(() => {
        JobController.getJobsList();
    }, []);

    return(
        <div>
            <h1>Jobs</h1>
            {!!(jobList && jobList.length) && jobList.map(job => {
                return <List job={job} key={job.id} />
            })}
        </div>
    )
}

export default BoardList;