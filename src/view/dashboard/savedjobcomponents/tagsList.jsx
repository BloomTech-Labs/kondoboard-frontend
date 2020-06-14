import React from 'react';

import { useSelector }from 'react-redux';

import { selectJobTags } from '@state/selectors.js';

const TagList = () => {
    const tags = useSelector(selectJobTags);

    return(
        <div style={{display: 'flex'}}>
            {tags && tags.map(tag => {
                return <p style={{color: `${tag.color}`, marginRight: '2%'}}>{tag.name} </p>
            })}
        </div>
    )
}

export default TagList;