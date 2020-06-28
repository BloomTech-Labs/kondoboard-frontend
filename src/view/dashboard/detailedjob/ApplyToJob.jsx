import React, { useState } from 'react';
import { Modal } from 'antd';

import JobController from '@controllers/JobController.js';
import { useEffect } from 'react';

const ApplyToJob = props => {
    const [visible, setVisible] = useState(false);
    const job = props.job;
    const id = props.id;
    const users_jobs_id = job.id;
    const columns_id = props.columns_id;
    
    useEffect(() => {
        const name = 'Applied';
        const location = 1;
        columns_id ? JobController.fetchSavedJobList(id) : JobController.addColumn(id, name, location);
    }, [id])

    const handleCancel = e => {
        setVisible(false)
    }
    
    const handleOk = e => {
        e.preventDefault();
        JobController.addToCol(users_jobs_id, props.columns_id);
        setVisible(false)
    }

    const apply = e => {
        e.preventDefault();
        window.open(job.source_url); 
        setVisible(true);
    }

    return(
        <div className='apply'>
            <button className='apply-button' onClick={apply}>Apply</button>
            <Modal
                className='apply-modal'
                title='Apply'
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText='Yes' 
                cancelText='No'
                okButtonProps={{className: 'modal-save'}} 
                cancelButtonProps={{className: 'modal-cancel'}}
                closable={false}
            >
                <h2>Did you apply to the <span style={{color: 'purple'}}>{job.title}</span> job at <span style={{color: 'purple'}}>{job.company}?</span></h2>
            </Modal>
        </div>
    )
}

export default ApplyToJob;