import React from 'react';

const DropZone = props => {
    const column = props.column;

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return(
        <div
            style={{marginTop: '-5%'}}
            onDrop={drop}
            onDragOver={dragOver}
            style={{width: '300px', height: '75vh'}}
        >
            <h2>{column.name}</h2>
        </div>
    )
}

export default DropZone;