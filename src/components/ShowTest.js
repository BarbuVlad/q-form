
import RadiobuttonElement from './RadiobuttonElement';
import CheckboxElement from './CheckboxElement';

import { Typography, Button, TextField} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { useHistory } from 'react-router-dom';
import {useState} from "react"
import useStyles from '../styles';

//Redux-store imports
import {useSelector, useDispatch} from 'react-redux';

import { removeQuestionFromTest, editQuestionFromTest } from '../actions';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
const ShowTest = () => {
    const classes=useStyles();
    const [open, setOpen] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [testId, setTestId] = useState(undefined);

    const history = useHistory();

    const dispatch = useDispatch();
    const testQuestions = useSelector(state=>state.testQuestions);


    //Handlers
    const deleteQuestion = (index) => {
        //console.log(`Delete ${index}`);
        dispatch(removeQuestionFromTest(index));
    }

    const editQuestion = (index) => {
        /*All values in this question will be passed to the current question in creation.
        The "edited" will hence be removed from state; later to be added again after editing */
        console.log("Edit");
        console.log(testQuestions[index]);
       // dispatch(removeQuestionFromTest(index));
    }

    const handleSaveTest = async () => {
        /*Sends to server a request to save the current test as is;  */
        
        //Validate data:
        if(testQuestions==null){alert("Test can't be empty!");return;}
        if(testQuestions.length === 0){alert("Test can't be empty!");return;}
        if(!localStorage.getItem("userId")){alert("Your session expired! Please log in again");history.push("/");}

       //console.log(localStorage.getItem("userId"), "  ", testQuestions);
        setOpen(true);

        const save_result = await fetch('http://192.168.206.129/q_form_server/public/test/create', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({payload: testQuestions, creator_id:localStorage.getItem("userId")})
        });
        const data = await save_result.json();
        if(data["code"]==0){
            setOpenSnackbar(true);
        } else {alert("Error occurred at creating test!");}

        setOpen(false);
        
    }

    const handleClose = () => {
        setOpen(false);
      };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };


    return (
    <div>
        <Typography variant="h5"
        align="left"
        gutterBottom
        className={classes.form_title}>The test looks like this</Typography>

        <Button
        startIcon={<CloudUploadIcon />}
        variant="outlined"
        onClick={handleSaveTest}
        color="secondary"
        style={{
        marginButtom: "30px",
        marginLeft: "1px",
        marginRight:"1px"
        }}
        >
        Save test!
        </Button>

    <div style={{flexDirection: "column", marginLeft:"1px", marginTop:"35px"}}>
        {testQuestions.map( (question_entry, index) => {
            switch(question_entry.type){
                case "radiobuttons":
                    return(
                    <div key={index} style={{ marginTop:"20px"}}>
                        <div style={{flexDirection: "row"}}>
                            <Button
                            startIcon={<DeleteIcon />}
                            onClick={()=>deleteQuestion(index)}
                            > Delete
                                </Button>

                            <Button
                           startIcon={<EditIcon />} 
                           onClick={()=>editQuestion(index)}
                           >Edit
                                </Button>
                        </div>
                        <RadiobuttonElement index={index} question={question_entry.question} answersList={question_entry.answersList}  />
                    </div>
                    )//render
                case "checkboxes":
                    return(
                        <div key={index} style={{ marginTop:"20px"}}>
                            <div style={{flexDirection: "row"}}>
                            <Button
                            startIcon={<DeleteIcon />}
                            onClick={()=>deleteQuestion(index)}
                            > Delete
                                </Button>

                            <Button
                           startIcon={<EditIcon />} 
                           onClick={()=>editQuestion(index)}
                           >Edit
                                </Button>
                        </div>
                            <CheckboxElement index={index} question={question_entry.question} answersList={question_entry.answersList}  />
                        </div>
                        )//render
                case "text":
                    return(
                        <div key={index} style={{ marginTop:"20px"}}>
                             <div style={{flexDirection: "row"}}>
                            <Button
                            startIcon={<DeleteIcon />}
                            onClick={()=>deleteQuestion(index)}
                            > Delete
                                </Button>

                            <Button
                           startIcon={<EditIcon />} 
                           onClick={()=>editQuestion(index)}
                           >Edit
                                </Button>
                        </div>
                            <Typography>{index+1}.{question_entry.question}</Typography>
                           <TextField           
                            id="outlined-basic" 
                            label="Answer" 
                            variant="outlined"  
                            color="secondary"
                            size="small" 
                            style={{marginBottom:"25px"}}
                            value={""}
                            onChange={(e)=>{}}
                            multiline />
                        </div>
                        )//render
                default:
                    <div></div>
            }
        } )}
         </div>
         <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar open={openSnackbar} autoHideDuration={9000} onClose={handleCloseSnackbar}
      message="Note archived"
        action={
        <>
            <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
            </IconButton>
        </>
        }
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Test saved successfully!
        </Alert>
      </Snackbar>


    </div>
    )
}

export default ShowTest;
/**
 * 
 * 






            <Snackbar open={openSnackbar} autoHideDuration={9000} onClose={handleCloseSnackbar}
      message="Test saved successfully!"
      styles={{backgroundColor:"red", color:"red"}}
        action={
        <>
            <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
            </IconButton>
        </>
        }
      />
 */