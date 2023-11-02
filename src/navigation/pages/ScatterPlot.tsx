import React, { useCallback, useState } from "react"
import { FormControlLabel, Grid, IconButton } from "@mui/material"
import LoopIcon from '@mui/icons-material/Loop';
import { D3ScatterPlot } from "../../shapes/D3ScatterPlot";

var defaultPoints = [
    [0, 80, 10],
    [100, 100, 10],
    [150, 100, 10],
    [200, 30, 10],
    [250, 30, 10],
    [300, 50, 10],
    [350, 50, 10],
    [400, 40, 10],
    [450, 40, 10],
    [500, 80, 10],
    [550, 80, 10],
    [600, 80, 10],
] as [number, number, number][];

const maxY = 500
const maxX = 500
const maxR = 50


export const ScatterPlot = () => {
    const [points, setPoints] = useState(defaultPoints)


    const randommizeData = useCallback(() => {
        const newPoints = defaultPoints.reduce((acc, p) => {
            return [...acc, [Math.floor(Math.random() * maxX), Math.floor(Math.random() * maxY), Math.floor(Math.random() * maxR)]] as [number, number, number][]
        }, [] as unknown as [number, number, number][])
        setPoints(newPoints)
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
            <D3ScatterPlot points={points} />
        </Grid>
    </Grid>)
}