import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '@state/selectors';

import JobList from '../jobsearchcomponents/JobList.jsx';
import LoginController from '../../../controllers/LoginController.js';
import ProfileController from '../../../controllers/ProfileController.js';

const { Sider, Content } = Layout;

const JobListing = () => {

    const token = window.localStorage.getItem('kondotoken');
    const jwt = require('jsonwebtoken');
    const email = jwt.decode(token).email;
    const name = jwt.decode(token).name;
    const first_name = name.split(' ')[0];
    const last_name = name.split(' ')[1];

    console.log(last_name)

    const [user, setUser] = useState({
        email: email,
        first_name: first_name,
        last_name: last_name
    })

    let [infoNeeded, setInfoNeeded] = useState(false);

    useEffect(() => {
        LoginController.userVerification();
        if (!user.id) {
            setInfoNeeded(true);
            ProfileController.addNewUser(user);
            setInfoNeeded(false)
        }
    }, [])

    return(
        <div>
            {infoNeeded && <Redirect to='/profile'/> /**Redirect to profile if user info does not exist */}
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