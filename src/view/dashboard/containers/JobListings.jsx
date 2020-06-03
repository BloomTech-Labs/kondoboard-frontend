import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '@state/selectors';

import JobList from '../jobsearchcomponents/JobList.jsx';


const { Sider, Content } = Layout;

const JobListing = () => {

    useEffect(() => {

    }, [])

    return(
        <div>
            <Layout>
                <Layout style={{height: '80vh'}}>
                    <Sider style={{background: '#FAFAFA'}}>
                        <Menu style={{background: '#FAFAFA'}}>
                            <Menu.Item style={{background: '#FAFAFA'}}>
                                Web Development
                            </Menu.Item>
                        </Menu>
                        <Menu>
                            <Menu.Item style={{background: '#FAFAFA'}}>
                                Data Science
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
    )
}

export default JobListing;