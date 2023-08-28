import React, { useEffect, useMemo } from 'react'
import * as d3 from 'd3'
import { generateContainer } from '../utils'

const containerId = 'pie-container'
export const D3Pie = () => {

    const data = useMemo(() => [10, 20, 16, 60, 38, 110, 105, 80, 40, 30], [])

    useEffect(() => {
        const { container, containerHeight } = generateContainer({ containerSelector: `#${containerId}`, centered: true })
        const pieGen = d3.pie()
        const pieData = pieGen(data)

        const arcGen = d3.arc()
            .innerRadius(20)
            .outerRadius(containerHeight / 2)
            .padAngle(.02)
            .padRadius(100)
            .cornerRadius(4);

        //@ts-ignore
        container.selectAll('path').data(pieData).join('path').style('fill', 'skyblue').attr('d', arcGen)

        container.selectAll('text').data(pieData).join('text').each(function (d) {
            //@ts-ignore
            const [x, y] = arcGen.centroid(d)
            d3.select(this)
                .attr('x', x)
                .attr('y', y)
                .attr('dy', '0.33em')
                .text(d.value)
                .style('fill', 'white')
        })

    }, [data])

    return <div id={containerId}></div>
}