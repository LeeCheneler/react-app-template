import React from 'react'

import BarLoadingIndicator from 'components/utilities/BarLoadingIndicator'
import CircleLoadingIndicator from 'components/utilities/CircleLoadingIndicator'
import ImageLoader from 'components/utilities/ImageLoader'
import SVGIcon from 'components/utilities/SVGIcon'

import basket from 'assets/icons/basket.svg'
import forest from 'assets/images/Forest.png'

const WelcomePage = () => (
  <div className="ea-u-text-align-center">
    <header>
      <h1>React App Template</h1>
    </header>
    <p>Here have a random forest image...</p>
    <ImageLoader
      src={forest}
      alt="Forest"
      imageClassName="c-image c-image--32x32 u-center-block"
      loaderClassName="c-image--32x32"
      delay={1500}
    />
    <p>And a basket svg icon...</p>
    <SVGIcon svg={basket} className="c-icon c-icon--md" />
    <p>And a couple of loading indicators...</p>
    <ul className="ea-o-list ea-o-list--bare ea-o-list--trench">
      <li className="ea-o-list__item">
        <BarLoadingIndicator />
      </li>
      <li className="ea-o-list__item">
        <CircleLoadingIndicator />
      </li>
    </ul>
  </div>
)

export default WelcomePage
