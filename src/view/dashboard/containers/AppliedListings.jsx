import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import AppliedJobList from '@dashboard/appliedjobs/AppliedJobList.jsx';
import SideBar from '@dashboard/nav/SideBar.jsx';

const { Sider, Content } = Layout;

const AppliedJobListings = () => {
    return(
        <div>
            <Layout>
                <Layout style={{height: '80vh', backgroundColor: 'white'}}>
                    <Sider style={{background: 'white'}}>
                        <SideBar />
                    </Sider>
                    <Layout style={{height: '80vh', background: 'white'}}>
                        <Content>
                            <Breadcrumb style={{float: 'left', display: 'flex', justifyContent: 'space-around', marginLeft: '5%'}}>
                                <Breadcrumb.Item><AppliedJobList /></Breadcrumb.Item>
                                <Breadcrumb.Item style={{float: 'right'}}></Breadcrumb.Item>
                            </Breadcrumb>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default AppliedJobListings;