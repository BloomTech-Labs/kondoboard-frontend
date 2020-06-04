import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

import JobList from '../jobsearchcomponents/JobList.jsx';
import UserValidation from '../profile/UserValidation.jsx';

const { Sider, Content } = Layout;

const JobListing = () => {
  return (
    <div>
      <Layout>
        <UserValidation />
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
          </Sider>
          <Layout style={{height: '80vh'}}>
            <Content>
              <Breadcrumb style={{float: 'left', display: 'flex', justifyContent: 'space-around', marginLeft: '5%'}}>
                <Breadcrumb.Item><JobList /></Breadcrumb.Item>
                <Breadcrumb.Item style={{float: 'right'}}></Breadcrumb.Item>
              </Breadcrumb>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default JobListing;
