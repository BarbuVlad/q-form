import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { useState} from "react";

const CheckboxSubElement = ({key,answer}) => {
    const [value, setValue] = useState(false);


    const handleChange = (event) => {
        setValue(event.target.checked);
      };
    
    return (
        <FormControlLabel
        control={<Checkbox checked={value} onChange={handleChange} name={answer.text} />}
        label={answer.text}
            />
        
    )
}

export default CheckboxSubElement;
