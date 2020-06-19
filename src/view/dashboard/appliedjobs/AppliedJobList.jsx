import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import JobController from '@controllers/JobController.js';
import { selectSavedJobList } from '@state/selectors.js';
import { selectUserId } from '@state/selectors.js';

import AppliedJob from './AppliedJob.jsx';

const AppliedJobList = () => {
    const savedJobList = useSelector(selectSavedJobList);
    const id = useSelector(selectUserId)

    useEffect(() => {
        JobController.fetchSavedJobList(id);
    },[]);

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return(
        <div className='drop-box'>
            <div className='overflow-box'>
            <div className='applied'
                id='1'
                onDrop={drop}
                onDragOver={dragOver}
                >
                <h2>Applied Jobs</h2>
                {savedJobList && savedJobList.map(job => {
                    return <AppliedJob job={job} key={job.id} draggable='true' />
                })}
            </div>
            <div className='interview'
                id='2'
                onDrop={drop}
                onDragOver={dragOver}
            >
                <h2>Phone Interview</h2>
            </div>
            <div className='interview'
                id='3'
                onDrop={drop}
                onDragOver={dragOver}
            >
                <h2>First Interview</h2>
            </div>
            <div className='interview'
                id='4'
                onDrop={drop}
                onDragOver={dragOver}
            >
                <h2>Second Interview</h2>
            </div>
            <div className='interview'
                id='4'
                onDrop={drop}
                onDragOver={dragOver}
            >
                <h2>Third Interview</h2>
            </div>
        </div>
        </div>
    )
}

export default AppliedJobList;