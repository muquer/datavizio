import React, { useEffect } from 'react'
import * as d3 from 'd3'
import { generateContainer } from '../utils'

const labels = [
    "model",
    "exemplar",
    "good example",
    "case",
    "instance",
    "illustration",
    "representative",
    "deterrent example",
    "lesson",
    "object lesson",
    "exercise"
]


function getNormalizedValue(value: number, min: number, max: number) {
    return (value - min) / (max - min);
}

function getPercentage(array: number[], value: number) {
    const p = value / d3.sum(array)

    return parseInt(`${p * 100}`)
}

const containerId = 'pie-container'

interface Props {
    dataPoints: number[]
}

export const D3Pie = ({ dataPoints }: Props) => {

    useEffect(() => {

        const max = d3.max(dataPoints, p => p) || 0
        const min = d3.min(dataPoints, p => p) || 0

        const { container, containerHeight } = generateContainer({ containerSelector: `#${containerId}`, centered: true })
        const pieGen = d3.pie()
        const pieData = pieGen(dataPoints)

        const arcGen = d3.arc()
            .innerRadius(20)
            .outerRadius(containerHeight / 2)
            .padAngle(.02)
            .padRadius(100)
            .cornerRadius(4);

        //@ts-ignore
        const path = container.selectAll('path').data(pieData).join('path').attr('d', arcGen)
        path.attr('fill', 'rgb(118,118,118,.5)').each((e, i) => {
            //@ts-ignore
            const [x, y] = arcGen.centroid(e)
            container.append('text').attr('x', x).attr('y', y).text(e.value).attr('fill', 'white')
        })

        path.on('mouseenter', function (event, data) {
            console.log({ event, data })
            const v = getNormalizedValue(data.value, min, max)
            d3.select(this).attr('fill', `rgba(39, 196, 245, ${v})`)

            //@ts-ignore
            const [x, y] = arcGen.centroid(data)
            d3.selectAll('.text').transition().duration(100).remove()
            container.append('text')
                .attr('x', x)
                .attr('y', y)
                .attr('dy', '1em')
                //@ts-ignore
                .text(`${labels[data.index]} (${getPercentage(dataPoints, data.value)}%)`)
                .style('fill', '#4d729f')
                .classed('text', true)
        }).on('mouseleave', function (event, data) {
            d3.select(this).attr('fill', 'rgb(118,118,118,.5)')
        })

    }, [dataPoints])

    return <div id={containerId}></div>
}