import * as d3 from "d3";

const margin = { top: 70, right: 30, bottom: 40, left: 80 };
const defaultWidth = 1200 - margin.left - margin.right;
const defaultHeight = 500 - margin.top - margin.bottom;

interface ContainerParams {
    containerSelector: string
    height?: number
    width?: number
}

export const generateContainer = ({ containerSelector, height, width }: ContainerParams) => {
    const containerHeight = height || defaultHeight
    const containerWidth = width || defaultWidth
    const svg = d3.select(containerSelector).html('')
        .append("svg")
        .attr("width", (width || defaultWidth) + margin.left + margin.right)
        .attr("height", (height || defaultHeight) + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    return { containerHeight, containerWidth, container: svg }
}