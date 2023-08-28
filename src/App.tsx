import React from 'react';
import logo from './logo.svg';
import './App.css';
import { D3Area, D3Path } from './shapes';
import { Grid } from '@mui/material';
import { D3Arc } from './shapes/D3Arc';
import { D3Pie } from './shapes/D3Pie';

function App() {
  return (
    <Grid container width={'100%'}>
      <Grid item xs={12}>
        <D3Path />
      </Grid>
      <Grid item xs={12}>
        <D3Area />
      </Grid>
      <Grid item xs={12}>
        <D3Arc />
      </Grid>
      <Grid item xs={12}>
        <D3Pie />
      </Grid>
    </Grid>
  );
}

export default App;
