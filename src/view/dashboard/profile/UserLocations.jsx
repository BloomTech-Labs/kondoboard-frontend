import React, { useState, useEffect } from 'react'
import { Modal, Button, Dropdown, Menu, Tag } from 'antd';
import { CaretDownFilled, AimOutlined, SearchOutlined } from '@ant-design/icons';
import { locations } from '@helpers/Locations';


// This would have been much simpler if we stuck with a single locations array on the user instead of city and state separately. Just sayin.

const UserLocations = ({form, setForm, user}) => {

    const [state, setState] = useState({visible: false, pending: false});
    const [pendingLocations, setPendingLocations] = useState({city: [], state: []});
    const [pendingJoined, setPendingJoined] = useState([]);
    const [userJoined, setUserJoined] = useState([]);
    const [search, setSearch] = useState({typed: '', filter: []});
    const [removedLocations, setRemovedLocations] = useState([]);
    const [joinedLocations, setJoinedLocations] = useState([]);
    const [isValid, setIsValid] = useState(false);


    useEffect(() => {
        let tmp = [];
        for (let i = 0; i < form.cities.length; i++) {
            tmp.push(`${form.cities[i]}, ${form.states[i]}`);
        }
        setJoinedLocations(tmp);
    },[form]);

    useEffect(() => {
        let tmp = [];
        for (let i = 0; i < pendingLocations.city.length; i++) {
            tmp.push(`${pendingLocations.city[i]}, ${pendingLocations.state[i]}`);
        }
        setPendingJoined(tmp);
    },[pendingLocations]);

    useEffect(() => {
        let tmp = [];
        for (let i = 0; i < user.cities.length; i++) {
            tmp.push(`${user.cities[i]}, ${user.states[i]}`);
        }
        setUserJoined(tmp);
    },[user]);

    const menuClick = (e) => {
        let loc = e.item.props.value;
        document.getElementById('location-search').value = loc;
        setIsValid(true);
    }
    

    const handleSearch = (e) => {
        setSearch({typed: e.target.value, filter: locations.filter(loc => {
            return loc.city.toLowerCase().includes(e.target.value.toLowerCase()) 
            && !pendingJoined.includes(`${loc.city}, ${loc.state}`)
        }).slice(0, 10),
        });
        setIsValid(false);
    }
    const showModal = () => {
        setState({...state, visible: true});
        let tmp = {city: [], state: []};
        joinedLocations.forEach(loc => {
            let split = loc.split(', ');
            if (!userJoined.includes(loc)) {
                tmp.city.push(split[0]);
                tmp.state.push(split[1]);
            }
        });
        setPendingLocations(tmp);
    }

    const handleOk = () => {
        setState({...state, pending: true});
        setTimeout(() => {
            setState({visible: false, pending: false});
        }, 1000);
        let tmp = {city: [], state: []};
        let edditedLocations = [
            ...joinedLocations.filter(loc => {return pendingJoined.includes(loc)}),
            ...pendingJoined.filter(loc => {return !joinedLocations.includes(loc)})
        ].filter(loc => {return !removedLocations.includes(loc)});
        for (let i = 0; i < edditedLocations.length; i++) {
            let split = edditedLocations[i].split(', ');
            tmp.city.push(split[0]);
            tmp.state.push(split[1]);
        }

        setForm({...form, cities: [...tmp.city], states: [...tmp.state]});
    }

    const handleCancel = () => {
        setState({...state, visible: false});
        setTimeout(() => {
            setPendingLocations({city: [], state: []});
        }, 500);
    }

    const addPendingLocations = (e) => {
        e.preventDefault();
        const loc = e.target[0].value.split(', ');
        setRemovedLocations(removedLocations.filter(loc => {
            return !loc.includes(e.target[0].value);
        }));
        if (isValid) {
        setPendingLocations({city: [...pendingLocations.city, loc[0]], state: [...pendingLocations.state, loc[1]]});
        }
        e.target.reset();
        setSearch({typed: '', filter: []})
    }

    const removeLocation = (loc) => {
        let split = loc.split(', ');
        let tmp = {city: [], state: []};
        for (let i = 0; i < pendingLocations.city.length; i++) {
            if (split[0] !== pendingLocations.city[i] || split[1] !== pendingLocations.state[i]) {
                tmp.city.push(pendingLocations.city[i]);
                tmp.state.push(pendingLocations.state[i]);
            }
        }
        setPendingLocations(tmp);
        setRemovedLocations([...removedLocations, loc]);
    }

    const menu = (
        <Menu onClick={menuClick}>
            {search.typed.length > 0 && 
            search.filter.map(loc => {
                return <Menu.Item key={loc.city+loc.state} value={`${loc.city}, ${loc.state}`}>{`${loc.city}, ${loc.state}`}</Menu.Item>
            })
            }
        </Menu>
    );

    return (
        <div className='field-container'>
        <div className='container'>
            <p>Locations</p>
            <div className='location-box'>{joinedLocations.map(loc => {
                return <p key={loc} className={userJoined.includes(loc) ? 'location saved' : 'location pending'}>{loc}</p>
            })}
            </div>
        </div>
        <a className='ant-dropdown-link' onClick={showModal}>Add City <CaretDownFilled className='ico-caret'/></a>
        <Modal
         title='Add City' visible={state.visible} closable={false} onOk={handleOk} confirmLoading={state.pending} onCancel={handleCancel}
         okText='Save' cancelText='Cancel' okButtonProps={{className: 'modal-save'}} cancelButtonProps={{className: 'modal-cancel'}}>

            <form className='modal-input' onSubmit={addPendingLocations} autoComplete='off'>
            <AimOutlined style={{fontSize: '2.4rem'}}/>        
            <Dropdown overlay={menu} trigger={['focus']} placement='bottomCenter'>
            <input placeholder='Search...' size='large' onChange={handleSearch} id='location-search' prefix={<SearchOutlined style={{fontSize: '2rem'}}/>} />
            </Dropdown>
                <Button size='large' className='modal-add' htmlType='submit' disabled={!isValid}>Add</Button>
            </form>
                {pendingLocations.city && <div className='skill-box-modal'>
                    {joinedLocations.map(loc => {
                        let locSplit = loc.split(', ');
                        return pendingLocations.city.includes(locSplit[0]) === true && pendingLocations.state.includes(locSplit[1]) ? 
                        null
                        : removedLocations.includes(loc) === true ?
                        null
                        :
                        <Tag closable color='default' onClose={() => removeLocation(loc)} className='modal-tag' key={loc}>{loc}</Tag>
                    })}
                    {pendingJoined.map(loc => {
                    return <Tag color='purple' closable onClose={() => removeLocation(loc)} className='modal-tag' key={loc}>{loc} </Tag>
                })}
                </div>}
        </Modal>
    </div>
    )
}

export default UserLocations;
