import React, { useState, useEffect } from 'react';
import { CaretDownFilled } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Col, Modal } from 'antd';

import JobController from '@controllers/JobController.js';
import AddTag from '@dashboard/forms/AddTag.jsx';
import TagDisplay from '@dashboard/savedjobcomponents/TagsDisplay.jsx';
import DateHelper from '@helpers/DateConversion.js';

import { selectUserId } from '@state/selectors.js';

const SearchTagged = props => {
    const job = props.job;
    const id = useSelector(selectUserId)
    const daysAgo = DateHelper.convertToDays(job.date_published);
    const [state, setState] = useState({visible: false, pending: false})

    const showModal = () => {
        setState({...state, visible: true});
    }

    const handleOk = e => {
        setState({...state, pending: true});
        setTimeout(() => {
            setState({visible: false, pending: false});
        }, 1000);
    }

    const handleCancel = e => {
        setState({...state, visible: false});
    }

    const selectJob = e => {
        e.preventDefault();
        JobController.selectJob(job)
    }

    useEffect(() => {
        JobController.getJobTags(id);
    }, [])

    return(
        <>
            {job.id ? 
                <div onClick={selectJob} style={{border: '3px solid gray', borderRadius: '5%', display: 'flex', marginBottom: '5%'}}>
                <Col span={14} style={{marginLeft: '7%'}}>
                    <h1>{job.company}</h1>    
                    <p>{job.title}</p>
                    <p>{job.location_city}, {job.location_state}</p>  
                </Col>
                <Col span={2}></Col>
                <Col span={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                    <p onClick={showModal}>Add Tag<CaretDownFilled />
                    <TagDisplay job={job} extended={false}/></p>
                    <p>{daysAgo === 0 ? 'Today' : daysAgo === 1 ? '1 day ago' : `${daysAgo} days ago`}</p>
                </Col>
                <Modal
                    className='user-tag-modal'
                    title='Add Tag'
                    visible={state.visible}
                    closable={false}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okButtonProps={{className: 'modal-save'}} 
                    cancelButtonProps={{className: 'modal-cancel'}}
                    okText='Confirm' 
                    cancelText='Cancel'
                >
                    <AddTag job={job} />
                </Modal>
            </div>
            :
            null    
            }
        </>
    )
}
 
export default SearchTagged;