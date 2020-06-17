import React, { useState } from 'react';
import { CaretDownFilled } from '@ant-design/icons';
import { Col, Modal } from 'antd';

import { selectUserId } from '@state/selectors.js';
import { selectSavedJob } from '@state/selectors.js';
import { useSelector } from 'react-redux';
import JobController from '@controllers/JobController';
import JobHelpers from '../../../helpers/Job.js';
import DateHelper from '../../../helpers/DateConversion.js';

import AddTag from '../forms/AddTag.jsx';

const Job = props => {
    const job = props.job;
    const saved_job = JobHelpers.formatSavedJob(job);
    const id = useSelector(selectUserId)
    const selectedJob = useSelector(selectSavedJob);

    const [visible, setVisible] = useState(false)
    
    const showModal = () => {
        setVisible(true);
    }

    const daysAgo = DateHelper.convertToDays(job.date_published);
    
    const addToSaved = e => {
        e.preventDefault();
        JobController.addSavedJob(id, saved_job);
        JobController.fetchSavedJobList(id);
        setVisible(false)
    }

    const selectJob = e => {
        e.preventDefault();
        JobController.selectJob(job)
    }

    const handleCancel = e => {
        setVisible(false)
    }

    return(
        <div onClick={selectJob} style={{border: '3px solid gray', borderRadius: '5%', display: 'flex', marginBottom: '5%'}}>
            <Col span={14} style={{marginLeft: '7%'}}>
                <h1>{job.company}</h1>    
                <p>{job.title}</p>
                <p>{job.location_city}, {job.location_state}</p>  
            </Col>
            <Col span={2}></Col>
            <Col span={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: '7%'}}>
                <p onClick={showModal}>{job && 'Add Tag'}{job && <CaretDownFilled />}</p>
                <p>{(daysAgo === 0) ? job && 'Today' : (daysAgo === 1) ? job && '1 day ago' : job && `${daysAgo} days ago`}</p>
            </Col>
            <Modal
                title='Add Tag'
                visible={visible}
                onOk={addToSaved}
                onCancel={handleCancel}
            >
                <AddTag job={job} />
            </Modal>
        </div>
    )
}

export default Job;