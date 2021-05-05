
import RadiobuttonElement from './RadiobuttonElement';
import CheckboxElement from './CheckboxElement';

import { Typography, Button, TextField} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from '../styles';

//Redux-store imports
import {useSelector, useDispatch} from 'react-redux';

import { removeQuestionFromTest, editQuestionFromTest } from '../actions';

const ShowTest = () => {
    const classes=useStyles();

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

    return (
    <div>
        <Typography variant="h5"
        align="left"
        gutterBottom
        className={classes.form_title}>The test looks like this</Typography>

        <Button
        startIcon={<CloudUploadIcon />}
        variant="outlined"
        onClick={()=>alert("Saved to your account!")}
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
                            <CheckboxElement index={index} question={question_entry.question} answersList={question_entry.answersList}  />
                        </div>
                        )//render
                case "text":
                    return(
                        <div key={index} style={{ marginTop:"20px"}}>
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
    </div>
    )
}

export default ShowTest;
