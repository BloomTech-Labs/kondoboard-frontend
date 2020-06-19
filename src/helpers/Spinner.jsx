import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Spinner = () => {
    return (
    <Spin className='loading' indicator={<LoadingOutlined style={{ fontSize: 144}} spin/>}/>
    )
}

export default Spinner;
