import React from 'react'
import PropTypes from 'prop-types'

import forest from 'assets/images/Forest.png'

const WelcomePage = ({ title }) => {
  return (
    <div className="u-text-align-center">
      <header>
        <h1>{title}</h1>
      </header>
      <p>Here have a random forest...</p>
      <img src={forest} alt="Forest" />
    </div>
  )
}

WelcomePage.propTypes = {
  title: PropTypes.string.isRequired
}

export default WelcomePage
