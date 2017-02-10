import React, { PropTypes } from 'react'

import forest from './../../../../public/Forest.png'

const WelcomePage = ({ message }) => {
  return (
    <div>
      <span>{message}</span>
      <div>
        <img src={forest} alt="Forest" />
      </div>
    </div>
  )
}

WelcomePage.propTypes = {
  message: PropTypes.string.isRequired
}

export default WelcomePage
