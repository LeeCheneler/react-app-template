import React from 'react'
import T from 'prop-types'

import AsyncBundle from 'components/async/AsyncBundle'

const AsyncComponent = props =>
  <AsyncBundle load={props.load}>
    {Comp => <Comp {...Object.assign({}, props, { load: undefined })} />}
  </AsyncBundle>

AsyncComponent.propTypes = {
  load: T.func.isRequired
}

export default AsyncComponent
