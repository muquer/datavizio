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
import LanguageIcon from '@mui/icons-material/Language';
import { ScatterPlot } from "./pages/ScatterPlot";

export const routes = [{
    path: "/datavizio",
    element: <LineChart />,
    navigationIcon: <ShowChartIcon/>,

},
{
    name: 'Path',
    path: "/datavizio/Path",
    element: <LineChart />,
    navigationIcon: <ShowChartIcon/>
},
{
    name: 'ScatterPlot',
    path: "/datavizio/ScatterPlot",
    element: <ScatterPlot />,
    navigationIcon: <HdrWeakIcon/>
},
{
    name:'Pie',
    path: "/datavizio/Pie",
    element: <PieChart />,
    navigationIcon: <DataUsageIcon/>
},
{
    name:'Bar',
    path: "/datavizio/Bar",
    element: <BarChart />,
    navigationIcon: <EqualizerIcon/>
},
{
    name:'Geo',
    path: "/datavizio/Geo",
    element: <></>,
    navigationIcon: <LanguageIcon/>
},
]

export const MainRouter = createBrowserRouter(routes);
