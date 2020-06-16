import React, { useState } from 'react'
import { CaretDownFilled, AuditOutlined } from '@ant-design/icons';
import { Modal, Button, Tag } from 'antd';
import SuggestedSkills from './SuggestedSkills';


const UserSkills = ({form, setForm, user}) => {

    const [state, setState] = useState({visible: false, pending: false});
    const [pendingSkills, setPendingSkills] = useState([]);
    const [removedSkills, setRemovedSkills] = useState([]);

    const showModal = () => {
        setState({...state, visible: true});
        setPendingSkills(form.skills.filter(skill => {return !user.skills.includes(skill)}));
    }

    const handleOk = () => {
        setState({...state, pending: true});
        setTimeout(() => {
            setState({visible: false, pending: false});
        }, 1000);

        let edittedSkills = [
            ...form.skills.filter(skill => {return pendingSkills.includes(skill)}), 
            ...pendingSkills.filter(skill => {return !form.skills.includes(skill)})
        ].filter(skill => {return !removedSkills.includes(skill)});

        setForm({...form, skills: [...edittedSkills]});
    }

    const handleCancel = () => {
        setState({...state, visible: false});
        setTimeout(() => {
            setPendingSkills([]);
        }, 500);
    }

    const addPendingSkills = (e) => {
        e.preventDefault();
        let skill = e.target[0].value;
        let duplicate = false;
        setRemovedSkills([...removedSkills.filter(s => {return s !== skill})]);
        if (pendingSkills.includes(skill) || form.skills.includes(skill)) {
            duplicate = true;
        }
        if (duplicate) {
            alert('Already Added');
        } else {
            setPendingSkills([...pendingSkills, e.target[0].value]);
        }
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
        setPendingSkills(pendingSkills.filter((s) => {
            return s !== skill;
        }));
        setRemovedSkills([...removedSkills, skill])
    }
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
            <a className='ant-dropdown-link' onClick={showModal}>Add Skills <CaretDownFilled className='ico-caret'/></a>
            <Modal
             title='Add Skills' visible={state.visible} closable={false} onOk={handleOk} confirmLoading={state.pending} onCancel={handleCancel}
             okText='Save' cancelText='Cancel' okButtonProps={{className: 'modal-save'}} cancelButtonProps={{className: 'modal-cancel'}}>

                <form className='modal-input' onSubmit={addPendingSkills}>
                <AuditOutlined style={{fontSize: '2.4rem'}}/><input size='large' placeholder='Skill' required={true}/>
                    <Button size='large' className='modal-add' htmlType='submit'>Add</Button>
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
