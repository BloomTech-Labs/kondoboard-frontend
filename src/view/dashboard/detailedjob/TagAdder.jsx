
import React, { useState } from 'react';

import TagsDisplay from '../savedjobcomponents/TagsDisplay.jsx';

import { Modal } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';

import AddTag from '../forms/AddTag.jsx';

const TagAdder = props => {
    const job = props.job;
    const [visible, setVisible] = useState(false)
    const handleOpen = () => {
        setVisible(true)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    return(
        <di>
            <p onClick={handleOpen}>{job && 'Add Tag'}{job && <CaretDownFilled />}
                    <TagsDisplay job={job} /></p>
                    <Modal 
                        title='Add Tag'
                        visible={visible}
                        onOk={handleOpen}
                        onCancel={handleCancel}
                    >
                        <AddTag job={job} />
                    </Modal>
        </di>
    )
}

export default TagAdder;