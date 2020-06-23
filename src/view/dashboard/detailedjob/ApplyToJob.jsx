import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Modal } from 'antd';

import { selectJobColumns } from '@state/selectors.js';

import JobController from '@controllers/JobController.js';

import ColumnHelpers from '@helpers/confirmApply.js';

const ApplyToJob = props => {
    const [visible, setVisible] = useState(false);
    const columns = useSelector(selectJobColumns);
    const job = props.job;
    const id = props.id;
    const users_jobs_id = job.id;
    const columns_id = ColumnHelpers.filterApply(columns)
    
    useEffect(() => {
        JobController.fetchJobColumns(id)
    }, [])

    const handleCancel = e => {
        setVisible(false)
    }
    
    const handleOk = e => {
        e.preventDefault();
        JobController.fetchJobColumns(id)
        const name = 'apply';
        const location = 1;
        columns_id ? JobController.addToCol(users_jobs_id, columns_id) : JobController.addColumn(name, location, id)
        setVisible(false)
    }

    const apply = e => {
        e.preventDefault();
        window.open(job.source_url);
        setVisible(true);
    }

    return(
        <div>
            <button style={{background: 'purple', color: 'white', height: '30px'}} onClick={apply}>Apply</button>
            <Modal
                title='Apply'
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                Did you apply to {job.title} job at {job.company}?
            </Modal>
        </div>
    )
}

export default ApplyToJob;