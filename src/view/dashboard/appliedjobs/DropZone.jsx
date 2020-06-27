import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ColumnHelpers from '@helpers/MatchJobToCol.js';

import { selectTargetJob, selectUserId } from '@state/selectors.js'

import Draggable from './Draggable.jsx';
import JobController from '@controllers/JobController.js';
import { useEffect } from 'react';

const DropZone = props => {
    const [update, setUpdate] = useState(false)
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
        JobController.fetchJobColumns(id);
        setUpdate(true)
    }
    
    const dragOver = e => {
        e.preventDefault();
    }
    
    useEffect(() => {
        JobController.fetchJobColumns(id);
        setUpdate(false);
    }, [update])

    return(
        <div
            onDrop={drop}
            onDragOver={dragOver}
            id={column.id}
            >
            <h2>{column.name}</h2>
            <div
                onDrop={drop}
                onDragOver={dragOver}
                id={column.id}
                >
                {matchingJobs ? 
                <div>
                    {matchingJobs && matchingJobs.map(job => {
                        return <Draggable  newCol={column.id} column={column} job={job} key={job.id} draggable='true' />
                    })}
                </div>
                :
                null               
                }
            </div>
        </div>
    )
}

export default DropZone;
