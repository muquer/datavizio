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

export const D3BarH = ({ dataPoints }: Props) => {
    const horizontal = true
    const data = useMemo(() => dataPoints?.map(v => v.value), [dataPoints])
    const days = useMemo(() => dataPoints?.map(v => v.label), [dataPoints])

    useEffect(() => {
        const { container, containerWidth, containerHeight } = generateContainer({ containerSelector: `#${containerId}` })

        let x = d3.scaleLinear().domain([0, d3.max(data, d => d) || 500]).range([400, 0]);
        const y = d3.scaleBand().domain(days).range([0, containerHeight]).padding(.03)

        let axisLeft = d3.axisLeft(x);
        let axisBottom = d3.axisBottom(y);

        container.append('g')
            //@ts-ignore
            .call(axisLeft);

        container.append('g').attr('transform', `translate(0, ${containerHeight + 10})`).call(axisBottom)
            //@ts-ignore
            .call(axisBottom);

        const rects = container.selectAll('rect').data(data).join('rect')
            .attr('x', (d, i) => {
                return (y(days[i]) as number)
            })
            .attr('y', (d, i) => {
                return x(d)
            })
            .attr('width', y.bandwidth())
            .attr('height', d => (containerHeight + 10) - x(d))
            .attr('fill', 'skyblue')


        rects.on('mouseenter', function (d, i) {
            d3.select(this).transition().duration(200).attr('fill', 'blue')
        }).on('mouseout', function () {
            d3.select(this).transition().duration(200).attr('fill', 'skyblue')
        })


    }, [data])
    return <div id={containerId}></div>
}