import React, { useCallback, useState } from "react"
import { FormControlLabel, Grid, IconButton } from "@mui/material"
import LoopIcon from '@mui/icons-material/Loop';
import { D3Pie } from "../../shapes/D3Pie"

const defaultDataPoints = [10, 20, 16, 60, 38, 110, 105, 80, 40, 30]

const maxValue = 500

export const PieChart = () => {
    const [data, setData] = useState(defaultDataPoints)

    const randommizeData = useCallback(() => {
        setData(defaultDataPoints.map(() => parseInt(`${Math.random() * maxValue}`)))
    }, [])

    return (<Grid container>
        <Grid container>
            <Grid item xs={12}>
                <FormControlLabel control={
                    <IconButton onClick={randommizeData}>
                        <LoopIcon />
                    </IconButton>
                } label="Randomize data" />
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <D3Pie dataPoints={data} />
        </Grid>
    </Grid>)
}