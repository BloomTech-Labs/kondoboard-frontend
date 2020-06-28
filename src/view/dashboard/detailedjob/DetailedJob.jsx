import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUserId, selectJobColumns, selectSavedJob } from '@state/selectors.js';

import DateHelper from '@helpers/DateConversion.js';
import ColumnHelpers from '@helpers/confirmApply.js';
import JobController from '@controllers/JobController.js';
import TagsDisplay from '@dashboard/savedjobcomponents/TagsDisplay.jsx';
import ApplyToJob from './ApplyToJob.jsx';

const DetailedJob = ({ nav }) => {
    const id = useSelector(selectUserId);
    const job = useSelector(selectSavedJob);
    const columns = useSelector(selectJobColumns);
    
    const columns_id = ColumnHelpers.filterApply(columns)
    const daysAgo = DateHelper.convertToDays(job.date_published);

    useEffect(() => {
        JobController.fetchJobColumns(id);
    }, [id]);

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
                {nav === 'saved' && <ApplyToJob job={job} id={id} columns_id={columns_id}/> }
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