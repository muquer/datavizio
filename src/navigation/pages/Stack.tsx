import React, { useCallback, useState } from "react"
import { FormControlLabel, Grid, IconButton, Switch } from "@mui/material"
import LoopIcon from '@mui/icons-material/Loop';
import { D3Bar } from "../../shapes/D3Bar"
import { D3BarH } from "../../shapes/D3BarH"

const defaultData = [
    { label: 'Mon', value: 100 },
    { label: 'Tue', value: 80 },
    { label: 'Wed', value: 60 },
    { label: 'Thu', value: 44 },
    { label: 'Fri', value: 39 }
]

export const Stack = () => {
    const [isVertical, setIsVertical] = useState(false)
    const [graphData, setGraphData] = useState(defaultData)

    const randommizeData = useCallback(() => {
        setGraphData(defaultData?.map(v=>({...v, value: Math.random()*500})))
    }, [])

    return (<Grid container>
        <Grid container>
            <Grid item xs={12}>
                <FormControlLabel control={<Switch onChange={(e, checked) => setIsVertical(checked)} />} label="Verfical chart" />
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel control={
                    <IconButton onClick={randommizeData}>
                        <LoopIcon />
                    </IconButton>
                } label="Randomize data" />
            </Grid>
        </Grid>
        <Grid item xs={12}>
            {!isVertical ? <D3Bar dataPoints={graphData} /> : <D3BarH dataPoints={graphData} />}
        </Grid>
    </Grid>)
}