import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import JobController from '../../../controllers/JobController.js';
import { selectJobTags } from '../../../model/state/selectors.js';
import { selectUserId } from '../../../model/state/selectors.js';

const TagList = () => {
    const id = useSelector(selectUserId)
    const tags = useSelector(selectJobTags)

    useEffect(() => {
        JobController.getJobTags(id)
    }, [])

    return(
        <div style={{display: 'flex'}}>
            {tags && tags.map(tag => {
                return <p style={{color: `${tag.color}`, marginRight: '2%'}}>{tag.tag_name} </p>
            })}
        </div>
    )
}

export default TagList;