import { connect } from 'react-redux'

import Welcome from './Welcome'

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

const WelcomeContainer = connect(mapStateToProps)(Welcome)

export default WelcomeContainer
