import React from 'react'
import T from 'prop-types'

const ToDo = props =>
  <div>
    {props.title}
    {props.state}
  </div>

ToDo.propTypes = {
  title: T.string.isRequired,
  state: T.string
}

ToDo.defaultProps = {
  state: 'I dont fucking know'
}

export default ToDo
