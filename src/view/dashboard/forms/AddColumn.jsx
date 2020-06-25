import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { PlusOutlined } from '@ant-design/icons';

import { selectJobColumns } from '@state/selectors.js';
import { selectUserId } from '@state/selectors.js';

import JobController from '@controllers/JobController';

const AddColumn = ({ update, setUpdate }) => {
    const columns = useSelector(selectJobColumns);
    const id = useSelector(selectUserId);
    const [name, setName] = useState('');
    const [location] = useState(columns.length + 1)

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const addColumn = async e => {
        e.preventDefault();
        const savedJobs = []
        await JobController.addColumn(id, name, location, savedJobs);
        setName('');
        setUpdate(!update);
    }
    return(
            <form className='add-column' onSubmit={addColumn}>
                <input
                    autoComplete='off'
                    required
                    value={name}
                    placeholder='Add a column'
                    name='name'
                    type='text'
                    onChange={handleNameChange}
                />
                <button type='submit'><PlusOutlined /></button>
            </form>
    )
}

export default AddColumn;