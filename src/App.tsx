import React from 'react';
import './App.css';
import ResponsiveDrawer from './navigation/Sidebar';
import { Route, RouterProvider } from 'react-router';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { PieChart } from './navigation/pages/PieChart';
import { ScatterPlot } from './navigation/pages/ScatterPlot';
import { LineChart } from './navigation/pages/LineChart';
import { BarChart } from './navigation/pages/BarChart';



const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/datavizio' element={<ResponsiveDrawer />}>
    <Route index path='/datavizio' element={<LineChart />} />
    <Route index path='/datavizio/Path' element={<LineChart />} />
    <Route path='/datavizio/Scatterplot' element={<ScatterPlot />} />
    <Route path='/datavizio/Pie' element={<PieChart />} />
    <Route path='/datavizio/Bar' element={<BarChart />} />
  </Route>
))

function App() {
  return (<div className="App">
    <RouterProvider router={router} />
  </div>);
}

export default App;
