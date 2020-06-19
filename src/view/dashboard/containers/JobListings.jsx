import React from 'react';
import { Layout, Row, Col } from 'antd';

import JobList from '@dashboard/jobsearchcomponents/JobList.jsx';
import DetailedJob from '@dashboard/detailedjob/DetailedJob.jsx';

const { Content } = Layout;

const JobListing = () => {
    return(
        <div className='job-listings'>
            <Layout style={{height: '80vh', background: 'white'}}>
                <Content>
                    <Row>
                        <Col span={10}><JobList /></Col>
                        <Col span={2}></Col>
                        <Col span={12}><DetailedJob /></Col>
                    </Row>
                </Content>
            </Layout>
        </div>
    )
}

export default JobListing;