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

export default function Products() {
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
        <h1>Products</h1>
      </Box>
      </Box>
    </div>
  )
}
