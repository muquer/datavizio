import React, { useEffect, useMemo } from "react"
import { generateContainer } from "../utils"
import * as d3 from 'd3'


const containerId = 'area-container'

export const D3Area = () => {

    var points = useMemo(() => [
        [0, 80],
        [100, 20],
        [200, 12],
        [300, 30],
        [400, 60],
        [500, 80]
    ], []) as [number, number][];

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

        const lineGenerator = d3.area().x(function(d){
            return x(d[0])
        }).y1(function(d){
            return y(d[1])
        }).y0(containerHeight)

        const lineData = lineGenerator(points)

        container.append('g').selectAll('path').data(points).join('path').attr('d', lineData).style('fill', 'orange')
    }, [])

    return <div id={containerId}></div>

}