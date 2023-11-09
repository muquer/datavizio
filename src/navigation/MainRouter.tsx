import * as React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import LanguageIcon from '@mui/icons-material/Language';
import SpokeIcon from '@mui/icons-material/Spoke';

export const routes = [{
    path: "/datavizio",
    navigationIcon: <ShowChartIcon/>,

},
{
    name: 'Path',
    path: "/datavizio/Path",
    navigationIcon: <ShowChartIcon/>
},
{
    name: 'ScatterPlot',
    path: "/datavizio/ScatterPlot",
    navigationIcon: <HdrWeakIcon/>
},
{
    name:'Pie',
    path: "/datavizio/Pie",
    navigationIcon: <DataUsageIcon/>
},
{
    name:'Bar',
    path: "/datavizio/Bar",
    navigationIcon: <EqualizerIcon/>
},
{
    name:'Geo',
    path: "/datavizio/Geo",
    navigationIcon: <LanguageIcon/>
},
{
    name:'Hierarchy',
    path: "/datavizio/Hierarchy",
    navigationIcon: <SpokeIcon/>
},
]

export const MainRouter = createBrowserRouter(routes);
