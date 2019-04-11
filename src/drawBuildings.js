import { path } from 'ramda'
import buildings from '../data/buildings.json'

export default (svg, pathCreator) => {

    const university = ['university']
    const hospital = ['hospital']

    const getBuildingColor = feature => {
        const type = path(['properties', 'building'], feature)
        if (university.includes(type)) {
            return 'tomato'
        }
        if (hospital.includes(type)) {
            return 'blue'
        }
        return 'none'
    }

    svg.selectAll('path.building')
        .data(buildings.features)
        .enter()
        .append('path')
            .attr('class', 'building')
            .attr('d', pathCreator)
            .attr('fill', getBuildingColor)
            .attr('stroke', 'black')
            .attr('stroke-width', 2)
            .attr('stroke-linecap', 'round')
} 