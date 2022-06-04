import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SchoolIcon from '@mui/icons-material/School';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="icon" sx={{ mr: 2 }}>
            <SchoolIcon />
          </IconButton>
          {/* <Typography display="inline" align='left' variant="h6" color="inherit" component="div">
            {"YorkU Courses App"}
          </Typography> */}
          <Grid container justifyContent="flex-start">
            <Button variant="text" color="inherit">YorkU Courses App</Button>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Button variant="outlined" color="inherit">Get All Courses</Button>
          </Grid>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

