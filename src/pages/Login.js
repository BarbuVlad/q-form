import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { useState } from "react";

import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {setUserId} from '../actions';

import {withStyles} from '@material-ui/core/styles';

const Login = () => {
//states and variabiles
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [nameError, setNameError] = useState(false);
const [passwordError, setPasswordError] = useState(false);
//redux states
const userId = useSelector(state=>state.userId);
const dispatch = useDispatch();

const history = useHistory();
const classes = useStyles();

//handlers
const handleLoginSubmit = async (e) => {
    e.preventDefault();

    setNameError(false);
    setPasswordError(false);
    if (name === '') {setNameError(true)}
    if (password === '') {setPasswordError(true)}
    //validate

    console.log(name, password);
    //fetch login from server
    
    const login_result  = await   fetch('http://192.168.206.129/q_form_server/public/user/login', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({name, password})
    });

    const data = await login_result.json();
    console.log(data);
    if(data["code"]==0){
        await dispatch(setUserId(data["id"]));
        await localStorage.setItem("userId",data["id"]);
        console.log(userId);
        history.push('/home');
    }else{alert("Login fail!");}

}
    return (
        <Container maxWidth="md">
        <Grid container
       // justify="center"
        className={classes.container_login}>
        <Grid item xs={6} xl={6} className={classes.container}>
            
                <Typography variant="h4" className={classes.text}>
                    Welcome back!
                </Typography>
                <Typography variant="h6" className={classes.text_second}>
                    Login and let's get started.
                </Typography>
    
            <form noValidate autoComplete="off" onSubmit={handleLoginSubmit}>
                <TextField
                onChange={(e) => setName(e.target.value)}
                className={classes.field}
                label="NAME"
                variant="outlined"
                fullWidth
                required
                error={nameError}
                />
    
                <TextField 
                onChange={(e) => setPassword(e.target.value)}
                className={classes.field}
                label="PASSWORD"
                type="password"
                variant="outlined"
                fullWidth
                required
                error={passwordError}
                />
    
                <Button 
                    className={classes.btn}
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                > 
                    Login
                </Button>
            </form>
    
            
            </Grid> {/*grid item 1 - login page */ }

            <Grid item xs={0.1}>  
            <Divider orientation="vertical" />
            </Grid>
    
            <Grid item xs={5} xl={5} className={classes.container_create_account}>
                
    
                <div>
                    <AccountBoxIcon color="primary" style={{ fontSize: 65, marginTop: 1 }}/>
                    <Typography>
                            <Link href="/register" onClick={console.log("")}>
                               <b> Register here! </b>
                            </Link>
                    </Typography>
                </div>
                
            </Grid>
    
            </Grid> 
            </Container>
        )
}

export default Login;
