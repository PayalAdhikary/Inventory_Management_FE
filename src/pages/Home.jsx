import React from 'react'
import Sidenav from '../components/Sidenav';
import Toolbar from '@mui/material/Toolbar';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Barchart from '../charts/Barchart';
import CountUp from 'react-countup';

const drawerWidth = 240;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

export default function Home() {
  return (
    <div>
        <Box  />
        <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box 
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Item sx={{height: '120px',backgroundImage: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)',color: '#fff'}}>
                <h4 style={{color: '#fff'}}>$ <CountUp delay={1} end={4500} /></h4>
                <p>Earnings this month</p>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item sx={{height: '120px',backgroundImage: 'linear-gradient(to top, #ff0844 0%, #ffb199 100%);',color: '#fff'}}>
            <h4 style={{color: '#fff'}}>$ <CountUp delay={1} end={3500} /></h4>
                <p>Expenses this month</p>
                </Item>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Item sx={{height: '120px',backgroundImage: 'linear-gradient(to top, #9be15d 0%, #00e3ae 100%);',color: '#fff'}}>
            <h4 style={{color: '#fff'}}><CountUp delay={2} end={100} /></h4>
                <p>New Customers</p>
                </Item>
          </Grid>
          
        </Grid>

        <Grid container sx={{mt: 2}}>
          <Grid item xs={12} sm={12}>
            <Item sx={{height: '450px'}}>
                <Barchart />
            </Item>
          </Grid>
         
          
        </Grid>
    </Box>
    
      </Box>
      </Box>
    </div>
  )
}
