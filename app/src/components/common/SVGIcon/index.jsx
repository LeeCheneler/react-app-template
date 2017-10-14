import React from 'react'
import T from 'prop-types'

const SVGIcon = ({ svg, className }) => (
  <svg role="presentation" className={className}>
    <use xlinkHref={`#${svg.id}`} />
  </svg>
)

SVGIcon.propTypes = {
  svg: T.shape({
    id: T.string.isRequired
  }).isRequired,
  className: T.string
}

SVGIcon.defaultProps = {
  className: 'c-icon'
}

export default SVGIcon
