import React from 'react'

import SVGIcon from 'components/SVGIcon'

import basket from 'assets/icons/basket.svg'
import forest from 'assets/images/Forest.png'

const WelcomePage = () => {
  return (
    <div className="ea-u-text-align-center">
      <header>
        <h1>React App Template</h1>
      </header>
      <p>Here have a random forest...</p>
      <img src={forest} alt="Forest" />
      <p>And a basket...</p>
      <SVGIcon svg={basket} className="c-icon c-icon--md" />
    </div>
  )
}

export default WelcomePage
