import React from 'react';

import Draggable from './Draggable.jsx';

import { useSelector } from 'react-redux';
import { selectAppliedJobs } from '@state/selectors.js';

const DropZone = props => {
    const column = props.column;
    const appliedJobList = useSelector(selectAppliedJobs);

    console.log('dz', props)

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
        <div
            style={{marginTop: '-5%'}}
            onDrop={drop}
            onDragOver={dragOver}
            style={{width: '300px', height: '75vh'}}
        >
            <h2>{column.name}</h2>
            <div
                id='1'
                onDrop={drop}
                onDragOver={dragOver}
                style={{width: '300px', height: '75vh'}}
                >
                {/* uncomment when tables on back end are ready, compare job id to column job id to determine whether to display */}
                {/* {appliedJobList && appliedJobList.map(job => {
                    return <Draggable column={column} job={job} key={job.id} draggable='true' />
                })} */} 
            </div>
        </div>
    )
}

export default DropZone;