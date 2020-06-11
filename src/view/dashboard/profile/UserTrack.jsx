import React from 'react'
import { Tag } from 'antd';

const UserTrack = ({form, setForm}) => {

    const { CheckableTag } = Tag;
    const tagsData = ['Web Development', 'iOS Development', 'Data Science', 'UX/Web Design'];

    const changeTag = (tag) => {
        if (form.tag === tag) {
            return;
        } else {
            setForm({...form, user_track: tag});
        }
    }

    return (
        <div className='field-container'>
        <span>User Track: </span>
            {tagsData.map(tag => (
            <CheckableTag className={form.user_track !== tag ? 'track-tag' : 'track-tag-check'} key={tag} checked={form.user_track === tag} onChange={() => changeTag(tag)}>
                {tag}
            </CheckableTag>
            ))}
        {form.user_track === '' && <p className='err'>Please Select a Track</p>}
        </div>
    )
}

export default UserTrack;
