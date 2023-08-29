import React, { useEffect, useMemo } from 'react'
import * as d3 from 'd3'
import { generateContainer } from '../utils'

var colors = ['#FBB65B', '#513551', '#de3163'];

const containerId = 'stack-container'
export const D3Stack = () => {

    const data = useMemo(() => [
        { day: 'Mon', apricots: 120, blueberries: 180, cherries: 100 },
        { day: 'Tue', apricots: 60, blueberries: 185, cherries: 105 },
        { day: 'Wed', apricots: 100, blueberries: 215, cherries: 110 },
        { day: 'Thu', apricots: 80, blueberries: 230, cherries: 105 },
        { day: 'Fri', apricots: 120, blueberries: 240, cherries: 105 }
    ], [])

    useEffect(() => {
        const keys = data.map(d => d.day)
        const { container, containerWidth, containerHeight } = generateContainer({ containerSelector: `#${containerId}` })
        const stackGenerator = d3.stack().keys(['apricots', 'blueberries', 'cherries'])

        const x = d3.scaleLinear().domain([0, 500]).range([0, containerWidth])
        const y = d3.scaleBand().domain(keys).range([0, containerHeight]).padding(.03)

        const yAxis = d3.axisLeft(y)

        //@ts-ignore
        container.append('g').call(yAxis)

        //@ts-ignore
        const stackData = stackGenerator(data)

        // group all keys
        const series = container.selectAll('.series')
            .data(stackData).join('g')
            .classed('series', true)
            .style('fill', function (d, i) {
                return colors[i];
            });

        // display stack rectangles
        series.selectAll('rect').data(function (d) {
            return d
        }).join('rect').attr('width', function (d) {
            const [initialValue, finalValue] = d
            return x(finalValue) - x(initialValue);
        })
            .attr('x', function (d) {
                const [initialValue, finalValue] = d
                return x(initialValue);
            })
            //@ts-ignore
            .attr('y', function (d, i) {
                const [initialValue, finalValue] = d
                //@ts-ignore
                return y(d.data.day);
            })
            .attr('height', y.bandwidth());


    }, [data])
    return <div id={containerId}></div>

}