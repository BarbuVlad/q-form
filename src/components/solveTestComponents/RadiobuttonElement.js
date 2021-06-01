
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { useState } from "react";


const RadiobuttonElement = ({index, question, answersList, handler}) => {
  const [valueRadio, setValueRadio] = useState(null);

  //Methods 
  const handleChangeRadio = (event) => {
    setValueRadio(event.target.value);
   // console.log("Value sel:", event.target.value);
    handler(event, index);
  };

    return(
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">{index+1}. {question}</FormLabel>
          <RadioGroup aria-label="answer" name="answer" value={valueRadio} onChange={handleChangeRadio}>
          {answersList.map( (answer, key) => (
            <FormControlLabel key={key} value={answer.text} control={<Radio color="primary" />} label={answer.text} />
          ))}
          </RadioGroup>
        </FormControl>
      </div>       
    ) 
}

export default RadiobuttonElement;
