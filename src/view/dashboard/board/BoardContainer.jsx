import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";

import Header from '../../headers/Header';
import BoardList from './BoardList';
import SideMenu from './SideMenu';
import FeaturedPartners from './FeaturedPartners';

const useStyles = makeStyles(() => {
    return {
        'header': {
            height: '10vh',
            borderBottom: '1px solid gray'
        },
        'left-side': {
            height: '90vh',
            borderRight: '1 px solid gray'
        },
        'right-side': {
            height: '90vh'
        },
        'middle': {
            overflowY: 'scroll'
        }
    }
})

const BoardContainer = () => {
    const classes = useStyles();
    return(
        <div>
            <Grid className={classes["header"]} container xs={12}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
            </Grid>
            <Grid container xs={12}>
                <Grid className={classes["left-side"]} item xs={2}>
                    <SideMenu />
                </Grid>
                <Grid className={classes["right-side"]} item xs={8}>
                    <BoardList />
                </Grid>
                <Grid className={classes["middle"]} item xs={2}>
                    <FeaturedPartners />
                </Grid>
            </Grid>
        </div>
    )
}

export default BoardContainer;