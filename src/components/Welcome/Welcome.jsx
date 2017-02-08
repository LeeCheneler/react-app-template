import React, { PropTypes } from 'react'

import forest from './../../../public/Forest.png'

const Welcome = ({ message }) => {
  return (
    <div>
      <span>{message}</span>
      <div>
        <img src={forest} alt="Forest" />
      </div>
    </div>
  )
}

Welcome.propTypes = {
  message: PropTypes.string.isRequired
}

export default Welcome
