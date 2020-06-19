import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import JobController from '@controllers/JobController.js';
import { selectAppliedJobs } from '@state/selectors.js';
import { selectSavedJobList } from '@state/selectors.js';
import { selectUserId } from '@state/selectors.js';
import { selectJobColumns } from '@state/selectors.js';

import Draggable from './Draggable.jsx';
import AddColumn from '../forms/AddColumn.jsx';
import DropZone from './DropZone.jsx';

const AppliedJobList = () => {
    const appliedJobList = useSelector(selectSavedJobList);
    const jobColumns = useSelector(selectJobColumns);
    const id = useSelector(selectUserId);

    useEffect(() => {
        JobController.fetchAppliedJobList(id);
        JobController.fetchJobColumns(id);
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
        <div style={{display: 'flex'}}>
            <div
                id='1'
                onDrop={drop}
                onDragOver={dragOver}
                style={{width: '300px', height: '75vh'}}
                >
                <h2>Applied Jobs</h2>
                {appliedJobList && appliedJobList.map(job => {
                    return <Draggable job={job} key={job.id} draggable='true' />
                })}
            </div>
            <>
                {jobColumns && jobColumns.map(column => {
                    return <DropZone column={column} draggable='true' />
                })}
            </>
            <div><AddColumn /></div>
        </div>
    )
}

export default AppliedJobList;