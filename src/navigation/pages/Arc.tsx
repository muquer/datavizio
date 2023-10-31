import React, { useState } from "react"
import { Grid } from "@mui/material"
import { D3Arc } from "../../shapes/D3Arc"
import { D3Pie } from "../../shapes/D3Pie"

const defaultData = [
    { startAngle: 0, endAngle: 0.2 },
    { startAngle: 0.2, endAngle: 0.6 },
    { startAngle: 0.6, endAngle: 1.4 },
    { startAngle: 1.4, endAngle: 3 },
    { startAngle: 3, endAngle: 2 * Math.PI }
]

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