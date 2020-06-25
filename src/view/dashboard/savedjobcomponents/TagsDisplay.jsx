import React, { useEffect } from 'react';

import { useSelector }from 'react-redux';

import { selectUserId } from '@state/selectors.js';
import { selectJobTags } from '@state/selectors.js';

import JobController from '@controllers/JobController';

import TagHelper from '@helpers/AbridgeTags.js';
import TagMatcher from '@helpers/TagIdMatch.js';

const TagDisplay = props => {
    let job_id;
    props.job.ds_id ? job_id = props.job.ds_id : job_id = props.job.id
    const id = useSelector(selectUserId)
    const tags = useSelector(selectJobTags)
    const jobTags = TagMatcher.matchTagsToJobs(tags, job_id)
    const lessTags = TagHelper.shortenArr(jobTags)

    useEffect(() => {
        JobController.getJobTags(id);
    },[id]);
    
    return(
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            {!props.extended ?
            <>
                {lessTags && lessTags.map(tag => {
                        return <div key={tag.tag_name} style={{backgroundColor: `${tag.color}`, height: '20px', width: '20px', borderRadius: '50%', marginRight: '2%'}}></div>
                    })
                }
            </>
            :
            <>
                {jobTags && jobTags.map(tag => {
                        return <div key={tag.tag_name} style={{backgroundColor: `${tag.color}`, height: '20px', width: '20px', borderRadius: '50%', marginRight: '2%'}}></div>
                    })
                }
            </>
        }
        </div>
    )
}

export default TagDisplay;