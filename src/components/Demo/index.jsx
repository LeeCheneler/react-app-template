import React from 'react'
import PropTypes from 'prop-types'

const Demo = ({ children, title }) =>
  <div className="ea-u-soft-bottom">
    <h2>{title}</h2>
    <hr />
    {children}
  </div>

Demo.propTypes = {
  children: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired
}

export default Demo
