import React, { useState } from 'react';

import JobController from '@controllers/JobController.js';
import CityHelpers from '../../../helpers/City.js';

import { Select } from 'antd';

import { states } from '../../../helpers/StatesList.js';

const JobSearch = () => {
    const [title, setTitle] = useState('');
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);
    const { Option } = Select;
    const handleSearchChange = e => {
        setTitle(e.target.value);
    }

    function handleStateChange(value) {
        console.log('value is', value)
        setState(value)
    }

    function handleCityChange(value) {
        setCity(value);
    }

    const cities = CityHelpers.checkAgainstLocationsObject(state)
    console.log('cities', cities)
    
    const statesDropDown = (
        <Select defaultValue="Select State" onChange={handleStateChange}>
            {states && states.map(qState => {
                return <Option value={qState}>{qState}</Option>
            })}
        </Select>
    )

    const citiesDropDown = (
        <Select defaultValue="Select City" onChange={handleCityChange}>
            {cities && cities.map(qCity => {
                return <Option value={qCity}>{qCity}</Option>
            })}
        </Select>
    )
    
    const handleSearchSubmit = e => {
        e.preventDefault();
        console.log('search for', {title, city, state})
        JobController.searchJobs(title, city, state);
    }
    return(
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input
                    placeholder='Search by title'
                    name='title'
                    value={title}
                    id='title'
                    type='text'
                    onChange={handleSearchChange}
                />
            {statesDropDown}
            {citiesDropDown}
            <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default JobSearch;
