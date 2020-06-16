import React, { useState, useEffect } from 'react';
import { CaretDownFilled } from '@ant-design/icons';
import { Col, Modal } from 'antd';

import JobController from '@controllers/JobController.js';
import AddTag from '../forms/AddTag.jsx';
import TagDisplay from './TagsDisplay.jsx';
import DateHelper from '../../../helpers/DateConversion.js';

const SavedJob = props => {
    const job = props.job;
    const daysAgo = DateHelper.convertToDays(job.date_published);
    const [visible, setVisible] = useState(false)

    const showModal = () => {
        setVisible(true);
    }

    const handleOk = e => {
        setVisible(false);
    }

    const handleCancel = e => {
        setVisible(false)
    }

    const selectJob = e => {
        e.preventDefault();
        JobController.selectJob(job)
    }

    useEffect(() => {
        JobController.getJobTags();
    }, [])
    return(
        <div onClick={selectJob} style={{border: '3px solid gray', borderRadius: '5%', display: 'flex', marginBottom: '5%'}}>
            <Col span={14} style={{marginLeft: '7%'}}>
                <h1>{job.company}</h1>    
                <p>{job.title}</p>
                <p>{job.location_city}, {job.location_state}</p>  
            </Col>
            <Col span={2}></Col>
            <Col span={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                <p onClick={showModal}>{job && 'Add Tag'}{job && <CaretDownFilled />}
                    <TagDisplay />
                </p>
                <p>{daysAgo === 0 ? job && 'Today' : daysAgo === 1 ? job && '1 day ago' : job && `${daysAgo} days ago`}</p>
            </Col>
            <Modal
                style={{width: '260px'}}
                title='Add Tag'
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <AddTag job={job} />
            </Modal>
        </div>
    )
} 

export default SavedJob;
