import React from 'react';
import { Layout, Row, Col } from 'antd';

import JobList from '../jobsearchcomponents/JobList.jsx';
import DetailedJob from '../detailedjob/DetailedJob.jsx';
import SideBar from '../nav/SideBar.jsx';

const { Sider, Content } = Layout;

const JobListing = () => {
    return(
        <div>
            <Layout>
                <Layout style={{height: '80vh'}}>
                    <Sider style={{background: 'white'}}>
                        <SideBar />
                    </Sider>
                    <Layout style={{height: '80vh', background: 'white'}}>
                        <Content>
                            <Row>
                                <Col span={10}><JobList /></Col>
                                <Col span={2}></Col>
                                <Col span={12}><DetailedJob /></Col>
                            </Row>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default JobListing;