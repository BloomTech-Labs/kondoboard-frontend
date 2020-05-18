import React from 'react';
import {makeStyles} from '@material-ui/styles';

// Component will probably fetch jobs particular to web dev or data science when word is clicked

const useStyles = makeStyles(() => {
    return {
        'side-menu': {
            margin: '10%'
        }
    }
})


const SideMenu = () => {
    const classes = useStyles();
    return(
        <div className={classes['side-menu']}>
            <p>Web</p>
            <br/>
            <p>Data Science</p>
        </div>
    )
}

export default SideMenu;