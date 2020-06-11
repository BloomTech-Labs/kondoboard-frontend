import React, { useState } from 'react';

import JobController from '@controllers/JobController.js';
import CityHelpers from '../../../helpers/City.js';

import { Select } from 'antd';

import { states } from '../../../helpers/StatesList.js';

const JobSearch = () => {
    const [search, setSearch] = useState('');
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);

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

    const cities = CityHelpers.checkAgainstLocationsObject(state)
    
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
    return(
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input
                    placeholder='Search by job title'
                    name='search'
                    value={search}
                    id='search'
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
