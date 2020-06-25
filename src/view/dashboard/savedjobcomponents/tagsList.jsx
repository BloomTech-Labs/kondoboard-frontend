import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import JobController from '@controllers/JobController.js';
import { selectJobTags } from '@state/selectors.js';
import { selectUserId } from '@state/selectors.js';
import { selectSavedJobList } from '@state/selectors.js';
import { Select } from 'antd';

import TagHelpers from '@helpers/FilterTag.js';
import JobHelpers from '@helpers/FindMatch.js';
import DupHelpers from '@helpers/TagDuplicateChecker';

const TagList = () => {
    const [tag, setTag] = useState(null);
    const id = useSelector(selectUserId);
    const tags = useSelector(selectJobTags);
    const jobs = useSelector(selectSavedJobList);
    const tagsList = DupHelpers.removeDuplicates(tags);
    const { Option } = Select;

    function handleValueChange(value) {
        setTag(value);
    }
    
    const selectTag = e => {
        e.preventDefault();
        const filteredArr = TagHelpers.filterByName(tags, tag);
        const matchedQuery = JobHelpers.matchByJobId(jobs, filteredArr);

        // This should not be necessary, theres major flaws in the code leading up to this point that is causing duplicates.
        // this was a last minute work around. 
        const removeDuplicates = Array.from(new Set(matchedQuery.map(a => a.jobs_id)))
        .map(id => {
            return matchedQuery.find(a => a.jobs_id === id);
        });
        
        JobController.selectTaggedJobs(removeDuplicates);
    }

    useEffect(() => {
        JobController.getJobTags(id);
    }, []);

    return(
        <div className='tag-search'>
            <Select className='drop' defaultValue="Filter tags by name" onChange={handleValueChange}> 
                {tagsList && tagsList.map(tag => {
                    return <Option style={{color: `${tag.color}`}} value={tag.tag_name}>{tag.tag_name}</Option>
                })}
            </Select>
            <button className='search-button' onClick={selectTag}>Search</button>
        </div>
    )
}

export default TagList;