import React, { useState } from 'react';

import JobController from '@controllers/JobController.js';
import CityHelpers from '@helpers/City.js';

import { Select, Col } from 'antd';

import { states } from '@helpers/StatesList.js';

const JobSearch = () => {
    const [search, setSearch] = useState('');
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);
    
    const cities = CityHelpers.checkAgainstLocationsObject(state)

    const { Option } = Select;

    const handleSearchChange = e => {
        setSearch(e.target.value);
    }

    function handleStateChange(value) {
        setState(value)
    }

    function handleCityChange(value) {
        setCity(value);
    }
    
    const handleSearchSubmit = e => {
        e.preventDefault();
        JobController.searchJobs(search, city, state);
    }
    
    return(
        <>
            <form
                onSubmit={handleSearchSubmit}
                name="Search"
                style={{display: 'flex', }}
            >
                <Col span={6}>
                    <h2>Job/Skill</h2>
                    <input
                        placeholder='Search by job title or skill'
                        name='search'
                        label='search'
                        value={search}
                        id='search'
                        type='text'
                        onChange={handleSearchChange}
                    />
                </Col>
                <Col span={6}>
                    <h2>State</h2>
                    <Select defaultValue="Select State" onChange={handleStateChange}>
                        {states && states.map(qState => {
                            return <Option key={qState} value={qState}>{qState}</Option>
                        })}
                    </Select>
                </Col>
                <Col span={6}>
                    <h2>City</h2>
                    <Select defaultValue="Select City" onChange={handleCityChange}>
                        {cities && cities.map(qCity => {
                            return <Option value={qCity}>{qCity}</Option>
                        })}
                    </Select>
                </Col>
                <Col span={6}>
                    <h2>Go</h2>
                    <button type="submit" onSubmit={handleSearchSubmit}>Search</button>
                </Col>
            </form>
        </>
    )
}

export default JobSearch;
