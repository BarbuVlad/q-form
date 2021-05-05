
import Header from "./Header";
import RadiobuttonElement from './components/RadiobuttonElement';
import ShowTest from './components/ShowTest';

import { CssBaseline, Container, Grid, Typography, Button, TextField,Menu, MenuItem, Divider} from "@material-ui/core";

import useStyles from './styles';

import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';



import { useState } from "react";

import AnswerBox from "./AnswerBox";

//Redux-store imports
import {useSelector, useDispatch} from 'react-redux';

import {add, remove, resetAnswers,//List answers actions
        changeQuestion, resetQuestion, //Question text actions
        changeType,//Answers type actions
        addQuestionToTest} from './actions';

const App = () => {
  const classes=useStyles();
  //import a state from redux
  const answersList = useSelector(state => state.answersList);
  const questionText = useSelector(state => state.questionText);
  const answersType = useSelector(state=>state.answersType);

  const testQuestions = useSelector(state=>state.testQuestions);

  const dispatch = useDispatch();

  const [questionTextError, setQuestionTextError] = useState(false);
  const [addAnswerDisable,setAddAnswerDisable] = useState(false);
//maxHeight="xl"

const setTextValue = (e) =>{
  e.preventDefault();
  dispatch(changeQuestion(e.target.value));
 // console.log(answersList[label_number]);
}

const saveQuestion = () => {
  //verify
  if(questionText==''){
    alert("Question text can't be empty!"); 
    setQuestionTextError(true);
    return;
  }
  if(answersList.length == 0 && answersType!="text"){alert("There must be at least 1 answer");return;}
  let stop = false;
  answersList.map(answer => {
   if(answer["text"]==''){
    alert("Answer can't be empty");
    stop=true;
   }
  });
  if(stop){return;}

  let entry = {question:questionText, type:answersType, answersList:answersList};
  dispatch(addQuestionToTest(entry));
  //reset current question fields
  dispatch(resetQuestion());
  dispatch(resetAnswers());
  setQuestionTextError(false);
}
const [anchorEl, setAnchorEl] = useState(null);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};
const handleCloseRadio = () => {
  dispatch(changeType("radiobuttons"));
  setAddAnswerDisable(false);
  setAnchorEl(null);
};
const handleCloseCheckbox = () => {
  dispatch(changeType("checkboxes"));
  setAddAnswerDisable(false);
  setAnchorEl(null);
};
const handleCloseText = () => {
  dispatch(changeType("text"));
  dispatch(resetAnswers());
  setAddAnswerDisable(true);
  setAnchorEl(null);
};

  return (
  <div className={classes.root}>
    <CssBaseline />
    <Container maxWidth="xl" >

      <Header />
      
        <Grid container spacing={8} className={classes.dual_container} >

            <Grid item xs={7} md={6} className={classes.q_form_container}>
              <Typography variant="h5" align="left" gutterBottom className={classes.form_title}>Create a new Question</Typography>

              <form className={classes.form}>
                   <TextField id="standard-basic" label="Specify the question..." 
                  value={questionText}
                  onChange={(e)=>setTextValue(e)}
                  style={{width:"75%"}}
                  multiline
                  error={questionTextError}
                   
                   />


                   <Button variant="outlined" style={{marginTop:"9px", marginLeft:"30px"}} disabled={addAnswerDisable}
                   onClick={() => dispatch(add({text:null, corect:false}))}
                   >Add answer</Button>

                   {/*Menu for selecting type*/}
                   <div style={{marginTop:"9px", marginLeft:"5px"}}>
                   <Button startIcon={<KeyboardArrowDownIcon/>} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Answers type: {answersType}
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  
                  >
                    <MenuItem onClick={handleCloseRadio}>Radio buttons</MenuItem>
                    <MenuItem onClick={handleCloseCheckbox}>Checkboxes</MenuItem>
                    <MenuItem onClick={handleCloseText}>Text</MenuItem>
                  </Menu>
                  </div>

                   
                  <div style={{flexDirection: "column"}}>
                      {answersList.map( (answer, no) => 
                        (<AnswerBox label_number={no} key={no} answer={answer}/>)
                        )}
                  </div>

                    <Button
                      startIcon={<DeleteIcon />}
                      variant="contained"
                      onClick={() => dispatch(remove())}
                      style={{
                        marginTop: "30px",
                        marginButtom: "15px",
                        marginLeft: "15px",
                        marginRight:"15px"
                      }}
                      >
                        Remove last answer
                      </Button>
<br/>
                      <Button
                      startIcon={<SaveIcon />}
                      variant="outlined"
                      onClick={()=>saveQuestion()}
                      color="primary"
                      style={{
                        marginTop: "30px",
                        marginButtom: "15px",
                        marginLeft: "15px",
                        marginRight:"15px"
                      }}
                      >
                        Save question!
                      </Button>

                </form>
                
            </Grid>

            <Grid item xs={0.1}>  
            <Divider orientation="vertical" />
            </Grid>

{/* ----------Second element in grid----------*/}


            <Grid item xs={4} md={5} className={classes.q_show_container}>
              <ShowTest />
              {/*
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

            <div style={{flexDirection: "column", marginLeft:"25px", marginTop:"25px"}}>
              {testQuestions.map( (question_entry, index) => {
                return(
                <div key={index}>
                  <RadiobuttonElement index={index} question={question_entry.question} answersList={question_entry.answersList}  />
     
                </div>
                )//render
              } )}
              </div> */}

{/*
              <Typography variant="h5" align="left" gutterBottom>{questionText}</Typography>
              <div style={{flexDirection: "column", marginLeft:"25px"}}>
                      {answersList.map( (answer, no) => 
                        ( answer.corect ? 
                        <Typography variant="h6" align="left" gutterBottom style={{color:"green"}}>{answer.text}</Typography> :
                        <Typography variant="h6" align="left" gutterBottom>{answer.text}</Typography>
                        )
                        )}
                  </div>
                        */}
              

            </Grid>

        </Grid>

     </Container>
  </div>
  );
}

export default App;
