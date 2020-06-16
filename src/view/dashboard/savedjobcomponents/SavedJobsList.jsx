import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

import JobController from '@controllers/JobController.js';
import {selectSavedJobList} from '@state/selectors.js';
import {selectUserId} from '@state/selectors.js';

import SearchTagged from '../jobsearchcomponents/SearchTagged.jsx';
import TagList from './tagsList.jsx';

const SavedJobList = () => {
    const savedJobList = useSelector(selectSavedJobList);
    const id = useSelector(selectUserId);

    useEffect(() => {
        JobController.fetchSavedJobList(id);
    }, []);

    return(
        <div>
            <Link to='/'>Results</Link><Link to='/saved'> Tagged</Link>
            <TagList />
            {savedJobList && savedJobList.map(job => {
                return <SearchTagged job={job} key={job.id} />
            })}
        </div>
    )
}

export default SavedJobList;