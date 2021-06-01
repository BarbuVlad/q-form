import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import CssBaseline  from "@material-ui/core/CssBaseline";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { useState, useEffect } from "react";

import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import { useSelector } from 'react-redux';

import CardObjectCreated from './CardObjectCreated';


const CreatedView = ({tests}) => {
    const classes = useStyles();
    const history = useHistory();
    
    /* Action handlers */

    const handleCreateNew = () => {
        history.push('/create');
      };
    return (
        <>
        <Typography variant="h4">Created by me</Typography>
        <Button variant="outlined" className={classes.btn}
        onClick={handleCreateNew}>Create new</Button>
        <Divider />
        <div className={classes.list}>
                {tests.map((test, index)=>(
                    <>
                    <CardObjectCreated test={test} index={index} />
                    </>
                ))}
                </div>
        </>
    )
}

export default CreatedView;
