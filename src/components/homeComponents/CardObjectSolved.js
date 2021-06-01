import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



import { useState } from "react";
import useStyles from './styles';
const CardObject = ({test, index}) => {

    const classes = useStyles();
    return (
        <div >
            <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h6" component="h2" align="left">
                {index+1}. Date: {test.date ? test.date : test.created_date}
                </Typography>
                
                <Typography variant="body2" color="textSecondary" align="left">
                 test id  {test.id_test}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" >See results</Button>
            </CardActions>
            </Card>


        </div>
    )
}

export default CardObject
