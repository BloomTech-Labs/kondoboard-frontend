import React from 'react';

const Job = props => {
    const job = props.job;

    return(
        <div style={{display: 'flex', justifyContent: 'space-between', width: '150%'}}>
            <p>{job.title}</p>   
            <p>{job.company}</p>    
            <p>{job.location_city}</p>  
            <p>{job.date_published}</p>
        </div>
    )
}

export default Job;