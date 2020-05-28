import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '@state/selectors';

import JobList from '../jobsearchcomponents/JobList.jsx';

const { Header,  Sider, Content } = Layout;



const BoardContainer = () => {
    
    const token = window.localStorage.getItem('kondotoken')
    const jwt = require('jsonwebtoken');
    const email = jwt.decode(token).email;

    let [infoNeeded, setInfoNeeded] = useState(false);
    let user = useSelector(selectUser);

    useEffect(() => {
        let getUser = async () => {
            //store.dispatch action for getting user(send email as parameter)
            //then if user does not exist, use below if statement to redirect user to profile page to gather additional information, and register user
            // or if you can think of a better or more efficient way feel free to implement it, maybe ask austin as well I didn't have much time
            // to think through the whole process, but on the profile component we can easily display a form that only shows if the user hasent registered yet
            // and a completely different set of data if they have i.e their normal profile view, this form will be a one time use only for initial set up
            if (JSON.stringify(user) === '{}') {
                setInfoNeeded(true);
            }
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
                            <Breadcrumb style={{display: 'flex', justifyContent: 'space-around', background: 'white'}}>
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

export default BoardContainer;