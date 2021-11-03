import React from 'react';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    button: {
      height: 36,
      margin: theme.spacing(1),
    },
  }));
  
  
const HelloApp = () => {
    const classes = useStyles();
    return (
        <Paper variant="outlined">
            <h1>Hello App!</h1>
            <Link href="/">Return to Home</Link>
        </Paper>
    );
};
  
export default HelloApp;