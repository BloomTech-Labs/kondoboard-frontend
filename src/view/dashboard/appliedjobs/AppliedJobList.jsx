import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import JobController from '@controllers/JobController.js';
import { selectUserId } from '@state/selectors.js';
import { selectJobColumns } from '@state/selectors.js';
import { selectSavedJobList } from '@state/selectors.js';

import AddColumn from '../forms/AddColumn.jsx';
import DropZone from './DropZone.jsx';

const AppliedJobList = () => {
    const columns = useSelector(selectJobColumns);
    const id = useSelector(selectUserId);
    const jobs = useSelector(selectSavedJobList)

    useEffect(() => {
        JobController.fetchJobColumns(id);
        JobController.fetchSavedJobList(id);
    }, [])

    return(
        <div className='drop-box'>
            <div className='overflow-box'>
                <>
                    {columns && columns.map(column => {
                        return <DropZone jobs={jobs} column={column} draggable='true' />
                    })}
                </>
                <div><AddColumn /></div>
            </div>
        </div>
    )
}

export default AppliedJobList;