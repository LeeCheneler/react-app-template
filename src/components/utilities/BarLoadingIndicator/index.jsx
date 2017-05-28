import React from 'react'
import PropTypes from 'prop-types'

const BarLoadingIndicator = ({ center }) => {
  const modifier = center ? 'c-bar-loading-indicator--center' : ''

  return (
    <div className={`c-bar-loading-indicator ${modifier}`}>
      <div className="c-bar-loading-indicator__bar" />
    </div>
  )
}

BarLoadingIndicator.propTypes = {
  center: PropTypes.bool
}

BarLoadingIndicator.defaultProps = {
  center: true
}

export default BarLoadingIndicator
