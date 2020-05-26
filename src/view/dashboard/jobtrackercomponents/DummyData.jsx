import React from 'react';

function DummyData (props) {
    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('job_id', target.id);

        setTimeout(() => {
            target.style.display = 'none';
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return(
        <div
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
            style={{background: 'white'}}
        >
            {props.children}
        </div>
    )
}

export default DummyData;