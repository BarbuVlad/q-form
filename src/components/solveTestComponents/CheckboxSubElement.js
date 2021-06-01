import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { useState} from "react";

const CheckboxSubElement = ({ key,answer, handler, index_a, index_q}) => {
    const [value, setValue] = useState(false);


    const handleChange = (event) => {
        setValue(event.target.checked);
        handler(event, index_a, index_q);
      };
    
    return (
        <FormControlLabel
        control={<Checkbox color="primary" checked={value} onChange={handleChange} name={answer.text} />}
        label={answer.text}
            />
        
    )
}

export default CheckboxSubElement;
