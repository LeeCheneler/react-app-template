import React from 'react'

import SVGIcon from 'components/common/SVGIcon'

import GithubIcon from 'assets/icons/github.svg'

const Home = () =>
  <main>
    <h1>React App Template</h1>
    <nav>
      <a href="https://github.com/leecheneler/react-app-template">
        Repository
        <SVGIcon svg={GithubIcon} className="c-icon c-icon--right" />
      </a>
    </nav>
  </main>

export default Home
