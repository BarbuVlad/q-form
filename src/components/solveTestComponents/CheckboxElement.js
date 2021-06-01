
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';

import CheckboxSubElement from './CheckboxSubElement';

import { useState, useEffect } from "react";

const CheckboxElement = ({index, question, answersList, handler}) => {

      return(
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">{index+1}. {question}</FormLabel>
            <FormGroup>
                {answersList.map( (answer, index_) => {
                   return(
                    <CheckboxSubElement key={index_} answer={answer} handler={handler} index_a={index_} index_q={index}/>
                    /*
                <FormControlLabel key={index}
                control={<Checkbox checked={valuesChecked[index]} onChange={(event,index)=>handleChange(event,index)} name="gilad" />}
                label="Gilad Gray"
                  />*/)
                })}

            </FormGroup>
          </FormControl>
        </div>       
      ) 
}

export default CheckboxElement
