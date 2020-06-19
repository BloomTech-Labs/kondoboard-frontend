import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSavedJob } from '@state/selectors.js';

import { Modal } from 'antd';

import DateHelper from '@helpers/DateConversion.js';
import JobController from '@controllers/JobController.js';

import TagsDisplay from '../savedjobcomponents/TagsDisplay.jsx';

import { CaretDownFilled } from '@ant-design/icons';

const DetailedJob = () => {
    const [visible, setVisible] = useState(false);

    const job = useSelector(selectSavedJob);
    const id = job.jobs_id;
    const users_jobs_id = job.id;

    const daysAgo = DateHelper.convertToDays(job.date_published);

    const handleCancel = e => {
        setVisible(false)
    }

    const handleOk = e => {
        JobController.setApplied(users_jobs_id, job)
        JobController.addToCol(users_jobs_id)
        setVisible(false)
    }

    const apply = e => {
        e.preventDefault();
        window.open(job.source_url);
        setVisible(true);
    }
    
    return(
        <>
            {job.id ?
                        <div style={{width: '75%', marginTop: '5%'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h1 style={{marginTop: '-3%'}}>{job && job.company}</h1>
                            <p>{(daysAgo === 0) ? job && 'Today' : (daysAgo === 1) ? job && '1 day ago' : job && `${daysAgo} days ago`}</p>
                            <p>{job && 'Add Tag'}{job && <CaretDownFilled />}</p>
                            <TagsDisplay job={job} extended={false}/>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div>
                                <p>{job && job.title}</p>
                                <p>{job.location_city}, {job.location_state}</p>
                            </div>
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
                        <p>{job && job.description}</p>
                    </div>
                    :
                        null
                        }
        </>
    )
}
export default DetailedJob;