import React from 'react';

const Job = props => {
    const job = props.job;

    return(
        <div>
            <h3>{job.name}</h3>
        </div>
    )
}

export default Job;