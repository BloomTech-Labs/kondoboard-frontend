import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(() => {
    return {
        'side-menu': {
            background: 'lightgray'
        }
    }
})


const SideMenu = () => {
    const classes = useStyles();
    return(
        <div className={classes['side-menu']}>
            <p>Web</p>
            <p>Data Science</p>
        </div>
    )
}

export default SideMenu;