import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import SavedJobList from '../savedjobcomponents/SavedJobsList.jsx';
import DetailedJob from '../detailedjob/DetailedJob.jsx';

const { Sider, Content } = Layout;

const SavedListings = () => {
    return(
        <div>
            <Layout>
                <Layout style={{height: '80vh'}}>
                    <Sider style={{background: '#FAFAFA'}}>
                        <Menu style={{background: '#FAFAFA'}}>
                            <Menu.Item style={{background: '#FAFAFA'}}>
                            <Link to='/'>Jobs</Link>
                            </Menu.Item>
                        </Menu>
                        <Menu>
                            <Menu.Item style={{background: '#FAFAFA'}}>
                                <Link to='/saved'>Saved Jobs</Link>
                            </Menu.Item>
                        </Menu>
                        <Menu>
                            <Menu.Item style={{background: '#FAFAFA'}}>
                                <Link to='/applied'>Applied Jobs</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{height: '80vh'}}>
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