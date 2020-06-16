import React, { useEffect } from 'react';

import { useSelector }from 'react-redux';

import { selectUserId } from '@state/selectors.js';
import { selectJobTags } from '@state/selectors.js';

import JobController from '../../../controllers/JobController';

import TagHelper from '../../../helpers/AbridgeTags.js';

const TagDisplay = () => {
    const id = useSelector(selectUserId)
    const tags = useSelector(selectJobTags)
    const lessTags = TagHelper.shortenArr(tags)

    useEffect(() => {
        JobController.getJobTags(id)
    }, [])
    
    return(
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            {tags.length > 3 ?
            <>
                {lessTags && lessTags.map(tag => {
                        return <div style={{backgroundColor: `${tag.color}`, height: '20px', width: '20px', borderRadius: '50%', marginRight: '2%'}}></div>
                    })
                }
            </>
            :
            <>
                {tags && tags.map(tag => {
                        return <div style={{backgroundColor: `${tag.color}`, height: '20px', width: '20px', borderRadius: '50%', marginRight: '2%'}}></div>
                    })
                }
            </>
        }
        </div>
    )
}

export default TagDisplay;