import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(() => {
    return {
        'header-container': {
            display: 'flex',
            justifyContent: 'space-around'
        }
    }
})

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes['header-container']}>
            <h1>KondoBoard</h1>
            <input type='text' placeholder='🔍 Search' />
            <h3>Alex Parker</h3>
        </div>
    )
}

export default Header;