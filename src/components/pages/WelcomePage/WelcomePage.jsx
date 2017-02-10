import React, { PropTypes } from 'react'

import forest from './../../../../public/Forest.png'

const WelcomePage = ({ title }) => {
  return (
    <div className="u-text-align-center">
      <h1>{title}</h1>
      <p>Here have a random forest...</p>
      <img src={forest} alt="Forest" />
    </div>
  )
}

WelcomePage.propTypes = {
  title: PropTypes.string.isRequired
}

export default WelcomePage
