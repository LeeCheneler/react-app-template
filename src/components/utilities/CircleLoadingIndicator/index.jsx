import React from 'react'
import PropTypes from 'prop-types'

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
