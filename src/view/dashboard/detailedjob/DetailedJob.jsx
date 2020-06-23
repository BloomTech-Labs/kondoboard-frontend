import React from 'react';
import { useSelector } from 'react-redux';
import { selectSavedJob } from '@state/selectors.js';
import { selectUserId } from '@state/selectors.js';

import DateHelper from '@helpers/DateConversion.js';

import TagsDisplay from '../savedjobcomponents/TagsDisplay.jsx';
import ApplyToJob from './ApplyToJob.jsx';

const DetailedJob = () => {
    const id = useSelector(selectUserId);
    const job = useSelector(selectSavedJob);

    const daysAgo = DateHelper.convertToDays(job.date_published);

    return(
        <>
            {job.id ?
                <div style={{width: '75%', marginTop: '5%'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h1 style={{marginTop: '-3%'}}>{job && job.company}</h1>
                    <p>{(daysAgo === 0) ? 'Today' : (daysAgo === 1) ? '1 day ago' : `${daysAgo} days ago`}</p>
                    <TagsDisplay job={job} extended={false}/>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <p>{job && job.title}</p>
                        <p>{job.location_city}, {job.location_state}</p>
                    </div>
                    <ApplyToJob job={job} id={id} />
                </div>
                    <p>{job && job.description}</p>
                </div>
            :
                null
            }
        </>
    )
}
export default DetailedJob;