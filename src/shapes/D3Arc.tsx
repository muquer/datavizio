import React, { useEffect, useMemo } from 'react'
import * as d3 from 'd3'
import { generateContainer } from '../utils'

const containerId = 'arc-container'
export const D3Arc = () => {

    const data = useMemo(() => [
        { startAngle: 0, endAngle: 0.2 },
        { startAngle: 0.2, endAngle: 0.6 },
        { startAngle: 0.6, endAngle: 1.4 },
        { startAngle: 1.4, endAngle: 3 },
        { startAngle: 3, endAngle: 2 * Math.PI }
    ], [])

    useEffect(() => {
        const { container, containerHeight } = generateContainer({ containerSelector: `#${containerId}`, centered: true })

        const arcGen = d3.arc()
            .innerRadius(20)
            .outerRadius(containerHeight / 2)
            .padAngle(.02)
            .padRadius(100)
            .cornerRadius(4);

        //@ts-ignore
        container.selectAll('path').data(data).join('path').style('fill', 'orange').attr('d', arcGen)
        container.selectAll('text').data(data).join('text').each(function (d, i) {
            console.log({d})
            //@ts-ignore
            const [x, y] = arcGen.centroid(d)
            d3.select(this).attr('fill', 'white').attr('x', x).attr('y', y).text(i)
        })

    }, [data])

    return <div id={containerId}></div>
}