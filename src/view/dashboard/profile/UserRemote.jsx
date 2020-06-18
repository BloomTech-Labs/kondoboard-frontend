import React from 'react'
import { CaretDownFilled } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';

const UserRemote = ({form, setForm}) => {

    const handleClick = (e) => {
        setForm({...form, remote: e.item.props.op === 0 ? true : false});
    }
    const menu = (
        <Menu onClick={handleClick}>
            <Menu.Item op={0}>Yes</Menu.Item>
            <Menu.Item op={1}>No</Menu.Item>
        </Menu>
    )
    return (
        <div className='field-container'>
            <div className='container'>
            <p>Remote</p>
            <p className='remote'>{form.remote === true ? 'Yes' : 'No'}</p>
            </div>
            <Dropdown overlay={menu} trigger={['click']}>
            <a className='ant-dropdown-link'>Remote <CaretDownFilled className='ico-caret'/></a>
        </Dropdown>
        </div>
    )
}

export default UserRemote;
