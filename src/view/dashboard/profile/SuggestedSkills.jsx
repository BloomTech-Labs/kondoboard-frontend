import React, { useState, useEffect } from 'react';
import { Tag } from 'antd';
import { dataSet } from './DataSet';

const SuggestedSkills = ({ form, setForm, user, pendingSkills, addSuggestedSkill }) => {

    const [track, setTrack] = useState(form.display_track.split(': ') || []);
    const [suggestedSkills, setSuggestedSkills] = useState([]);

    useEffect(() => {
        setTrack(form.display_track.split(': '));
    },[form.display_track]);

    useEffect(() => {
        let tmp = [];
        if (dataSet['skills'][track[0]] !== undefined && dataSet['skills'][track[1]] !== undefined) {
        tmp = [...dataSet['skills'][track[0]], ...dataSet['skills'][track[1]]];
        }
        setSuggestedSkills(tmp.filter(skill => {
            return !form.skills.includes(skill) && !pendingSkills.includes(skill) && 
            !form.skills.includes(skill.toLowerCase()) && !pendingSkills.includes(skill.toLowerCase()) &&
            !form.skills.includes(skill.toUpperCase()) && !pendingSkills.includes(skill.toUpperCase());
        }));
    },[track, form.skills, pendingSkills]);


    return (
        <>
        {suggestedSkills.length === 0 ? null :
            <div>
                <p className='suggested'>Suggested Skills: (click to add)</p>
                {suggestedSkills.map(skill => {
                    return <Tag key={skill} color='green' onClick={() => addSuggestedSkill(skill)}>{skill}</Tag>
                })}
            </div>
            }
        </>
    )
}

export default SuggestedSkills;
