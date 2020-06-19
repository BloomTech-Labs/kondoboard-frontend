import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import JobController from '@controllers/JobController.js';
import { selectAppliedJobs } from '@state/selectors.js';
import { selectSavedJobList } from '@state/selectors.js';
import { selectUserId } from '@state/selectors.js';
import { selectJobColumns } from '@state/selectors.js';
import { selectJobTags } from '@state/selectors.js';

import AddColumn from '../forms/AddColumn.jsx';
import DropZone from './DropZone.jsx';
import Draggable from './Draggable.jsx';

import DupHelpers from '@helpers/TagDuplicateChecker';
import JobHelpers from '@helpers/FindMatch.js';
import TagHelpers from '@helpers/FilterTag.js';

const AppliedJobList = () => {
    const [tag, setTag] = useState(null);
    const jobs = useSelector(selectSavedJobList);
    const list1 = useSelector(selectJobColumns);
    const columns = list1[0]
    const tags = useSelector(selectJobTags);
    const tagsList = DupHelpers.removeDuplicates(tags);
    const id = useSelector(selectUserId);

    const setFilter = e => {
        e.preventDefault();
        console.log('flag',e.target)
        setTag(e.target.innerText)
    }

    const runFilter = e => {
        e.preventDefault();
        const filteredArr = TagHelpers.filterByName(tags, tag)
        const matchedQuery = JobHelpers.matchByJobId(jobs, filteredArr)
        JobController.filterBoard(matchedQuery)
    }

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    useEffect(() => {
        JobController.fetchAppliedJobList(id);
        JobController.fetchJobColumns(id);
    },[]);

    return(
        <div className='drop-box'>
            <div className='overflow-box'>
            <div className='applied'
                id='1'
                onDrop={drop}
                onDragOver={dragOver}
                >
                    <h2>Applied</h2>
                    {jobs && jobs.map(job => {
                        return <Draggable job={job} />
                    })}
                </div>
                <>
                    {columns && columns.map(column => {
                        return <DropZone column={column} draggable='true' />
                    })}
                </>
            <div><AddColumn /></div>
            <div>
                {tagsList && tagsList.map(tag => {
                    return <p name={tag.tag_name} id={tag.job_id} onMouseDown={setFilter} onMouseUp={runFilter} style={{color: `${tag.color}`, marginTop: '5%'}}>{tag.tag_name}</p>
                })}
            </div>
            <div className='interview'
                id='2'
                onDrop={drop}
                onDragOver={dragOver}
            >
                <h2>Phone Interview</h2>
            </div>
            <div className='interview'
                id='3'
                onDrop={drop}
                onDragOver={dragOver}
            >
                <h2>First Interview</h2>
            </div>
            <div className='interview'
                id='4'
                onDrop={drop}
                onDragOver={dragOver}
            >
                <h2>Second Interview</h2>
            </div>
            <div className='interview'
                id='4'
                onDrop={drop}
                onDragOver={dragOver}
            >
                <h2>Third Interview</h2>
            </div>
        </div>
        </div>
    )
}

export default AppliedJobList;