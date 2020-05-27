import React from 'react';
import { Layout } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';


import JobBoard from '../jobtrackercomponents/JobBoard.jsx';
import DummyData from '../jobtrackercomponents/DummyData.jsx';
import '../../../App.css'

const { Header, Content } = Layout;

function JobTracker() {
    return(
        <div>
        <Layout>
          <Header style={{background: 'white', float: 'left'}}>
            <Title>Kondoboard</Title>
          </Header>
          <Layout>
            <Content style={{display: 'flex'}}>
            <div>
              <h1>Applied</h1>
              {/* <JobBoard>
                <DummyData>
                  <p>Job one</p>
                </DummyData>
                <DummyData>
                  <p>Job two</p>
                </DummyData>
                <DummyData>
                  <p>Job three</p>
                </DummyData>
                <DummyData>
                  <p>Job four</p>
                </DummyData>
              </JobBoard> */}
              <JobBoard id='board-1' className='board'>
                <DummyData id='1' className='job' draggable='true'>
                    <p>Job one</p>
                </DummyData>
                <DummyData id='2' className='job' draggable='true'>
                    <p>Job two</p>
                </DummyData>
                <DummyData id='3' className='job' draggable='true'>
                    <p>Job three</p>
                </DummyData>
                <DummyData id='4' className='job' draggable='true'>
                    <p>Job four</p>
                </DummyData>
              </JobBoard>
              </div>
              <div>
                  <h1>Phone Interview</h1>
                  <JobBoard id='board-2' className='board' />
              </div>
              <div>
                  <h1>Interview</h1>
                  <JobBoard id='board-3' className='board' />
              </div>
              <div>
                  <h1>Second Interview</h1>
                  <JobBoard id='board-4' className='board' />
              </div>
              <div>
                  <h1>Third Interview</h1>
                  <JobBoard id='board-5' className='board' />
              </div>
              <div>
                  <h1>Offer</h1>
                  <JobBoard id='board-6' className='board' />
              </div>
            </Content>
          </Layout>
        </Layout>
        </div>
    )
}

export default JobTracker;