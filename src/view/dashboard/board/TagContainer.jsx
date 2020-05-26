import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';
import '../../../App.css';

import TagList from './TagList';
import FeaturedPartners from './FeaturedPartners';

const { Header, Content } = Layout;

const TagContainer = () => {
    return(
        <div>
            <Layout>
                <Header style={{background: 'white'}}>
                    <Title style={{float: 'left'}}>
                        L Kondoboard
                    </Title>
                </Header>
                <Layout>
                    <Content>
                        <Breadcrumb>
                            <Breadcrumb.Item><TagList /></Breadcrumb.Item>
                            <Breadcrumb.Item><FeaturedPartners /></Breadcrumb.Item>
                        </Breadcrumb>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default TagContainer;