import * as React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import { LineChart } from "./pages/LineChart";
import { PieChart } from "./pages/PieChart";
import { BarChart } from "./pages/BarChart";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import { ScatterPlot } from "./pages/ScatterPlot";

export const routes = [{
    path: "/",
    element: <LineChart />,
    navigationIcon: <ShowChartIcon/>,

},
{
    name: 'Path',
    path: "/Path",
    element: <LineChart />,
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
    element: <PieChart />,
    navigationIcon: <DataUsageIcon/>
},
{
    name:'Bar',
    path: "/Bar",
    element: <BarChart />,
    navigationIcon: <EqualizerIcon/>
}]

export const MainRouter = createBrowserRouter(routes);
