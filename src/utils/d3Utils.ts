import * as d3 from "d3";

const margin = { top: 70, right: 30, bottom: 40, left: 80 };
const defaultWidth = 800 - margin.left - margin.right;
const defaultHeight = 500 - margin.top - margin.bottom;

interface ContainerParams {
    containerSelector: string
    height?: number
    width?: number
    centered?: boolean
}

export const generateContainer = ({ containerSelector, height, width, centered }: ContainerParams) => {
    const containerHeight = height || defaultHeight
    const containerWidth = width || defaultWidth
    const marginLeft = centered ? (containerWidth / 2) + margin.left : margin.left
    const marginTop = centered ? (containerHeight / 2) + margin.top : margin.top
    const svg = d3.select(containerSelector).html('').style('display','flex').style('justify-content','center')
        .append("svg")
        .attr("width", (width || defaultWidth) + margin.left + margin.right)
        .attr("height", (height || defaultHeight) + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${marginLeft},${marginTop})`);

    return { containerHeight, containerWidth, container: svg }
}