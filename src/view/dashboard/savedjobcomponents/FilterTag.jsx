import React from 'react';

const FilterTag = props => {
    const tag = props;
    return(
        <div style={{height: '20px'}}>
            <p id={tag.job_id} style={{color: `${tag.color}`, marginRight: '2%'}}>{tag.tag_name} </p>
        </div>
    )
}

export default FilterTag;