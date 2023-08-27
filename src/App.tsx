import React from 'react';
import logo from './logo.svg';
import './App.css';
import { D3Path } from './shapes/D3Path';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid container width={'100%'}>
      <Grid item xs={12}>
        <D3Path />
      </Grid>
    </Grid>
  );
}

export default App;
