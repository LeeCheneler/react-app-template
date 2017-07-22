import React from 'react'
import PropTypes from 'prop-types'

// Renders an SVG Icon
const SVGIcon = ({ svg, className }) => (
  <svg role="presentation" className={className}>
    <use xlinkHref={`#${svg.id}`} />
  </svg>
)

SVGIcon.propTypes = {
  svg: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  className: PropTypes.string
}

SVGIcon.defaultProps = {
  className: 'c-icon'
}

export default SVGIcon
