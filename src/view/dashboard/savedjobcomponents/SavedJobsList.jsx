import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';

import JobController from '@controllers/JobController.js';
import {selectSavedJobList} from '@state/selectors.js';
import {selectUserId} from '@state/selectors.js';
import { selectTaggedJobs } from '@state/selectors.js';

import SearchTagged from '@dashboard/jobsearchcomponents/SearchTagged.jsx';
import TagList from './tagsList.jsx';

const SavedJobList = ({ currentJob, setCurrentJob }) => {
    const savedJobList = useSelector(selectSavedJobList);
    const id = useSelector(selectUserId);
    const taggedJobList = useSelector(selectTaggedJobs);

    const [noDuplicateSaved, setNoDuplicateSaved] = useState([]);
    const [noDuplicateTagged, setNoDuplicateTagged] = useState([]);

    useEffect(() => {
        JobController.fetchSavedJobList(id);
    },[id]);
 
    useEffect(() => {
        if (savedJobList) {
        setNoDuplicateSaved(Array.from(new Set(savedJobList.map(a => a.id)))
        .map(id => {
            return savedJobList.find(a => a.id === id);
        }))
    }
    },[savedJobList]);

    useEffect(() => {
        if (taggedJobList) {
        setNoDuplicateSaved(Array.from(new Set(taggedJobList.map(a => a.id)))
        .map(id => {
            return taggedJobList.find(a => a.id === id);
        }))
    }
    },[taggedJobList]);

    return(
        <div className='saved-list'>
            <TagList />
            {noDuplicateTagged.length > 0 ? 
                <>
                    {noDuplicateTagged && noDuplicateTagged.map(job => {
                        return <SearchTagged job={job} key={job.id} currentJob={currentJob} setCurrentJob={setCurrentJob} />
                    })}
                </>    
            :
                <>
                    {noDuplicateSaved && noDuplicateSaved.map(job => {
                        return <SearchTagged job={job} key={job.id} currentJob={currentJob} setCurrentJob={setCurrentJob} />
                    })}
                </>
        }
        </div>
    )
}

export default SavedJobList;