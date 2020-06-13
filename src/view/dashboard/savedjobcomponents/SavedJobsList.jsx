import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

import JobController from '@controllers/JobController.js';
import {selectSavedJobList} from '@state/selectors.js';
import {selectUserId} from '@state/selectors.js';

import { useLocation } from 'react-router-dom';

import SavedJob from './SavedJob.jsx';

const SavedJobList = () => {
    const savedJobList = useSelector(selectSavedJobList);
    const id = useSelector(selectUserId)
    const location = useLocation();

    useEffect(() => {
        JobController.fetchSavedJobList(id);
    }, []);

    return(
        <div>
            <Link to='/'>Results</Link><Link to='/saved'> Tagged</Link>
            {savedJobList && savedJobList.map(job => {
                return <SavedJob job={job} key={job.id} />
            })}
        </div>
    )
}

export default SavedJobList;