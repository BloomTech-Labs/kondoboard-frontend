import React from 'react';

function JobBoard (props) {
    console.log('jboard', props)
    const drop = e => {
        e.preventDefault();
        const job_id = e.dataTransfer.getData('job_id');

        const job = document.getElementById(job_id);
        job.style.display = 'block';

        e.target.appendChild(job);
    }

    const dragOver = e => {
        e.preventDefault();
    }
    return(
        <div>
            <div
                id={props.id}
                onDrop={drop}
                onDragOver={dragOver}
                style={{width: '200px', border: '1px solid blue', height: '75vh'}}
            >
                {props.children}
            </div>
        </div>
    )
}

export default JobBoard;