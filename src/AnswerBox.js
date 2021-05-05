import { TextField, ThemeProvider,createMuiTheme, FormControlLabel, Checkbox,Container} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

import { useState } from "react";
import PropTypes from 'prop-types';

import useStyles from './styles';

import {useSelector,useDispatch} from 'react-redux';

import {setText, setCorect} from './actions';


const AnswerBox = ({label_number, answer}) => {
    const classes=useStyles();
    const [answerCheck, setAnswerCheck] = useState(answer.corect);
   // const answersList = useSelector(state => state.answersList);
    
    const dispatch = useDispatch();
  
    const theme = createMuiTheme({
      palette: {
        primary: blue,
        
      }
    });

    //event handler
    const setCheck = (e) =>{
        setAnswerCheck(e.target.checked);
        dispatch(setCorect(label_number,e.target.checked));
       // console.log(answersList[label_number]);
    }

    const setTextValue = (e) =>{
        e.preventDefault();
        dispatch(setText(label_number,e.target.value));
       // console.log(answersList[label_number]);
    }


    return (
        <Container>
            
        <ThemeProvider theme={theme}>
            <TextField 
            id="outlined-basic" 
            label={"Answer " + (label_number+1)} 
            variant="outlined"  
            size="small" 
            className={classes.answer} 
            value={answer.text}
            onChange={(e)=>setTextValue(e)}
            multiline
            />
        </ThemeProvider>

        <FormControlLabel className={classes.answer_checkbox}
            control={<Checkbox checked={answerCheck} onChange={(e)=>setCheck(e)} name="corect" color="primary" />}
            label="Corect" 
        />

        </Container>
    )
}

AnswerBox.defaultProps = {
    label_number: 0,
}


export default AnswerBox;
