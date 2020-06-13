import React from 'react';
import { useSelector } from 'react-redux';
import { selectSavedJob } from '@state/selectors.js';

import { CaretDownFilled } from '@ant-design/icons';

const DetailedJob = () => {
    const job = useSelector(selectSavedJob);

    const dayPosted = new Date(job.date_published)
    const currentDate = new Date();
    const daysAgo = Math.floor((currentDate - dayPosted)/86400000)
    return(
        <>
            <div style={{width: '75%', marginTop: '5%'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h1>{job && job.company}</h1>
                    <p>{(daysAgo === 0) ? job && 'Today' : (daysAgo === 1) ? job && '1 day ago' : job && `${daysAgo} days ago`}</p>
                    <p>{job && 'Add Tag'}{job && <CaretDownFilled />}</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <p>{job && job.title}</p>
                        <p>{job.location_city}, {job.location_state}</p>
                    </div>
                    <button>Apply</button>
                </div>
                <p>{job && job.description}</p>
                <p> <a>{job && job.source_url}</a></p>
            </div>
        </>
    )
}

export default DetailedJob;