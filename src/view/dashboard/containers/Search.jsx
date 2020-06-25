import React, { useState } from 'react'

import { Row, Col } from 'antd';

import JobList from '@dashboard/jobsearchcomponents/JobList.jsx';
import SavedJobList from '@dashboard/savedjobcomponents/SavedJobsList.jsx';
import DetailedJob from '@dashboard/detailedjob/DetailedJob.jsx';


const Search = () => {

    const [nav, setNav] = useState('search');
    const [currentJob, setCurrentJob] = useState(null);

    return (
        <div className='job-listings'>
            <div className='search-nav'>
                <h6 className = {nav === 'search' ? 'selected-left' : 'left'} onClick={() => {setNav('search')} }>Results</h6>
                <h6 className = {nav === 'saved' ? 'selected-right' : 'right'} onClick={() => {setNav('saved')} }>Tagged</h6>
            </div>
        <Row>
            {nav === 'search' ? 
            <JobList currentJob={currentJob} setCurrentJob={setCurrentJob}/> 
            : 
            <SavedJobList currentJob={currentJob} setCurrentJob={setCurrentJob}/>}
            <Col span={2}></Col>
            <Col span={12}><DetailedJob nav={nav}/></Col>
        </Row>
    </div>
    )
}


export default Search;
