import React from 'react'
import T from 'prop-types'

class AsyncBundle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mod: null
    }
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    // Don't bother reloading if it's the same module
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
      mod: null
    })

    props.load((mod) => {
      this.setState({
        // Handle both es imports and cjs
        mod: mod.default || mod
      })
    })
  }

  render() {
    return this.state.mod
      ? this.props.children(this.state.mod)
      : this.props.loadingComponent()
  }
}

AsyncBundle.propTypes = {
  children: T.func.isRequired,
  load: T.func.isRequired,
  loadingComponent: T.func.isRequired
}

export default AsyncBundle
