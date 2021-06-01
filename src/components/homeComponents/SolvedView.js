import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

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
import CardObjectSolved from './CardObjectSolved';

const SolvedView = ({tests}) => {
    const classes = useStyles();
    const history = useHistory();

    const [open, setOpen] = useState(false);
    const [toSolveId, setToSolveId] = useState(null);
    
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSolve = async () => {
      setOpen(false);
      await localStorage.setItem("toSolveId",toSolveId);
      //console.log("session:", await localStorage.getItem("userId"), " state: ", toSolveId);
      history.push("/solve");
    };

    return (
        <div className={classes.main_view}>
            <Typography variant="h4">Solved by me</Typography>
            <Button variant="outlined" className={classes.btn} onClick={handleClickOpen}>Solve new</Button>
            <Divider />
                <div className={classes.list}>
                {tests.map((test, index)=>(
                    <>
                    <CardObjectSolved test={test} index={index} />
                    </>
                ))}
                </div>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Solve new test</DialogTitle>
        <DialogContent>
          <DialogContentText>
                To solve a new test please introduce the <b>test id</b> provided by the teacher.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="number"
            label="Test id"
            onChange={(e) => setToSolveId(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSolve} color="primary">
            solve!
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default SolvedView;
