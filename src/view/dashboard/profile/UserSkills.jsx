import React, { useState } from 'react'
import { CaretDownFilled, AuditOutlined, SearchOutlined } from '@ant-design/icons';
import { Modal, Button, Tag, Dropdown, Menu } from 'antd';
import SuggestedSkills from './SuggestedSkills';
import { skills } from './SkillList';


const UserSkills = ({form, setForm, user}) => {

    const [state, setState] = useState({visible: false, pending: false});
    const [pendingSkills, setPendingSkills] = useState([]);
    const [removedSkills, setRemovedSkills] = useState([]);
    const [search, setSearch] = useState({typed: '', filter: []});
    const [isValid, setIsValid] = useState(false);

    const showModal = () => {
        setState({...state, visible: true});
        setPendingSkills(form.skills.filter(skill => {return !user.skills.includes(skill)}));
    }

    const handleOk = () => {
        setState({...state, pending: true});
        setTimeout(() => {
            setState({visible: false, pending: false});
            document.getElementById('skill-search').value = '';
        }, 1000);

        let edittedSkills = [
            ...form.skills, 
            ...pendingSkills.filter(skill => {return !form.skills.includes(skill)})
        ].filter(skill => {return !removedSkills.includes(skill)});

        setForm({...form, skills: [...edittedSkills]});
    }

    const handleCancel = () => {
        setState({...state, visible: false});
        setTimeout(() => {
            setPendingSkills([]);
            setRemovedSkills(removedSkills.filter(skill => {
                return !form.skills.includes(skill);
            }));
        }, 500);

    }

    const menuClick = (e) => {
        document.getElementById('skill-search').value = e.item.props.value;
        setIsValid(true);
    }

    const handleSearch = (e) => {
        let typed = e.target.value  || '';
        const mostRelevant = [];

        // Filters all results by whole string inclusion
        skills.filter(s => {
            return s.toLowerCase().includes(typed.toLowerCase()) 
            && form.skills.includes(s) ? removedSkills.includes(s) ? true : false : true 
            && !pendingSkills.includes(s)
        }).forEach(s => {

            // Add marker to end of string to signify exit condition for next loop
            if (s.length > typed.length) {
                typed += '~';
            }

            // Determines relevancy of matches by total number of charcter matches in the string
            let score = 0;

            for (let i = 0; i < s.length; i++) {
                if (s[i].toLowerCase() === typed[i].toLowerCase()) {
                    score += 1;
                } else { /* End the loop once final score is determined */
                    i = s.length;
                }
            }
            mostRelevant.push({score: score, s: s});
        });

        // Sorts results based on score
        const results = mostRelevant.sort((a, b) => {
            if (a.score < b.score) {
                return 1;
            } else {
                return -1;
            }
        }).map(object => { /* map results for display */
            return object.s;
        }).slice(0, 10); /* limit to top 10 */

        // Update search
        setSearch({typed: e.target.value, filter: results});

        setIsValid(false);

    }

    const addPendingSkills = (e) => {
        e.preventDefault();
        let skill = e.target[0].value;
        let duplicate = false;
        if (pendingSkills.includes(skill) | form.skills.includes(skill) && !removedSkills.includes(skill)) {
            duplicate = true;
        }
        if (duplicate) {
            alert('Already Added');
        } else {
            setPendingSkills([...pendingSkills, e.target[0].value]);
            setSearch({typed: '', filter: []})
        }
        setRemovedSkills([...removedSkills.filter(s => {return s !== skill})]);
        e.target.reset();
    }

    const addSuggestedSkill = (skill) => {
        let duplicate = false;
        setRemovedSkills([...removedSkills.filter(s => {return s !== skill})]);
        if (pendingSkills.includes(skill) || form.skills.includes(skill)) {
            duplicate = true;
        }
        if (!duplicate) {
    
            setForm({...form, skills: [...form.skills, skill]});
        }
    }

    const removeSkill = (skill) => {
        setPendingSkills(pendingSkills.filter(s => {
            return s !== skill;
        }));
        setRemovedSkills([...removedSkills, skill])
    }

    const menu = (
        <Menu onClick={menuClick}>
            {search.typed.length > 0 && 
            search.filter.map(skill => {
                return <Menu.Item key={skill} value={skill}>{skill}</Menu.Item>
            })
            }
        </Menu>
    );

    return (
        <div className='field-container'>
            <div className='container'>
                <p>Skills</p> 
                <div className='skill-box'>{form.skills.map(skill => {
                return <p key={skill} className={user.skills.includes(skill) ? 'skill saved' : 'skill pending'}>{skill}</p>
            })}
            </div>
            <SuggestedSkills form={form} setForm={setForm} user={user} pendingSkills={pendingSkills} addSuggestedSkill={addSuggestedSkill} />
            </div>
            <button className='ant-dropdown-link' onClick={showModal}>Edit Skills <CaretDownFilled className='ico-caret'/></button>
            <Modal
             title='Edit Skills' visible={state.visible} closable={false} onOk={handleOk} confirmLoading={state.pending} onCancel={handleCancel}
             okText='Save' cancelText='Cancel' okButtonProps={{className: 'modal-save'}} cancelButtonProps={{className: 'modal-cancel'}}>

                <form className='modal-input' onSubmit={addPendingSkills} autoComplete='off'>
                <AuditOutlined style={{fontSize: '2.4rem'}}/>
                <Dropdown overlay={menu} trigger={['focus']} placement='bottomCenter'>
                    <input placeholder='Search...' size='large' onChange={handleSearch} id='skill-search'/>
                </Dropdown>
                    <Button size='large' className='modal-add' htmlType='submit' disabled={!isValid}>Add</Button>
                </form> 
                {pendingSkills && <div className='skill-box-modal'>
                    {form.skills.map(skill => {
                        return pendingSkills.includes(skill) === true ? 
                        null
                        : removedSkills.includes(skill) === true ?
                        null
                        :
                        <Tag closable color='default' onClose={() => removeSkill(skill)} className='modal-tag' key={skill}>{skill}</Tag>
                    })}
                    {pendingSkills.map(skill => {
                    return <Tag color='purple' closable onClose={() => removeSkill(skill)} className='modal-tag' key={skill}>{skill} </Tag>
                })}
                </div>}
            </Modal>

        </div>
    )
}

export default UserSkills;
