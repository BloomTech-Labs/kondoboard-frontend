import React, { useState } from 'react';

import JobController from '@controllers/JobController.js';
import CityHelpers from '@helpers/City.js';

import { Select } from 'antd';

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
        <form className='job-search' onSubmit={handleSearchSubmit}>
            <div className='input'>
                <input
                    autoComplete='off'
                    placeholder='Search for...'
                    name='search'
                    label='search'
                    value={search}
                    id='search'
                    type='text'
                    onChange={handleSearchChange}
                />

                <Select className='drop' defaultValue="Select State" onChange={handleStateChange}>
                    {states && states.map(qState => {
                        return <Option key={qState} value={qState}>{qState}</Option>
                    })}
                </Select>

                <Select className='drop' defaultValue="Select City" onChange={handleCityChange}>
                    {cities && cities.map(qCity => {
                        return <Option value={qCity}>{qCity}</Option>
                    })}
                </Select>

                <button size='large' onClick={handleSearchSubmit}>Search</button>
            </div>

        </form>
    )
}

export default JobSearch;
