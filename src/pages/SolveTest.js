import RadiobuttonElement from '../components/solveTestComponents/RadiobuttonElement';
import CheckboxElement from '../components/solveTestComponents/CheckboxElement';

import { Typography, Button, TextField, Container} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {useEffect, useState} from 'react'
import {useHistory} from "react-router-dom";
import useStyles from '../style/stylesSolve';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const SolveTest = () => {
    const history = useHistory();
    const [testToSolve, setTestToSolve] = useState([]);
    const [testId, setTestId] = useState(null);

    const classes=useStyles();
    const [open, setOpen] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const [testSolved, setTestSolved] = useState([]);
    
    useEffect(()=>{
        const testId_ = localStorage.getItem("toSolveId");
        const fetchTest = async () =>{
            const solved = await fetch(`http://192.168.206.129/q_form_server/public/test/getTestToSolve/${testId_}`, {
                method: 'GET',
                headers: {"Content-type": "application/json"}
            });
            const data = await solved.json();
            console.log("DATA: ",data);
            if(data["code"]!==0){
                alert("Test does not exist! Try again");
                history.push("/home")
            }
            setTestId(testId_);
            let arr = await JSON.parse(data["payload"]);
            //insert selection data:
            arr.map((question, index_q) => {
                if(arr[index_q]["type"]!=="text"){
                arr[index_q]["answersList"].map((ans, index_a)=>{
                    arr[index_q]["answersList"][index_a]={...arr[index_q]["answersList"][index_a], "selected":false};
                
            });
        }
        });
            setTestToSolve(arr);

            //setTestSolved(...testToSolve);
            console.log(testId, " - ", testToSolve);
        }

        fetchTest();
    }, []);

    /*Handlers */
    const handleRadiobuttonSelect = (event, index) => {
        let arr = [...testToSolve];
        arr[index]["answersList"].map((ans, index_a)=>{
            if(arr[index]["answersList"][index_a]["text"]===event.target.value){
                arr[index]["answersList"][index_a]={...arr[index]["answersList"][index_a], "selected":true};
                //console.log(index_a, "is it.");
            } else {
                //console.log(index_a, "is not!");
                arr[index]["answersList"][index_a]={...arr[index]["answersList"][index_a], "selected":false};
            }
        });
        setTestToSolve(arr);
    }

    const handleCheckboxSelect = (event, index_a, index_q) => {
        //console.log("Checkbox ", index_a, " val: ", event.target.checked, "of q: ", index_q);
        let arr = [...testToSolve];
        arr[index_q]["answersList"][index_a]["selected"] = !arr[index_q]["answersList"][index_a]["selected"];
        setTestToSolve(arr);
    }

    const handleTextinput = (event, index_q) => {
        let arr = [...testToSolve];
        arr[index_q]["answer"]=event.target.value;
        setTestToSolve(arr);
    }

    const handleSendAnswers = async () => {
        const userId = localStorage.getItem("userId");
        console.log(JSON.stringify({"id_user": userId,"id_test":testId,"answers":testToSolve}));
        
        setOpen(true);
        const solved = await fetch(`http://192.168.206.129/q_form_server/public/answer/create`, {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({"id_user": userId,"id_test":testId,"answers":testToSolve})
        });
        const data = await solved.json();
        console.log("RES DATA: ", data);
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
        <Container maxWidth="md" className={classes.root}>

        <Button
        startIcon={<CloudUploadIcon />}
        variant="outlined"
        onClick={handleSendAnswers}
        color="primary"
        style={{
        marginButtom: "30px",
        marginLeft: "1px",
        marginRight:"1px"
        }}
        >
        Send answers
        </Button>

    <div style={{flexDirection: "column", marginLeft:"1px", marginTop:"35px"}}>
        {testToSolve.map( (question_entry, index) => {
            switch(question_entry.type){
                case "radiobuttons":
                    return(
                    <div key={index} style={{ marginTop:"20px"}}>
                        <div style={{flexDirection: "row"}}>
                        </div>
                        <RadiobuttonElement index={index} 
                        question={question_entry.question} 
                        answersList={question_entry.answersList}  
                        handler={handleRadiobuttonSelect}
                        />
                    </div>
                    )//render
                case "checkboxes":
                    return(
                        <div key={index} style={{ marginTop:"20px"}}>
                            <div style={{flexDirection: "row"}}>


                        </div>
                            <CheckboxElement 
                            index={index} 
                            question={question_entry.question} 
                            answersList={question_entry.answersList}
                            handler={handleCheckboxSelect}
                            />
                        </div>
                        )//render
                case "text":
                    return(
                        <div key={index} style={{ marginTop:"20px"}}>
                             <div style={{flexDirection: "row"}}>

                        </div>
                            <Typography>{index+1}.{question_entry.question}</Typography>
                           <TextField           
                            id="outlined-basic" 
                            label="Answer" 
                            variant="outlined"  
                            color="primary"
                            size="small" 
                            style={{marginBottom:"25px"}}
                            value={testToSolve[index]["answer"]}
                            onChange={(e)=>{handleTextinput(e, index)}}
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

      <Snackbar open={openSnackbar} autoHideDuration={9000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Test saved successfully!
        </Alert>
      </Snackbar>
    </Container>

    )
}

export default SolveTest;
