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
    }, []);

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
        <div style={{display: 'flex'}}>
            <div
                id='1'
                onDrop={drop}
                onDragOver={dragOver}
                style={{width: '300px', height: '75vh', outline: '1px solid blue'}}
                >
                <h2>Applied Jobs</h2>
                {savedJobList && savedJobList.map(job => {
                    return <AppliedJob job={job} key={job.id} draggable='true' />
                })}
            </div>
            <div
                id='2'
                onDrop={drop}
                onDragOver={dragOver}
                style={{width: '300px', height: '75vh', outline: '1px solid blue'}}
            >
                <h2>Phone Interview</h2>
            </div>
            <div
                id='3'
                onDrop={drop}
                onDragOver={dragOver}
                style={{width: '300px', height: '75vh', outline: '1px solid blue'}}
            >
                <h2>First Interview</h2>
            </div>
            <div
                id='4'
                onDrop={drop}
                onDragOver={dragOver}
                style={{width: '300px', height: '75vh', outline: '1px solid blue'}}
            >
                <h2>Second Interview</h2>
            </div>
            <div
                id='4'
                onDrop={drop}
                onDragOver={dragOver}
                style={{width: '300px', height: '75vh', outline: '1px solid blue'}}
            >
                <h2>Third Interview</h2>
            </div>
        </div>
    )
}

export default AppliedJobList;