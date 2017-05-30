import React from 'react'
import PropTypes from 'prop-types'

// SImply returns the circle loading indicator of a set size
const CircleLoadingIndicator = ({ center }) => {
  const modifier = center ? 'c-circle-loading-indicator--center' : ''

  return (
    <div className={`c-circle-loading-indicator ${modifier}`} />
  )
}

CircleLoadingIndicator.propTypes = {
  center: PropTypes.bool
}

CircleLoadingIndicator.defaultProps = {
  center: true
}

export default CircleLoadingIndicator
