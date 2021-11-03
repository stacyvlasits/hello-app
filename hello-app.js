import React from 'react';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';  
  
const HelloApp = () => {
    return (
        <Paper variant="outlined">
            <h1>Hello App!</h1>
            <Link href="/">Return to Home</Link>
        </Paper>
    );
};
  
export default HelloApp;