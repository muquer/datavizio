import React, { useEffect, useMemo } from 'react'
import * as d3 from 'd3'
import { generateContainer } from '../utils'

var colors = ['#FBB65B', '#513551', '#de3163'];

const containerId = 'stack-area-container'
export const D3StackArea = () => {

    /**
     * 
// TIME FORMAT CONVERSION D3     
      
     
const tParser = d3.timeParse("%d/%m/%Y")
then use on your string

const date = tParser(expense.date)
then use d3.timeFormat("%Y")

const year = d3.timeFormat("%Y")(date)
Or much simpler just split your string as rioV8 commented

expense.date = +expense.date.split('/')[2]

     */

    const data = useMemo(() => [
        { day: 'Mon', apricots: 120, blueberries: 180, cherries: 100 },
        { day: 'Tue', apricots: 60, blueberries: 185, cherries: 105 },
        { day: 'Wed', apricots: 100, blueberries: 215, cherries: 110 },
        { day: 'Thu', apricots: 80, blueberries: 230, cherries: 105 },
        { day: 'Fri', apricots: 120, blueberries: 240, cherries: 105 }
    ], [])

    useEffect(() => {
        const { container: svg, containerWidth: width, containerHeight: height } = generateContainer({ containerSelector: `#${containerId}` })

        d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered_wide.csv")
            .then(function (data) {

                const keys = Object.keys(data[0]).filter(k => k !== 'year')
                var colors = d3.scaleOrdinal()
                .domain(keys)
                .range(d3.schemeSet2);

                //@ts-ignore
                const xScale = d3.scaleLinear().domain(d3.extent(data, function(d) { return d.year; })).range([0, width])
                const yScale = d3.scaleLinear().domain([0, 200000]).range([height, 0])

                const xAxis = d3.axisBottom(xScale).ticks(5)
                const yAxis = d3.axisLeft(yScale)

                svg.append('g').attr('transform', `translate(0, ${height})`).call(xAxis)
                svg.append('g').call(yAxis)

                const stackGenerator = d3.stack().keys(keys)
                //@ts-ignore
                const stackData = stackGenerator(data)

                //@ts-ignore
                const areaGenerator = d3.area().x(function (d, i) {
                    //@ts-ignore
                    return xScale(d.data.year)
                }).y0(function (d) {
                    return yScale(d[0])
                }).y1(function (d) {
                    return yScale(d[1])
                })

                //@ts-ignore
                svg.selectAll('path').data(stackData).join('path').style('fill', function(d,i){
                    return colors(d.key)
                    //@ts-ignore
                }).attr('d', areaGenerator)

            })


    }, [data])
    return <div id={containerId}></div>

}