import { useEffect } from "react"
import * as d3 from 'd3'
import { generateContainer } from "../utils"


const data = {
    "name": "A1",
    "children": [
        {
            "name": "B1",
            "children": [
                {
                    "name": "C1",
                    "value": 100
                },
                {
                    "name": "C2",
                    "value": 300
                },
                {
                    "name": "C3",
                    "value": 200
                }
            ]
        },
        {
            "name": "B2",
            "value": 200
        }
    ]
};


const containerId = 'd3-hierarchy'
export const D3Hierarchy = () => {

    useEffect(() => {
        const { container, containerHeight, containerWidth } = generateContainer({ containerSelector: `#${containerId}` })

        const treemapLayout = d3.treemap()
            .size([containerWidth, containerHeight])
            .paddingOuter(16);

        const rootNode = d3.hierarchy(data)
        rootNode.sum(function (d) {
            //@ts-ignore
            return d.value;
        });

        //@ts-ignore
        treemapLayout(rootNode);

        const nodes = container
            .selectAll('g')
            .data(rootNode.descendants())
            .join('g')
            //@ts-ignore
            .attr('transform', function (d) { return 'translate(' + [d.x0, d.y0] + ')' })

        nodes
            .append('rect')
            .attr('width', function (d) {
                //@ts-ignore 
                return d.x1 - d.x0;
            })
            //@ts-ignore 
            .attr('height', function (d) { return d.y1 - d.y0; })
            .attr('fill', 'skyblue')
            .attr('opacity', .3)
            .attr('stroke', 'white')

        nodes
            .append('text')
            .attr('dx', 4)
            .attr('dy', 14)
            .text(function (d) {
                return d.data.name;
            })

    }, [])

    return <div id={containerId}>
    </div>
}