import { Typography} from "@material-ui/core";
import {} from "@material-ui/icons";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
// <QuestionAnswerIcon />
import useStyles from './styles';

//Redux-store imports



const Header = () => {
    const classes=useStyles();

  //import a state from redux


    /* 
        onClick={() => dispatch(add())}
    */

    return (
        <>
        <main>
            <div className={classes.container}>
                
                    <Typography variant="h3" align="center" gutterBottom>
                        Question Form Creator
                    </Typography>

                    <Typography variant="h6" align="center" paragraph style={{fontWeight:"bold"}}>
                        Create your own test {localStorage.getItem('myData')}
                    </Typography>
                   
                </div>
            </main>
        </>
    )
}

export default Header
