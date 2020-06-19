import React, { useState, useEffect } from 'react';
import { colors } from '@helpers/Colors.js';
import { Button, Menu, Dropdown } from 'antd';

import { useSelector } from 'react-redux';

import { selectSavedJobList } from '@state/selectors.js';
import { selectJobTags } from '@state/selectors.js';
import { selectUserId } from '@state/selectors.js';

import JobController from '@controllers/JobController.js';

import JobHelpers from '@helpers/Job.js';
import IdHelpers from '@helpers/SavedJobId.js';
import ArrHelpers from '@helpers/FilterOutTag.js';
import DupHelpers from '@helpers/TagDuplicateChecker';

import TagsDisplay from '@dashboard/savedjobcomponents/TagsDisplay.jsx';


const AddTag = props => {
    const [tagName, setTagName] = useState('');
    const [color, setColor] = useState(null);
    const saved = useSelector(selectSavedJobList)
    const id = useSelector(selectUserId);
    const job = props.job;
    const job_id = job.ds_id || job.id;
    const saved_job = JobHelpers.formatSavedJob(job);
    const savedIds = IdHelpers.filterJobIds(saved)
    const tags = useSelector(selectJobTags);
    const list = DupHelpers.removeDuplicates(tags)
    const notTagged = ArrHelpers.filterOutTag(list, job_id);


    useEffect(() => {
    },[color]);


    const menuClick = (e) => {
        setTagName(e.item.props.name);
        setColor(e.item.props.color);
    }

    const enterTag = e => {
        setTagName(e.target.value)
    }

    const enterColor = e => {
        setColor(e.target.style.backgroundColor)
    }

    useEffect(() => {
        JobController.fetchSavedJobList(id);
    }, [])

    const submitTag = e => {
        e.preventDefault();
        savedIds.includes(job.ds_id || job.id) ? JobController.getJobTags() : JobController.addSavedJob(id, saved_job)
        JobController.addTag(tagName, id, color, job_id)
        setTagName('')
        setColor(null)
    }

    const menu = (
        <Menu onClick={menuClick}>
            {notTagged && notTagged.map(tag => {
                return <Menu.Item 
                className='tag-search-item' 
                style={{color: `${tag.color}`}}
                name={tag.tag_name} 
                color={tag.color}
                ds_id={tag.job_id}
                >
                    {tag.tag_name}
                </Menu.Item>
            })}
        </Menu>
    )

    return(
        <>
        <form onSubmit={submitTag}>
                <TagsDisplay job={job} extended={true}/>   
            <div className='container'>
            <Dropdown overlay={menu} trigger={['focus']} placement='bottomCenter'>
            <input
                placeholder='New Tag...'
                name='tag_name'
                label='tag_name'
                value={tagName}
                id='tag_name'
                type='text'
                onChange={enterTag}
                style={{color: `${color===null ? 'black' : color}`}}
            />
            </Dropdown>
            <Button size='normal' className='modal-add' htmlType='submit' disabled={color===null || tagName===''} onClick={submitTag}>Add</Button>
            </div>
            <div className='tag-colors-box'>
                {colors.map(col => {
                    return <button key={col} className={`${col===color ? 'tag-color-active' : ''} tag-color `} onClick={enterColor} style={{background: col}} />
                })}
            </div>
        </form>
        </>
    )
}

export default AddTag;
