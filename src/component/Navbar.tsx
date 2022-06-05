import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuBar from './MenuBar';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';


export default function Navbar({setSearchId}:any) {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <Grid container justifyContent="flex-start" xs={2} >
            <SchoolRoundedIcon fontSize="large"/>
            <Button variant="text" color="inherit">YorkU Courses App</Button>
            
           
          </Grid>
          <Grid container justifyContent="flex-end" xs={10}>
            <MenuBar 
              setSearchId ={setSearchId}
            />
          </Grid>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}



