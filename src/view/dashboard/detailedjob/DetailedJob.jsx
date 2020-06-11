import React from 'react';
import { useSelector } from 'react-redux';
import { selectSavedJob } from '@state/selectors.js';

const DetailedJob = () => {
    const job = useSelector(selectSavedJob);

    console.log('flag', job)
    return(
        <>
            <h2>Details</h2>
            <div style={{background: 'yellow', width: '75%'}}>
                <p>{job && job.title}</p>
                <p>{job && job.company}</p>
                <p>{job && job.description}</p>
                <p> <a>{job && job.source_url}</a></p>
            </div>
        </>
    )
}

export default DetailedJob;