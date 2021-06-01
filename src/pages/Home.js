import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import CssBaseline  from "@material-ui/core/CssBaseline";

import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { useState, useEffect } from "react";

import { useHistory } from 'react-router-dom';

import useStyles from '../style/stylesHome';
import { useSelector } from 'react-redux';

import SolvedView from "../components/homeComponents/SolvedView";
import CreatedView from "../components/homeComponents/CreatedView";

const Home = () => {
    //states
    const [solvedTests, setSolvedTests] = useState([]);
    const [createdTests, setCreatedTests] = useState([]);
    //redux states
    const userId = useSelector(state=>state.userId);

    //effects (fetch data for this user)
    useEffect(() => {
        const _userId = localStorage.getItem("userId");
        console.log("Effect called in /Home, id ", _userId);
        const fetchSolved = async () => {
            const solved = await fetch(`http://192.168.206.129/q_form_server/public/user/getSolvedTests/${_userId}`, {
                method: 'GET',
                headers: {"Content-type": "application/json"}
            });
            const data = await solved.json();
            setSolvedTests(data);
           // console.log(data);
        }
        const fetchCreated = async () => {
            const solved = await fetch(`http://192.168.206.129/q_form_server/public/user/getCreatedTests/${_userId}`, {
                method: 'GET',
                headers: {"Content-type": "application/json"}
            });
            const data = await solved.json();
            setCreatedTests(data);
        }
        fetchSolved();
        fetchCreated();
        console.log("Effect called in /Home, id ", _userId, " solved: ", solvedTests);
      }, []);

    const classes=useStyles();

    return (
        <div className={classes.root}>
        <CssBaseline />
        <Container maxWidth="xl" className={classes.main_view}>
            <Typography variant="h2" style={{marginTop:20}}>Dashboard</Typography>
            <Grid container spacing={8} className={classes.dual_container} >
    
                <Grid item xs={6} className={classes.show_container}>
                    <SolvedView tests={solvedTests}/>
                </Grid>
    
    {/* ----------Second element in grid----------*/}
    
                <Grid item xs={6} className={classes.show_container_second}>
                    <CreatedView tests={createdTests}/>
                </Grid>
    
            </Grid>
    
         </Container>
      </div>
    );
}

export default Home;
