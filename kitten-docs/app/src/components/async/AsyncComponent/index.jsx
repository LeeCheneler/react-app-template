import React from 'react'
import T from 'prop-types'

import AsyncBundle from 'components/async/AsyncBundle'
import Loading from 'components/async/Loading'

const AsyncComponent = props =>
  <AsyncBundle load={props.load} loadingComponent={Loading}>
    {Comp => <Comp {...props} />}
  </AsyncBundle>

AsyncComponent.propTypes = {
  load: T.func.isRequired
}

export default AsyncComponent
