import Header from "../Header";
import ShowTest from '../components/ShowTest';
import CreateQuestion from '../components/CreateQuestion';

import { CssBaseline, Container, Grid, Divider} from "@material-ui/core";

import useStyles from '../styles';


const TestCreator = () => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
        <CssBaseline />
        <Container maxWidth="xl" >
    
          <Header />
          
            <Grid container spacing={8} className={classes.dual_container} >
    
                <Grid item xs={7} md={6} className={classes.q_form_container}>
                  <CreateQuestion />
                </Grid>
    
                <Grid item xs={0.1}>  
                <Divider orientation="vertical" />
                </Grid>
    
    {/* ----------Second element in grid----------*/}
    
                <Grid item xs={4} md={5} className={classes.q_show_container}>
                  <ShowTest />
                </Grid>
    
            </Grid>
    
         </Container>
      </div>
    );
}

export default TestCreator;
