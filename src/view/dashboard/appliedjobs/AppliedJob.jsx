import React from 'react';

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
        <div className='job-card'
        id={job.id}
        draggable='true'
        onDragStart={dragStart}
        onDragOver={dragOver}
        >
            <p>{job.title}</p>
            <p>{job.company}</p>    
            <p>{job.location_city}</p>  
            <p>{job.date_published}</p>
        </div>
    )
}

export default AppliedJob;