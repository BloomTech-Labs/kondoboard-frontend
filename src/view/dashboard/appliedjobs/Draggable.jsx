import React from 'react';
import SearchTagged from '../jobsearchcomponents/SearchTagged.jsx';

const AppliedJob = props => {
    const job = props.job;

    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }
    return(
        <div
        id={job.id}
        draggable='true'
        onDragStart={dragStart}
        onDragOver={dragOver}
        >
            <SearchTagged job={job} />
        </div>
    )
}

export default AppliedJob;