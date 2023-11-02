import React, { useCallback, useState } from "react"
import { FormControlLabel, Grid, IconButton, Switch } from "@mui/material"
import LoopIcon from '@mui/icons-material/Loop';
import { D3Area, D3Line } from "../../shapes"

var defaultPoints = [
    [0, 80],
    [100, 100],
    [150, 100],
    [200, 30],
    [250, 30],
    [300, 50],
    [350, 50],
    [400, 40],
    [450, 40],
    [500, 80],
    [550, 80],
    [600, 80],
] as [number, number][];

const maxY = 500


export const Line = () => {
    const [isArea, setArea] = useState(false)
    const [points, setPoints] = useState(defaultPoints)


    const randommizeData = useCallback(() => {
        const newPoints = defaultPoints.reduce((acc, p) => {
            return [...acc, [p[0], Math.floor(Math.random() * maxY)]] as [number, number][]
        }, [] as unknown as [number, number][])
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
            <Grid item xs={12}>
                <FormControlLabel control={<Switch onChange={(e, checked) => setArea(checked)} />} label="Area fill" />
            </Grid>
        </Grid>
        <Grid item xs={12}>
            {isArea ? <D3Area points={points} /> : <D3Line points={points} />}
        </Grid>
    </Grid>)
}