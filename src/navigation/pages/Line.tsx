import React from "react"
import { Grid } from "@mui/material"
import { D3Area, D3Line } from "../../shapes"

export const Line = () => {
    return (<Grid container>
        <Grid item xs={12}>
            <D3Line />
        </Grid>
        <Grid item xs={12}>
            <D3Area />
        </Grid>
    </Grid>)
}