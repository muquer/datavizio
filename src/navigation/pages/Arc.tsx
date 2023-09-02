import React from "react"
import { Grid } from "@mui/material"
import { D3Arc } from "../../shapes/D3Arc"
import { D3Pie } from "../../shapes/D3Pie"

export const Arc = () => {
    return (<Grid container>
        <Grid item xs={12}>
            <D3Arc />
        </Grid>
        <Grid item xs={12}>
            <D3Pie />
        </Grid>
    </Grid>)
}