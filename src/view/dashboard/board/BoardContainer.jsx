import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';
import '../../../App.css'

import BoardList from './BoardList';
import FeaturedPartners from './FeaturedPartners';

const { Header,  Sider, Content } = Layout;

const BoardContainer = () => {
    return(
        <div>
            <Layout>
                <Header style={{background: 'white'}}>
                    <Title style={{float: 'left'}}>
                        L Kondoboard
                    </Title>
                </Header>
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
                                <Breadcrumb.Item><BoardList /></Breadcrumb.Item>
                                <Breadcrumb.Item style={{float: 'right'}}><FeaturedPartners /></Breadcrumb.Item>
                            </Breadcrumb>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default BoardContainer;