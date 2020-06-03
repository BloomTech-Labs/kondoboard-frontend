import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { selectUser } from '@state/selectors.js';
import { useSelector } from 'react-redux';
import JobController from '@controllers/JobController';

const Job = props => {
    const job = props.job;
    const saved_job = {
        ds_id: props.job.id,
        source_url: props.job.source_url,
        title: props.job.title,
        company: props.job.company,
        description: props.job.description,
        date_published: props.job.date_published,
        location_city: props.job.location_city,
        location_state: props.job.location_state,
        geo_locat: props.job.geo_locat
    };
    const status = 'favorite';
    const id = useSelector(selectUser).id
    const addToSaved = e => {
        e.preventDefault();
        JobController.addSavedJob(id, saved_job, status);
    }

    return(
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)'}}>
            <p>{job.title}</p>
            <p>{job.company}</p>    
            <p>{job.location_city}</p>  
            <p>{job.date_published}</p>
            <span onClick={addToSaved}><PlusCircleOutlined /></span>
        </div>
    )
}

export default Job;