import React, { useState } from "react"
import { Grid } from "@mui/material"
import { D3Pie } from "../../shapes/D3Pie"

const defaultDataPoints = [10, 20, 16, 60, 38, 110, 105, 80, 40, 30]

export const Arc = () => {
    const [isOrizontal, setIsOrizontal] = useState(false)
    const [data, setData] = useState(defaultDataPoints)
    
    return (<Grid container>
        <Grid item xs={12}>
            <D3Pie dataPoints={data} />
        </Grid>
    </Grid>)
}