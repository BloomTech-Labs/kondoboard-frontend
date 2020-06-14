import React from 'react';

import { useSelector }from 'react-redux';

import { selectJobTags } from '@state/selectors.js';

const TagDisplay = () => {
    const tags = useSelector(selectJobTags);
    return(
        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            {tags && tags.map(tag => {
                    return <div style={{backgroundColor: `${tag.color}`, height: '20px', width: '20px', borderRadius: '50%', marginRight: '2%'}}></div>
                })
            }
        </div>
    )
}

export default TagDisplay;