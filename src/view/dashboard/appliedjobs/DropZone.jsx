import React from 'react';

import { useSelector } from 'react-redux';

import { selectTargetJob } from '@state/selectors';

import ColumnHelpers from '@helpers/MatchJobToCol.js';

import Draggable from './Draggable.jsx';
import JobController from '../../../controllers/JobController.js';

const DropZone = props => {
    const column = props.column;
    const jobs = props.jobs;
    const users_jobs_id = useSelector(selectTargetJob);
    const matchingJobs = ColumnHelpers.matchJobToCol(column, jobs);

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        card.style.display = 'initial';
        const columns_id = parseInt(e.target.id);

        e.target.appendChild(card);
        JobController.updateAppliedCol(columns_id, users_jobs_id)
    }
    
    const dragOver = e => {
        e.preventDefault();
    }

    return(
        <div
            className='applied'
            onDrop={drop}
            onDragOver={dragOver}
        >
            <h2>{column.name}</h2>
            <div style={{border: 'none'}}
                id={column.id}
                onDrop={drop}
                onDragOver={dragOver}
                >
                {matchingJobs && matchingJobs.map(job => {
                    return <Draggable column={column} job={job} key={job.id} draggable='true' />
                })}
            </div>
        </div>
    )
}

export default DropZone;