import React from 'react'
import PropTypes from 'prop-types'

import BarLoadingIndicator from 'components/utilities/BarLoadingIndicator'

// Loads an image async
// If given children then it will display them inplace of the image until it is loaded
// You can pass in a 'delay' property (ms) which will be waited once the image is loaded,
// this can be used to prevent awkward flicker... hmm
class ImageLoader extends React.Component {
  constructor(props) {
    super(props)

    // Going to load the image async via an Image object
    const image = new Image()

    // Once the image has loaded set state after timeout (default is 0ms)
    // All the image attributes are added to the state to be applied to the loaded tag
    image.onload = () => {
      setTimeout(() =>
        this.setState(() => {
          const imageAttributes = {
            alt: props.alt,
            className: props.imageClassName,
            src: props.src,
            title: props.title,
          }

          return {
            imageAttributes,
            loading: false
          }
        }), props.delay)
    }

    // Setup initial loading state and css class to apply to loading display component
    // This css class is ideally used to set the size of the image
    this.state = {
      loaderClassName: props.loaderClassName,
      loading: true
    }

    // Then trigger the start of the image loading by setting the src
    image.src = props.src
  }

  // First render the loading component, uses the flag css component to apply vertical centering
  render() {
    if (this.state.loading) {
      return (
        <div>
          <div className={`ea-o-flag u-center-block ${this.state.loaderClassName}`}>
            <div className="ea-o-flag__component" />
            <div className="ea-o-flag__body">
              <BarLoadingIndicator />
            </div>
          </div>
        </div>
      )
    }
    return (
      // When loaded display an image tag (use object spread to apply all image attributes)
      // eslint-disable-next-line
      <img {...this.state.imageAttributes} />
    )
  }
}

ImageLoader.propTypes = {
  alt: PropTypes.string.isRequired,
  imageClassName: PropTypes.string,
  loaderClassName: PropTypes.string,
  delay: PropTypes.number,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
}

ImageLoader.defaultProps = {
  imageClassName: '',
  loaderClassName: '',
  delay: 0,
  title: ''
}

export default ImageLoader
