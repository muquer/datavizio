import { useEffect } from "react"
import * as d3 from 'd3'

const containerId = 'geo-container'

function handleMouseover(e: Event, d: any, geoGenerator: d3.GeoPath<any, d3.GeoPermissibleObjects>) {
    let bounds = geoGenerator.bounds(d);

    d3.select('#content .info')
        .text(d.properties.name);

    d3.select('#content .bounding-box rect')
        .attr('x', bounds[0][0])
        .attr('y', bounds[0][1])
        .attr('width', bounds[1][0] - bounds[0][0])
        .attr('height', bounds[1][1] - bounds[0][1])
        .attr('fill', 'transparent')
        .attr('stroke', 'red')
}

function update(geojson: any, geoGenerator: d3.GeoPath<any, d3.GeoPermissibleObjects>) {
    let u = d3.select('#content g.map')
        .selectAll('path')
        .data(geojson.features);

    u.enter()
        .append('path')
        //@ts-ignore
        .attr('d', geoGenerator)
        .on('mouseover', (e, d) => handleMouseover(e, d, geoGenerator));
}

export const D3Geo = () => {


    useEffect(() => {
        const projection = d3.geoMercator()
            .scale(400)
            .translate([200, 280])
            .center([0, 5]);

        const geoGenerator = d3.geoPath()
            .projection(projection);

        d3.json('https://assets.codepen.io/2814973/africa.json')
            .then(function (json) {
                update(json, geoGenerator)
            })
    }, [])

    return <div id={containerId}>
        <div id="content">
            <div className="info">Hover over a country</div>
            <svg width="620px" height="600px">
                <g className="map"></g>
                <g className="bounding-box"><rect></rect></g>
                <g className="centroid"><circle r="4"></circle></g>
            </svg>
        </div>

    </div>
}