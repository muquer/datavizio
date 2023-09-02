import React from "react"
import { Grid } from "@mui/material"
import { D3Stack } from "../../shapes/D3Stack"
import { D3StackArea } from "../../shapes/D3StackArea"

export const Stack = () => {
    return (<Grid container>
        <Grid item xs={12}>
            <D3Stack />
        </Grid>
        <Grid item xs={12}>
            <D3StackArea />
        </Grid>
    </Grid>)
}