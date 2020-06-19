import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { PlusOutlined } from '@ant-design/icons';

import { selectJobColumns } from '@state/selectors.js';
import { selectUserId } from '@state/selectors.js';

import JobController from '../../../controllers/JobController';

const AddColumn = () => {
    const columns = useSelector(selectJobColumns);
    const id = useSelector(selectUserId);
    const [name, setName] = useState('');
    const [location] = useState(columns.length + 1)
    const handleNameChange = e => {
        setName(e.target.value)
    }
    const addColumn = e => {
        e.preventDefault();
        JobController.addColumn(id, name, location);
        setName('');
    }
    return(
        <div>
            <form onSubmit={addColumn}>
                <input
                    value={name}
                    placeholder='Add a column'
                    name='name'
                    type='text'
                    onChange={handleNameChange}
                />
                <span type='submit'><PlusOutlined /></span>
            </form>
        </div>
    )
}

export default AddColumn;