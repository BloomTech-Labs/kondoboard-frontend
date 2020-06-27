import React from 'react';
import { useSelector } from 'react-redux';

import ColumnHelpers from '@helpers/MatchJobToCol.js';

import { selectTargetJob, selectUserId } from '@state/selectors.js'

import Draggable from './Draggable.jsx';
import JobController from '@controllers/JobController.js';
import { useEffect } from 'react';

const DropZone = props => {
    const column = props.column;
    const jobs = props.jobs;
    const id = useSelector(selectUserId)
    const users_jobs_id = useSelector(selectTargetJob);
    const matchingJobs = ColumnHelpers.matchJobToCol(column, jobs);

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
        const columns_id = column.id;
        JobController.updateAppliedCol(columns_id, users_jobs_id)
    }
    
    const dragOver = e => {
        e.preventDefault();
    }

    return(
        <div
            onDrop={drop}
            onDragOver={dragOver}
            id={column.id}
        >
            <h2>{column.name}</h2>
            {matchingJobs ? 
            <div
                onDrop={drop}
                onDragOver={dragOver}
                id={column.id}
            >
                {matchingJobs && matchingJobs.map(job => {
                    return <Draggable  newCol={column.id} column={column} job={job} key={job.id} draggable='true' />
                })}
            </div>
            :
            null               
            }
        </div>
    )
}

export default DropZone;
