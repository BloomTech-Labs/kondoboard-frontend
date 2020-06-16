import React from 'react'
import { Menu, Dropdown } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';
import { dataSet } from './DataSet';

const UserTrack = ({form, setForm}) => {

    const { SubMenu } = Menu;

    const handleClick = (e) => {
       const p = e.item.props;
        setForm({...form, user_track: `${dataSet[p.menu][0]} ${dataSet[p.menu][p.op]}`, display_track: `${p.menu}: ${dataSet['display'][p.menu][p.op]}`});

    }

    const menu = (
        <Menu onClick={handleClick}>
            <SubMenu title='Web Development'>
                <Menu.Item menu='Web' op={1}>{dataSet['display']['Web'][1]}</Menu.Item>
                <Menu.Item menu='Web' op={2}>{dataSet['display']['Web'][2]}</Menu.Item>
                <Menu.Item menu='Web' op={3}>{dataSet['display']['Web'][3]}</Menu.Item>
                <Menu.Item menu='Web' op={4}>{dataSet['display']['Web'][4]}</Menu.Item>
            </SubMenu>
            <SubMenu title='Data Science'>
                    <Menu.Item menu='DS' op={1}>{dataSet['display']['DS'][1]}</Menu.Item>
                    <Menu.Item menu='DS' op={2}>{dataSet['display']['DS'][2]}</Menu.Item>
                    <Menu.Item menu='DS' op={3}>{dataSet['display']['DS'][3]}</Menu.Item>
                    <Menu.Item mneu='DS' op={4}>{dataSet['display']['DS'][4]}</Menu.Item>
            </SubMenu>
            <SubMenu title='UI / UX'>
                <Menu.Item menu='UX' op={1}>{dataSet['display']['UX'][1]}</Menu.Item>
                <Menu.Item menu='UX' op={2}>{dataSet['display']['UX'][2]}</Menu.Item>
                <Menu.Item menu='UX' op={3}>{dataSet['display']['UX'][3]}</Menu.Item>
                <Menu.Item menu='UX' op={4}>{dataSet['display']['UX'][4]}</Menu.Item>
            </SubMenu>
            <SubMenu title='iOS'>
                <Menu.Item menu='iOS' op={1}>{dataSet['display']['iOS'][1]}</Menu.Item>
            </SubMenu>
            
        </Menu>
    );

    return (
        <div className='field-container'>
            <div className='container'>
            <p>User Track</p>
            <p className='track'>{form.display_track}</p>
            </div>

        <Dropdown overlay={menu} trigger={['click']} placement='bottomCenter'>
            <a className='ant-dropdown-link'>User Track <CaretDownFilled className='ico-caret'/></a>
        </Dropdown>
        </div>
    )
}

export default UserTrack;
