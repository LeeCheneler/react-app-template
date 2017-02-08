import React from 'react'
import ReactDOM from 'react-dom'

import './sass/main.scss'

import forest from './../public/Forest.png'

/* eslint no-undef: "off" */

const mountElement = document.getElementById('root')

ReactDOM.render(
  <div>
    <span>Hello world!</span>
    <div>
      <img src={forest} alt="Forest" />
    </div>
  </div>,
  mountElement
)
