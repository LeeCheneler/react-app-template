import React from 'react'
import PropTypes from 'prop-types'

import CircleLoadingIndicator from 'components/utilities/CircleLoadingIndicator'

// Loads an image async
// If given children then it will display them inplace of the image until it is loaded
class ImageLoader extends React.Component {
  constructor(props) {
    super(props)

    // Setup image to place it in state
    const image = new Image()
    image.className = props.className
    image.alt = props.alt
    image.title = props.title
    image.onload = () => {
      setTimeout(() =>
        this.setState(() => {
          return {
            image,
            loading: false
          }
        }), props.delay)
    }

    // Setup component state in loading state
    this.state = {
      loading: true
    }

    // Then trigger the start of the image loading by setting the src
    image.src = props.src
  }

  render() {
    const state = this.state
    if (this.state.loading) {
      return (
        <div className="ea-o-flag u-height-fill">
          <div className="ea-o-flag__component" />
          <div className="ea-o-flag__body">
            <CircleLoadingIndicator />
          </div>
        </div>
      )
    }
    return (
      <img
        src={state.image.src}
        className={state.image.className}
        alt={state.image.alt}
        title={state.image.title}
      />
    )
  }
}


ImageLoader.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  src: PropTypes.string.isRequired,
  title: PropTypes.string
}

ImageLoader.defaultProps = {
  className: 'c-image',
  delay: 0,
  title: ''
}

export default ImageLoader
