import React, { useEffect, useMemo } from 'react'
import * as d3 from 'd3'
import { generateContainer } from '../utils'


const containerId = 'stack-container'

interface Props {
    dataPoints: {
        label: string,
        value: number
    }[]
}

export const D3Bar = ({ dataPoints }: Props) => {
    const horizontal = true
    const data = useMemo(() => dataPoints?.map(v => v.value), [dataPoints])
    const days = useMemo(() => dataPoints?.map(v => v.label), [dataPoints])

    useEffect(() => {
        const { container, containerWidth, containerHeight } = generateContainer({ containerSelector: `#${containerId}` })

        const x = d3.scaleLinear().domain([0, 500]).range([0, containerWidth])
        const y = d3.scaleBand().domain(days).range([0, containerHeight]).padding(.03)

        const yAxis = d3.axisLeft(y)
        const xAxis = d3.axisBottom(x)
        container.append('g').call(yAxis)
        container.append('g').attr('transform', `translate(0, ${containerHeight})`).call(xAxis)

        const barWidth = 50
        const rects = container.selectAll('rect').data(data).join('rect')

        rects.on('mouseenter', function (d, i) {
            d3.select(this).transition().duration(200).attr('fill', 'blue')
        }).on('mouseout', function () {
            d3.select(this).transition().duration(200).attr('fill', 'skyblue')
        })

        rects.transition().duration(100).attr('x', 1)
            .attr('y', (d, i) => {
                return ((y(days[i]) ?? y('Mon')) ?? 0) + 15
            })
            .attr('width', (d) => {
                return x(d)
            }).attr('fill', 'skyblue')
            .attr('height', barWidth)

    }, [data])
    return <div id={containerId}></div>
}