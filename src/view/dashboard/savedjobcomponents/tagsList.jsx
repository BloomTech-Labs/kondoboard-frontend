import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import JobController from '../../../controllers/JobController.js';
import { selectJobTags } from '../../../model/state/selectors.js';
import { selectUserId } from '../../../model/state/selectors.js';
import { selectSavedJobList } from '../../../model/state/selectors.js';
import { Select } from 'antd';

import TagHelpers from '../../../helpers/FilterTag.js';
import JobHelpers from '../../../helpers/FindMatch.js';
import DupHelpers from '../../../helpers/TagDuplicateChecker';

const TagList = () => {
    const [tag, setTag] = useState(null)
    const id = useSelector(selectUserId)
    const tags = useSelector(selectJobTags)
    const jobs = useSelector(selectSavedJobList)
    const tagsList = DupHelpers.removeDuplicates(tags)
    const { Option } = Select;

    function handleValueChange(value) {
        setTag(value)
    }
    
    const selectTag = e => {
        e.preventDefault();
        const filteredArr = TagHelpers.filterByName(tags, tag)
        const matchedQuery = JobHelpers.matchByJobId(jobs, filteredArr)
        JobController.selectTaggedJobs(matchedQuery);
    }

    useEffect(() => {
        JobController.getJobTags(id)
    }, [])

    return(
        <div>
            <Select defaultValue="Filter tags by name" onChange={handleValueChange}> 
                {tagsList && tagsList.map(tag => {
                    return <Option style={{color: `${tag.color}`}} value={tag.tag_name}>{tag.tag_name}</Option>
                })}
            </Select>
            <button onMouseUp={selectTag}>Search</button>
        </div>
    )
}

export default TagList;