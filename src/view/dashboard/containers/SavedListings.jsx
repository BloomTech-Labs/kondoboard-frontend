import React from 'react';
import { Layout, Row, Col } from 'antd';

import SavedJobList from '@dashboard/savedjobcomponents/SavedJobsList.jsx';
import DetailedJob from '@dashboard/detailedjob/DetailedJob.jsx';
import SideBar from '@dashboard/nav/SideBar.jsx';

const { Sider, Content } = Layout;

const SavedListings = () => {
    return(
        <div>
            <Layout>
                <Layout>
                    <Sider style={{background: 'white'}}>
                        <SideBar />
                    </Sider>
                    <Layout style={{height: '80vh', background: 'white'}}>
                        <Content>
                            <Row>
                                <Col span={8}><SavedJobList /></Col>
                                <Col span={4}></Col>
                                <Col span={12}><DetailedJob /></Col>
                            </Row>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default SavedListings;