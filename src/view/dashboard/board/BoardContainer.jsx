import React from 'react';

import Header from '../../headers/Header';
import BoardList from './BoardList';
import TaggedApplied from './TaggedApplied';

const BoardView = () => {
    return(
        <div>
            <Header />
            <BoardList />
            <TaggedApplied />
        </div>
    )
}

export default BoardView;