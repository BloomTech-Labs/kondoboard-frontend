import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

import JobController from '@controllers/JobController.js';
import {selectSavedJobList} from '@state/selectors.js';
import {selectUserId} from '@state/selectors.js';
import { selectTaggedJobs } from '@state/selectors.js';

import SearchTagged from '../jobsearchcomponents/SearchTagged.jsx';
import TagList from './tagsList.jsx';

const SavedJobList = () => {
    const savedJobList = useSelector(selectSavedJobList);
    const id = useSelector(selectUserId);
    const taggedJobList = useSelector(selectTaggedJobs);
    console.log('saved', taggedJobList)

    useEffect(() => {
        JobController.fetchSavedJobList(id);
    }, []);

    return(
        <div>
            <Link to='/'>Results</Link><Link to='/saved'> Tagged</Link>
            <TagList />
            {taggedJobList && taggedJobList.length ?
                <>
                    {taggedJobList && taggedJobList.map(job => {
                        return <SearchTagged job={job} key={job.id} />
                    })}
                </>    
            :
                <>
                    {savedJobList && savedJobList.map(job => {
                        return <SearchTagged job={job} key={job.id} />
                    })}
                </>
        }
        </div>
    )
}

export default SavedJobList;