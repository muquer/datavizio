import React, { useEffect } from "react"
import { generateContainer } from "../utils"
import * as d3 from 'd3'


const containerId = 'line-container'

interface Props {
    points: [number, number, number][]
}

export const D3ScatterPlot = ({ points }: Props) => {

    useEffect(() => {
        const { container, containerHeight, containerWidth } = generateContainer({ containerSelector: `#${containerId}` })

        const maxX = d3.max(points, p => p[0])
        const minX = d3.min(points, p => p[0]) || 0

        const maxY = d3.max(points, p => p[1])
        const minY = d3.min(points, p => p[1]) || 0


        const x = d3.scaleLinear().range([0, containerWidth]).domain([minX, maxX || 0])

        const y = d3.scaleLinear().range([containerHeight, 0]).domain([minY, maxY || 0])

        const leftAxis = d3.axisLeft(y)
        const bottomAxis = d3.axisBottom(x)

        container.append('g').attr('transform', `translate(0, ${containerHeight})`).call(bottomAxis)
        container.append('g').call(leftAxis)

        const tooltipCircle = container.selectAll(`circle`).data(points).join('circle').attr('cx', (d) => {
            return x(d[0])
        }).attr('cy', (d) => {
            return y(d[1])
        }).attr('r', (d) => d[2])
            .attr('fill', () => {
                const opacity = Math.max(.2, Math.random())
                return `rgb(135,206,235, ${opacity})`
            })

        tooltipCircle.on('mouseover', function (d, i) {


            container.selectAll('.tt').transition().duration(100).remove()
            container.selectAll('.tx').transition().duration(100).remove()
            const hrect = container.append('rect')
            const vrect = container.append('rect')

            hrect.attr('x', 0)
                .attr('y', y(i[1]))
                .attr('height', .5)
                .attr('width', () => {
                    return x(i[0])
                })
                .classed('tt', true)

            vrect.attr('x', x(i[0]))
                .attr('y', y(i[1]))
                .attr('width', 1)
                .attr('height', () => {
                    return containerHeight - y(i[1])
                })
                .classed('tt', true)

            container.append('text')
                .attr('dx', x(i[0]))
                .attr('dy', y(i[1]))
                .text(() => {

                    //@ts-ignore
                    return `${i[0]},${i[1]}`
                })
                .classed('tx', true)

        })

    }, [points])

    return <div id={containerId}></div>

}