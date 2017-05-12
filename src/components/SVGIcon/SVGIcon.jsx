import React from 'react'
import PropTypes from 'prop-types'

const SVGIcon = ({ svg, className }) => (
  <svg className={className}>
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
  className: 'c-icon c-icon--sm'
}

export default SVGIcon
