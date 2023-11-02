import * as React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import { Line } from "./pages/Line";
import { Arc } from "./pages/Arc";
import { Stack } from "./pages/Stack";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import { ScatterPlot } from "./pages/ScatterPlot";

export const routes = [{
    path: "/",
    element: <Line />,
    navigationIcon: <ShowChartIcon/>,

},
{
    name: 'Path',
    path: "/Path",
    element: <Line />,
    navigationIcon: <ShowChartIcon/>
},
{
    name: 'ScatterPlot',
    path: "/ScatterPlot",
    element: <ScatterPlot />,
    navigationIcon: <HdrWeakIcon/>
},
{
    name:'Pie',
    path: "/Pie",
    element: <Arc />,
    navigationIcon: <DataUsageIcon/>
},
{
    name:'Bar',
    path: "/Bar",
    element: <Stack />,
    navigationIcon: <EqualizerIcon/>
}]

export const MainRouter = createBrowserRouter(routes);
