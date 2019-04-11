import { path } from 'ramda'
import roads from '../data/roads.json'

export default (svg, pathCreator) => {

  const smallRoadTypes = ['footway', 'path']
  const bigRoadTypes = ['primary']
  
  const getRoad = feature => {
    const type = path(['properties', 'highway'], feature)
    if (smallRoadTypes.includes(type)) {
      return 5
    }
    if (bigRoadTypes.includes(type)) {
      return 20
    }
    return 7
  }
  
  svg.selectAll('path.road')
    .data(roads.features)
    .enter()
    .append('path')
      .attr('class', 'road')
      .attr('d', pathCreator)
      .attr('fill', 'none')
      .attr('stroke', 'grey')
      .attr('stroke-width', getRoad)
      .attr('stroke-linecap', 'round')
}