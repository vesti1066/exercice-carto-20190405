import { path } from 'ramda'
import trees from '../data/trees.json'

export default (svg, projection) => {
  const getTranslatePoint = feature => {
    const point = projection(path(['geometry', 'coordinates'], feature))
    return `translate(${point[0]},${point[1]})`
  }

  svg.selectAll('text.trees')
    .data(trees.features)
    .enter()
    .append('text')
    .attr('class', 'trees')
    .attr('transform', getTranslatePoint)
    .attr('fill', 'green')
    .text('🌳')
} 