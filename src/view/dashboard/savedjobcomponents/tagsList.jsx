import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import JobController from '@controllers/JobController.js';
import { selectJobTags } from '@state/selectors.js';
import { selectUserId } from '@state/selectors.js';
import { selectSavedJobList } from '@state/selectors.js';
import { Select } from 'antd';

import TagHelpers from '@helpers/FilterTag.js';
import JobHelpers from '@helpers/FindMatch.js';

const TagList = () => {
    const [tag, setTag] = useState(null)
    const id = useSelector(selectUserId)
    const tags = useSelector(selectJobTags)
    const jobs = useSelector(selectSavedJobList)
    const { Option } = Select;

    function handleValueChange(value) {
        setTag(value)
    }
    
    console.log('value', tag)
    const selectTag = e => {
        e.preventDefault();
        const filteredArr = TagHelpers.filterByName(tags, tag)
        const matchedQuery = JobHelpers.matchByJobId(jobs, filteredArr)
        console.log('selection',matchedQuery)
        JobController.selectTaggedJobs(matchedQuery);
    }
    console.log('list', tags)

    useEffect(() => {
        JobController.getJobTags(id)
    }, [])

    return(
        <div>
            <Select defaultValue="Filter tags by name" onChange={handleValueChange}> 
                {tags && tags.map(tag => {
                    return <Option style={{color: `${tag.color}`}} value={tag.tag_name}>{tag.tag_name}</Option>
                })}
            </Select>
            <button onMouseUp={selectTag}>Search</button>
        </div>
    )
}

export default TagList;